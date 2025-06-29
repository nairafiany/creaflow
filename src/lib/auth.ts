import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "@/lib/prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    minPasswordLength: 6,
    // password: {
    //   hash: hashPassword,
    //   verify: verifyPassword,
    // },
  },
  advanced: {
    database: {
      generateId: false,
    },
  },
});
