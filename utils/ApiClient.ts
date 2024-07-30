/* eslint-disable @typescript-eslint/no-explicit-any */
import config from "@/config";
import Cookies from "js-cookie";
import Logger from "./logger";

type HttpMethod = "GET" | "POST" | "PATCH" | "DELETE" | "PUT";

export interface Endpoint {
  url: string;
  method: HttpMethod;
  params?: string | Record<string, any>;
  options?: RequestInit;
}

class ApiClient {
  private readonly baseUrl = config.API_BASE_URL;
  private headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  private setAuthHeader(): void {
    const authToken = Cookies.get("token");
    if (authToken) {
      (this.headers as Record<string, string>)[
        "Authorization"
      ] = `Bearer ${authToken}`;
    } else {
      delete (this.headers as Record<string, string>)["Authorization"];
    }
  }

  private async fetch(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<Response> {
    const hasToken = Boolean(Cookies.get("token"));
    this.setAuthHeader();
    const url = `${this.baseUrl}${endpoint}`;
    const response = await fetch(url, {
      ...options,
      headers: { ...this.headers, ...options.headers },
    });

    if (!response.ok) {
      if (response.status === 401 && hasToken) {
        Logger.warn("Token expired or invalid, handle token renewal");
      }
      return response;
    }

    return response;
  }

  async call({
    url,
    method,
    params,
    options,
    body,
  }: Endpoint & { body?: any }): Promise<Response> {
    let endpoint = url;
    const fetchOptions: RequestInit = {
      ...options,
      method: method,
    };

    // Handle query parameters
    if (params) {
      if (typeof params === "string") {
        endpoint += `?${params}`;
      } else {
        const queryParams = new URLSearchParams(
          params as Record<string, string>
        ).toString();
        endpoint += `?${queryParams}`;
      }
    }

    // Handle body for POST, PUT, PATCH, DELETE methods
    if (body && ["POST", "PUT", "PATCH", "DELETE"].includes(method)) {
      fetchOptions.body = JSON.stringify(body);
    }

    return this.fetch(endpoint, fetchOptions);
  }

  async get(endpoint: string, options: RequestInit = {}): Promise<Response> {
    return this.fetch(endpoint, { ...options, method: "GET" });
  }

  async post(
    endpoint: string,
    body?: any,
    options: RequestInit = {}
  ): Promise<Response> {
    return this.fetch(endpoint, {
      ...options,
      method: "POST",
      body: body ? JSON.stringify(body) : null,
    });
  }

  async put(
    endpoint: string,
    body: any,
    options: RequestInit = {}
  ): Promise<Response> {
    return this.fetch(endpoint, {
      ...options,
      method: "PUT",
      body: JSON.stringify(body),
    });
  }

  async patch(
    endpoint: string,
    body?: any,
    options: RequestInit = {}
  ): Promise<Response> {
    return this.fetch(endpoint, {
      ...options,
      method: "PATCH",
      body: JSON.stringify(body),
    });
  }

  async delete(
    endpoint: string,
    body?: any,
    options: RequestInit = {}
  ): Promise<Response> {
    return this.fetch(endpoint, {
      ...options,
      method: "DELETE",
      body: JSON.stringify(body),
    });
  }

  async uploadJson(
    endpoint: string,
    data: any,
    onUploadProgress?: (event: ProgressEvent<XMLHttpRequestEventTarget>) => void
  ): Promise<Response> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("PATCH", `${this.baseUrl}${endpoint}`, true);

      this.setAuthHeader();
      xhr.setRequestHeader("Content-Type", "application/json");
      Object.keys(this.headers).forEach((key) => {
        xhr.setRequestHeader(key, this.headers[key] as string);
      });

      if (onUploadProgress) {
        xhr.upload.addEventListener(
          "progress",
          onUploadProgress as EventListener
        );
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(new Response(xhr.responseText, { status: xhr.status }));
          } else {
            reject(
              new Error(
                `API request failed with status ${xhr.status}: ${xhr.responseText}`
              )
            );
          }
        }
      };

      xhr.onerror = () => {
        reject(new Error(`Network error occurred during the upload`));
      };

      xhr.send(JSON.stringify(data));
    });
  }
}

export default ApiClient;
