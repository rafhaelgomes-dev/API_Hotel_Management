import * as express from 'express';
import * as cors from 'cors';
import routers from './routes/main.routes';

type port = number | string;

export default class App {
  private app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config = (): void => {
    this.app.use(express.json);
    this.app.use(cors());
    this.app.use(routers);
  }

  public start = (PORT: port): void => {
    this.app.listen(PORT, () => {
      console.log(`Running on port ${PORT}`)
    })
  }
}