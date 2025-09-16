import { ChildProcessWithoutNullStreams } from 'child_process';
import { ILogger } from '../../out/console/logger.interface';

//Proxy class to properly handler stream. Stands between logger class and actual stream
export class StreamHandler {
  constructor(private logger: ILogger) {}

  processOutput(stream: ChildProcessWithoutNullStreams) {
    stream.stdout.on('data', (data: any) => {
      this.logger.log(data.toString());
    });

    stream.stderr.on('data', (data: any) => {
      this.logger.error(data.toString());
    });

    stream.on('close', () => {
      this.logger.end();
    });
  }
}
