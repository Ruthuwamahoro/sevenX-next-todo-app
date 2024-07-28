import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from '@/drizzle/db';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub as any],
  adapter: DrizzleAdapter(db) as any,
  callbacks: {
    async session({session, user}){
        session.user.id = user.id;
        return session
    }

  }
})

