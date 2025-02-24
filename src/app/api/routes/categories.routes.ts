import { Hono } from "hono";
import { getCategories } from "../controllers/categories.controller";

export const categories = new Hono().get("/get", getCategories);
