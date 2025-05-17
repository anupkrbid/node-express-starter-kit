import express, { Express, NextFunction, Request, Response } from "express";

import { serverConfig, logger } from "./configs";
import { v1Router } from "./routers";
import { badRequestHandler, anyErrorHandler } from "./middlewares";
import { attachCorrelationId } from "./middlewares/attach-correlation-id.middleware";

const app: Express = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use(attachCorrelationId);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Node Express Starter Kit!");
});

app.use("/api/v1", v1Router);

app.use(badRequestHandler);
app.use(anyErrorHandler);

app.listen(serverConfig.APP_PORT, () => {
  logger.info(`Server is running on port ${serverConfig.APP_PORT}`);
  logger.info("Press Ctrl+C to stop the server");
});
