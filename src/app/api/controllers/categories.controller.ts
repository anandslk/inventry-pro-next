import { createClientSsr } from "@/utils/supabase/server";
import { Context } from "hono";

export const getCategories = async (c: Context) => {
  const supabase = await createClientSsr();

  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("name");

  if (error) {
    return c.json({ message: error.message, data: [] }, { status: 400 });
  }

  return c.json({ message: "Data found successfully", data }, { status: 200 });
};
