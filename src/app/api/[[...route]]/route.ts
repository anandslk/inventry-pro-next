import { Hono } from "hono";
import { handle } from "hono/vercel";
import { cors } from "hono/cors";

import { categories } from "../routes/categories.routes";
import { changePassword } from "../routes/password.routes";
// import { authenticate } from "../middlewares/auth.middleware";
// import { rateLimit } from "../middlewares/ratelimit.middleware";
import { bomRouter } from "../routes/bom.routes";

const app = new Hono().basePath("/api");

app.use(
  "*",
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
  })
);

app.notFound((c) => c.json({ message: "Route not exist" }, { status: 404 }));

app.onError((err, c) => {
  console.error(err);
  return c.json({ message: "Internal Server Error!" }, { status: 500 });
});

// app.use("*", authenticate);
// app.use("*", rateLimit);

const routes = app
  .route("/categories", categories)
  .route("/bom", bomRouter)
  .route("/password", changePassword);

export const GET = handle(app);
export const POST = handle(app);
export const OPTIONS = handle(app);

void routes;

export type AppType = typeof routes;
