import { ratelimit } from "@/utils/redis";
import { Context, Next } from "hono";

export async function rateLimit(c: Context, next: Next) {
  const ip = c.req.header("x-forwarded-for");

  const { reset, success } = await ratelimit.limit(ip!);

  if (!success) {
    const now = Date.now();
    const retry = Math.floor((reset - now) / 1000);

    return c.json(
      { message: `"Too many requests retry after ${retry} seconds` },
      {
        status: 429,
        headers: {
          ["retry-after"]: retry.toString(),
        },
      },
    );
  }

  await next();
}
