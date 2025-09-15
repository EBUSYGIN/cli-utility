import { FfmpegExecuter } from './commands/ffmpeg/ffmpeg.executer';
import { ConsoleLogger } from './out/console/logger';

class App {
  async run() {
    new FfmpegExecuter(ConsoleLogger.getInstance()).execute();
  }
}

const app = new App();
app.run();
