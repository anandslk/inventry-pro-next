import { AppType } from "@/app/api/[[...route]]/route";
import { env } from "@/utils/env";
import { hc } from "hono/client";

export const client = hc<AppType>(env.APP_URL!);
