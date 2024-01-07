import NextAuth, { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXT_AUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "Timeasy API login",

            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "your_best@email.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const res = await fetch("http://localhost:5239/user/signin", {
                    method: "POST",
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    }),
                    headers: { "Content-Type": "application/json" },
                });
                const user = await res.json();
                if (res.ok && user) {
                    return user;
                }
                return null;
            },
        }),
    ],
    pages: {
        signIn: "/",
    },
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token }) {
            session = token as any;
            return session;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
