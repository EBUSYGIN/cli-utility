import { PromptService } from './core/prompt/prompt.service';

const prompt = new PromptService();

async function run() {
  const data = await prompt.input<number>('Число', 'number');
  console.log(data);
}

run();

// export class App {
//   run() {
//     console.log('done');
//   }
// }

// const app = new App();
// app.run();
