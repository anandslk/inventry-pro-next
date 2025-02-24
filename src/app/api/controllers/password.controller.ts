import { createClientSsr } from "@/utils/supabase/server";
import { Context } from "hono";
import { passwordSchema } from "../routes/password.routes";
import { z } from "zod";

export const updatePassword = async (c: Context) => {
  const { email, password, newPassword } = (await c.req.json()) as z.infer<
    typeof passwordSchema
  >;

  if (!email) {
    return c.json({ message: "Email is required" }, { status: 400 });
  }

  if (!password) {
    return c.json({ message: "Current Password is required" }, { status: 400 });
  }

  if (!newPassword) {
    return c.json({ message: "New Password is required" }, { status: 400 });
  }

  const supabase = await createClientSsr();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return c.json({ message: error.message }, { status: 400 });
  }

  const { data, error: updateError } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (updateError) {
    return c.json({ message: updateError.message }, { status: 400 });
  }

  return c.json(
    { message: "Password updated successfully", data },
    { status: 200 },
  );
};
