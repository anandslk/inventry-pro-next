import { client } from "./index";
import { InferRequestType, InferResponseType } from "hono";

export type GetCatReqType = InferRequestType<
  (typeof client.api.categories.get)["$get"]
>;

export type GetCatResType = InferResponseType<
  (typeof client.api.categories.get)["$get"]
>;

export type PassReqType = InferRequestType<
  (typeof client.api.password.update)["$post"]
>["json"];

export type PassResType = InferResponseType<
  (typeof client.api.password.update)["$post"]
>;
