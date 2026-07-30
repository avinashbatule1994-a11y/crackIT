import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CodeRunnerService {

  run(code: string): string {

    const logs: string[] = [];

    const originalConsole = console.log;

    console.log = (...args: unknown[]) => {

      logs.push(
        args
          .map(value =>
            typeof value === 'object'
              ? JSON.stringify(value, null, 2)
              : String(value)
          )
          .join(' ')
      );

    };

    try {

      new Function(code)();

    } catch (error) {

      if (error instanceof Error) {

        logs.push(`❌ ${error.message}`);

      } else {

        logs.push('Unknown Error');

      }

    }

    console.log = originalConsole;

    return logs.join('\n');

  }

}