import { LogLevel } from "@/constants";

const definedLogLevel = process.env.NEXT_PUBLIC_LOG_LEVEL || "error";
const baseURL = process.env.NEXT_PUBLIC_APP_BASE_URL;
const apiBaseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const config = {
  LOG_LEVEL:
    definedLogLevel in LogLevel
      ? LogLevel[definedLogLevel as keyof typeof LogLevel]
      : LogLevel.DEBUG,
  BASE_URL: baseURL,
  API_BASE_URL: apiBaseURL,
};

export default config;
