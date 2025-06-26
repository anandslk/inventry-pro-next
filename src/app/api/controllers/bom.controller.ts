import { createClientSsr } from "@/utils/supabase/server";
import { Context } from "hono";

export const getBOM = async (c: Context) => {
  const supabase = await createClientSsr();

  const { data, error } = await supabase.from("bom").select("*");

  if (error) {
    return c.json({ message: error.message, data: [] }, { status: 400 });
  }

  return c.json({ message: "Data found successfully", data }, { status: 200 });
};

export const postBOM = async (c: Context) => {
  const supabase = await createClientSsr();

  const body = await c.req.json();

  const { data, error } = await supabase
    .from("bom")
    .insert({ data: body })
    .select("*");

  if (error) {
    return c.json({ message: error.message, data: [] }, { status: 400 });
  }

  return c.json(
    { message: "BOM inserted successfully", data },
    { status: 201 }
  );
};
