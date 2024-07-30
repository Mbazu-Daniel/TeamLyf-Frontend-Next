/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { cookies } from "next/headers";
import config from "@/config";

type HttpMethod = "GET" | "POST" | "PATCH" | "DELETE" | "PUT";

export interface Endpoint {
  url: string;
  method: HttpMethod;
  params?: string | Record<string, any>;
  options?: RequestInit;
}

class ServerApiClient {
  private readonly baseUrl = config.API_BASE_URL;

  private getAuthToken(): string | undefined {
    const cookieStore = cookies();
    return cookieStore.get("token")?.value;
  }

  private async fetch(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<Response> {
    const url = `${this.baseUrl}${endpoint}`;
    const authToken = this.getAuthToken();

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...(options.headers as Record<string, string>),
    };

    if (authToken) {
      headers.Authorization = `Bearer ${authToken}`;
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

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
    let fetchOptions: RequestInit = {
      ...options,
      method: method,
    };

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

    // Handle cache options
    if (options?.cache) {
      fetchOptions.cache = options.cache;
      if (options.cache === "no-store") {
        fetchOptions.headers = {
          ...fetchOptions.headers,
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        };
      }
    }

    return this.fetch(endpoint, fetchOptions);
  }

  async get(
    endpoint: string,
    options: RequestInit = {},
    cacheOption:
      | "default"
      | "no-store"
      | "force-cache"
      | "only-if-cached" = "default"
  ): Promise<Response> {
    let fetchOptions: RequestInit = {
      ...options,
      method: "GET",
      headers: {
        ...options.headers,
      },
    };

    switch (cacheOption) {
      case "no-store":
        fetchOptions.cache = "no-store";
        fetchOptions.headers = {
          ...fetchOptions.headers,
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        };
        break;
      case "force-cache":
        fetchOptions.cache = "force-cache";
        break;
      case "only-if-cached":
        fetchOptions.cache = "only-if-cached";
        break;
      default:
        break;
    }

    return this.fetch(endpoint, fetchOptions);
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
}

export default ServerApiClient;
