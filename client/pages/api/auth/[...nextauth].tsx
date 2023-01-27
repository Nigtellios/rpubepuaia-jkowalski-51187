import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { signInUser } from "../../../services/auth";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'text'
        },

        password: {
          label: 'Password',
          type: 'password'
        },
      },

      async authorize(
        credentials,
        req
      ) {
        if (credentials == null) {
          return null;
        }

        try {
          const {
            user,
            jwt
          } = await signInUser({
            email: credentials.email,
            password: credentials.password,
          });

          return {
            ...user,
            jwt
          };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    session: async (
      { session }
    ) => {
      return Promise.resolve(session);
    },

    jwt: async ({ token }) => {
      return Promise.resolve(token);
    },
  },
  debug: true,
});
