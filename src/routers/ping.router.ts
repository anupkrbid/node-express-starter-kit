import express, { Router } from "express";
import { pingHandler } from "../controllers";

const pingRouter: Router = express.Router();

pingRouter.get("/", pingHandler);

export default pingRouter;
