import { Hono } from "hono";
import { getBOM, postBOM } from "../controllers/bom.controller";

export const bomRouter = new Hono().get("/get", getBOM).post("/post", postBOM);
