import type { ApiRoutes } from "@server/app";
import { hc } from "hono/client";

const client = hc<ApiRoutes>("http://127.0.0.1:3000/", {
  init: {
    credentials: "include",
  },
});

export const api = client.api;
