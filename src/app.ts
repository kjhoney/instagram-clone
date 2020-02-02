import express from "express";
import helmet from "helmet";
import logger from "morgan";

class App {
  public app: express.Express;
  constructor() {
    this.app = express();
    this.app.use(helmet());
    this.app.use(logger("dev"));
  }
}

export default new App().app;
