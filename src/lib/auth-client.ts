import { createAuthClient } from "better-auth/client";

const BASE =
  import.meta.env.PROD
    ? "https://codersheart.in"
    : "http://localhost:4321";

export const authClient = createAuthClient({
  baseURL: `${BASE}/api/auth`,
});
