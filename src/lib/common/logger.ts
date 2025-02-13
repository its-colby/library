import fs from 'fs';
import path from 'path';

export enum LogLevel {
    ERROR = 0,
    WARN = 1,
    INFO = 2,
    DEBUG = 3,
    TRACE = 4
}

export enum LogDestination {
    CONSOLE = 'console',
    FILE = 'file',
    BOTH = 'both'
}

interface LogConfig {
    level: LogLevel;
    destination: LogDestination;
    filepath?: string;
}

export class Logger {
    private static instance: Logger;
    private current_level: LogLevel = LogLevel.DEBUG;
    private destination: LogDestination = LogDestination.CONSOLE;
    private log_stream?: fs.WriteStream;
    
    private constructor() {
        // Private constructor for singleton
    }

    static get_instance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    configure(config: LogConfig): void {
        this.current_level = config.level;
        this.destination = config.destination;

        // Close existing stream if it exists
        if (this.log_stream) {
            this.log_stream.end();
        }

        // Setup file stream if needed
        if (config.destination !== LogDestination.CONSOLE) {
            const log_path = config.filepath || path.join(process.cwd(), 'logs', 'debug.log');
            const log_dir = path.dirname(log_path);
            
            // Ensure log directory exists
            if (!fs.existsSync(log_dir)) {
                fs.mkdirSync(log_dir, { recursive: true });
            }
            
            this.log_stream = fs.createWriteStream(log_path, { flags: 'a' });
        }
    }

    private log(level: LogLevel, message: string, ...args: any[]): void {
        if (level > this.current_level) return;

        const timestamp = new Date().toISOString();
        const level_name = LogLevel[level];
        const formatted_message = `[${timestamp}] ${level_name}: ${message}`;
        
        // Format additional arguments
        const full_message = args.length > 0 
            ? `${formatted_message} ${args.map(arg => 
                typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg
              ).join(' ')}`
            : formatted_message;

        if (this.destination === LogDestination.CONSOLE || this.destination === LogDestination.BOTH) {
            const console_method = level === LogLevel.ERROR ? 'error' 
                : level === LogLevel.WARN ? 'warn'
                : 'log';
            console[console_method](full_message);
        }

        if ((this.destination === LogDestination.FILE || this.destination === LogDestination.BOTH) && this.log_stream) {
            this.log_stream.write(`${full_message}\n`);
        }
    }

    // Level-specific logging methods remain camelCase as they are public API methods
    error(message: string, ...args: any[]): void {
        this.log(LogLevel.ERROR, message, ...args);
    }

    warn(message: string, ...args: any[]): void {
        this.log(LogLevel.WARN, message, ...args);
    }

    info(message: string, ...args: any[]): void {
        this.log(LogLevel.INFO, message, ...args);
    }

    debug(message: string, ...args: any[]): void {
        this.log(LogLevel.DEBUG, message, ...args);
    }

    trace(message: string, ...args: any[]): void {
        this.log(LogLevel.TRACE, message, ...args);
    }

    // Level checking methods
    get is_error(): boolean {
        return this.current_level >= LogLevel.ERROR;
    }

    get is_warn(): boolean {
        return this.current_level >= LogLevel.WARN;
    }

    get is_info(): boolean {
        return this.current_level >= LogLevel.INFO;
    }

    get is_debug(): boolean {
        return this.current_level >= LogLevel.DEBUG;
    }

    get is_trace(): boolean {
        return this.current_level >= LogLevel.TRACE;
    }
}

// Define ANSI escape codes for colors
export const colors = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",

    fg: {
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
    },
    bg: {
        black: "\x1b[40m",
        red: "\x1b[41m",
        green: "\x1b[42m",
        yellow: "\x1b[43m",
        blue: "\x1b[44m",
        magenta: "\x1b[45m",
        cyan: "\x1b[46m",
        white: "\x1b[47m",
    }
};

// Export a singleton instance
export const logger = Logger.get_instance(); 