import { ILogger } from './logger.interface';

export class ConsoleLogger implements ILogger {
  private static instance: ConsoleLogger | undefined;

  private constructor() {}

  public static getInstance(): ConsoleLogger {
    if (!this.instance) {
      this.instance = new ConsoleLogger();
    }

    return this.instance;
  }

  log(...args: any[]): void {
    console.log('Вывод', ...args);
  }

  end(): void {
    console.log('Завершение процесса');
  }

  error(...args: any[]): void {
    console.error('Ошибка: ', ...args);
  }
}
