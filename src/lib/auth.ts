import { betterAuth } from "better-auth";

console.log("DATABASE_URL:", process.env.DATABASE_URL);
console.log("GITHUB_CLIENT_ID:", process.env.GITHUB_CLIENT_ID ? "set" : "not set");
console.log("GITHUB_CLIENT_SECRET:", process.env.GITHUB_CLIENT_SECRET ? "set" : "not set");
console.log("BETTER_AUTH_SECRET length:", process.env.BETTER_AUTH_SECRET?.length);

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

console.log("Auth object created successfully");
