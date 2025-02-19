import { createBrowserClient } from "@supabase/ssr";
import { env } from "../env";

const supabaseUrl = env.SUPABASE_URL;
const supabaseKey = env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createBrowserClient(supabaseUrl, supabaseKey);
