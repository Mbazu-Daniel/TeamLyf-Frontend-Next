/* eslint-disable no-console */
import config from "@/config";
import { LogLevel } from "@/constants";

export default class Logger {
  private static logMessage(level: LogLevel, ...args: any[]): void {
    if (config.LOG_LEVEL >= LogLevel.OFF && config.LOG_LEVEL <= level) {
      switch (level) {
        case LogLevel.ERROR:
          console.error(...args);
          break;
        case LogLevel.WARN:
          console.warn(...args);
          break;
        case LogLevel.INFO:
          console.info(...args);
          break;
        case LogLevel.DEBUG:
          console.log(...args);
          break;
        case LogLevel.TRACE:
          console.trace(...args);
          break;
      }
    }
  }

  static error(...args: any[]): void {
    this.logMessage(LogLevel.ERROR, ...args);
  }

  static warn(...args: any[]): void {
    this.logMessage(LogLevel.WARN, ...args);
  }

  static info(...args: any[]): void {
    this.logMessage(LogLevel.INFO, ...args);
  }

  static debug(...args: any[]): void {
    this.logMessage(LogLevel.DEBUG, ...args);
  }

  static trace(...args: any[]): void {
    this.logMessage(LogLevel.TRACE, ...args);
  }

  static log(...args: any[]): void {
    this.info(...args);
  }
}

/**
 * Logger Class Documentation
 *
 * The Logger class provides a centralized logging mechanism for the application.
 * It supports different log levels and respects the configured LOG_LEVEL in the application config.
 *
 * Features:
 * - Supports multiple log levels: OFF, ERROR, WARN, INFO, DEBUG, TRACE
 * - Respects the LOG_LEVEL configuration to control which messages are logged
 * - Provides static methods for easy access throughout the application
 * - Accepts multiple arguments for each log method, similar to console methods
 *
 * Log Levels:
 * OFF (-1): Turns off all logging
 * ERROR (0): For critical errors that need immediate attention
 * WARN (1): For warning messages that are not critical but need attention
 * INFO (2): For general information messages
 * DEBUG (3): For debug messages useful during development
 * TRACE (4): For very detailed logging, typically used for tracing code execution
 *
 * Usage:
 * import Logger from '@/utils/Logger';
 *
 * Logger.error('Critical error occurred', errorObject);
 * Logger.warn('Warning: Resource usage high');
 * Logger.info('User logged in', userId);
 * Logger.debug('Debug: Variable state', debugData);
 * Logger.trace('Entering function', functionName);
 *
 * Configuration:
 * The logging level is controlled by the LOG_LEVEL in the application config.
 * Only messages at or below the configured level will be logged.
 * Setting LOG_LEVEL to LogLevel.OFF will disable all logging.
 *
 * Private Methods:
 * - logMessage(level: LogLevel, ...args: any[]): void
 *   Internal method used by all public logging methods. It checks the log level
 *   and calls the appropriate console method.
 *
 * Public Methods:
 * - error(...args: any[]): void
 *   Logs error messages. Use for critical errors that need immediate attention.
 *
 * - warn(...args: any[]): void
 *   Logs warning messages. Use for non-critical issues that need attention.
 *
 * - info(...args: any[]): void
 *   Logs informational messages. Use for general application information.
 *
 * - debug(...args: any[]): void
 *   Logs debug messages. Use for detailed information useful during development.
 *
 * - trace(...args: any[]): void
 *   Logs trace messages. Use for very detailed logging, typically for tracing code execution.
 *
 * - log(...args: any[]): void
 *   An alias for the info method. Provided for compatibility with console.log usage.
 *
 */
