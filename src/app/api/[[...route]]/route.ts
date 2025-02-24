import { Hono } from "hono";
import { handle } from "hono/vercel";
import { categories } from "../routes/categories.routes";
import { changePassword } from "../routes/password.routes";
import { authenticate } from "../middlewares/auth.middleware";

const app = new Hono().basePath("/api");

app.notFound((c) => c.json({ message: "Route not exist" }, { status: 404 }));

app.onError((err, c) => {
  console.error(err);
  return c.json({ message: "Internal Server Error!" }, { status: 500 });
});

app.use("*", authenticate);

const routes = app
  .route("/categories", categories)
  .route("/password", changePassword);

export const GET = handle(app);
export const POST = handle(app);

void routes;

export type AppType = typeof routes;
