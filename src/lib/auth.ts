import { betterAuth } from "better-auth";

export const auth = betterAuth({
  database: {
    url: process.env.DATABASE_URL || "file:./auth.db",
    authToken: process.env.DATABASE_AUTH_TOKEN,
    type: "sqlite",
  },
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
});
