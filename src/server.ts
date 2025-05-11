import express, { Express, NextFunction, Request, Response } from "express";

import { serverConfig } from "./configs";
import { v1Router } from "./routers";

const app: Express = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Node Express Starter Kit!");
});

app.use("/api/v1", v1Router);

app.listen(serverConfig.APP_PORT, () => {
  console.log(`Server is running on port ${serverConfig.APP_PORT}`);
  console.log("Press Ctrl+C to stop the server");
});
