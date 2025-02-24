import { createClientSsr } from "@/utils/supabase/server";
import { Context, Next } from "hono";

export async function authenticate(c: Context, next: Next) {
  const supabase = await createClientSsr();
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    return c.json({ message: error.message }, { status: 400 });
  }

  if (!data?.session) {
    return c.json({ message: "Unauthorized" }, { status: 401 });
  }

  await next();
}
