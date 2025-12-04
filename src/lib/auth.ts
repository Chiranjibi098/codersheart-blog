import { betterAuth } from "better-auth";

export const auth = betterAuth({
  database: {
    url: process.env.DATABASE_URL || "file:./auth.db",
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
