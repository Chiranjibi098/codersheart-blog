import { betterAuth } from "better-auth";

export const auth = betterAuth({
  database: {
    url: process.env.DATABASE_URL,
    type: "postgresql",
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
