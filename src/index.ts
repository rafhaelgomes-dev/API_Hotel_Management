import * as express from 'express';

type port = number | string;

export default class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  public config = (): void => {
    this.app.use(express.json);
  }

  public start = (PORT: port): void => {
    this.app.listen(PORT, () => {
      console.log(`Running on port ${PORT}`)
    })
  }
}