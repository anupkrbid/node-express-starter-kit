import express, { Router } from "express";
import { pingHandler } from "../controllers";

const router: Router = express.Router();

router.get("/", pingHandler);

export default router;
