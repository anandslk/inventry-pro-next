import { createClient } from "@supabase/supabase-js";
import { env } from "./env";

const supabaseUrl = env.VITE_SUPABASE_URL;
const supabaseKey = env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
export const supabaseAdmin = createClient(
  supabaseUrl,
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqcm9idWNoYWtma296ZHdncHF5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczODg1Njg2MiwiZXhwIjoyMDU0NDMyODYyfQ._2zevdpXJmHnVYnRLhV5DRlwI5eSH7IQkjARvr5RHNQ",
);
