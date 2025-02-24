import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { updatePassword } from "../controllers/password.controller";

export const passwordSchema = z.object({
  email: z.string().email().nonempty(),
  password: z.string().nonempty(),
  newPassword: z.string().nonempty(),
});

export const changePassword = new Hono().post(
  "/update",
  zValidator("json", passwordSchema),
  (c) => updatePassword(c),
);
