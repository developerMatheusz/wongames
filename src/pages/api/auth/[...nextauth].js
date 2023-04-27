import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  pages: {
    signIn: "/sign-in"
  },
  providers: [
    CredentialsProvider({
      name: "Sign-in",
      credentials: {},
      async authorize({ email, password }) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`,
          {
            method: "POST",
            body: new URLSearchParams({ identifier: email, password })
          }
        );
        const data = await res.json();

        if (data.user) {
          return { ...data.user, jwt: data.jwt };
        }
        return null;
      }
    })
  ],
  callbacks: {
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user.id = token.id;

      return Promise.resolve(session);
    },
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = user.jwt;
        token.email = user.email;
        token.name = user.username;
      }

      return Promise.resolve(token);
    }
  }
};

const Auth = (req, res) => NextAuth(req, res, authOptions);

export default Auth;
