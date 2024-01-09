import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";

declare module "next-auth" {
    interface Session {
        id: string;
        email: string;
        fullName: string;
        accessLevel: string;
        accessToken: string;
    }
}
