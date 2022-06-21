import console from "console";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
//get using fauna to save all users logged on application
import { fauna } from "../../../services/fauna";
import { query as q } from "faunadb";

export default NextAuth({
  //scope is all necessary information
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      //queries for fauna
      const { email } = user;
      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(q.Index("user_by_email"), q.Casefold(user.email))
              )
            ),
            q.Create(q.Collection("users"), { data: { email } }),
            q.Get(q.Match(q.Index("user_by_email"), q.Casefold(user.email)))
          )
        );
        return true;
      } catch {
        return false;
      }
    },
  },
});
