import { redis } from "@/utils/redis";
import { createClientSsr } from "@/utils/supabase/server";
import { Context } from "hono";

export const getCategories = async (c: Context) => {
  const cacheKey = "cat";

  const cachedData = await redis.get(cacheKey);

  if (cachedData) {
    return c.json(
      { message: "Cached Data found successfully", data: cachedData },
      { status: 200 },
    );
  }

  const supabase = await createClientSsr();

  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("name");

  if (error) {
    return c.json({ message: error.message, data: [] }, { status: 400 });
  }

  await redis.set(cacheKey, data, { ex: 10 });

  return c.json({ message: "Data found successfully", data }, { status: 200 });
};
