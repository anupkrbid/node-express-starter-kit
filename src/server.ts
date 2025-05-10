import express, { Express, NextFunction, Request, Response } from "express";

import { serverConfig } from "./configs";
import { pingRouter } from "./routers";

const app: Express = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Node Express Starter Kit!");
});

app.use("/ping", pingRouter);

app.listen(serverConfig.APP_PORT, () => {
  console.log(`Server is running on port ${serverConfig.APP_PORT}`);
  console.log("Press Ctrl+C to stop the server");
});
