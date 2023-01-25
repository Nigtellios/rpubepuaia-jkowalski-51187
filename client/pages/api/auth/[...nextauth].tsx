import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { signInUser } from '../../../services/auth';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Use your email to register!',
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

      async authorize(credentials, req) {
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
          throw new Error(error as string);
        }
      },
    }),
  ],
  callbacks: {
    session: async (
      {
        session,
        token
      }
    ) => {
      console.log(session)
      console.log(token)

      session.id = token.id;
      session.token = token.jwt;

      return Promise.resolve(session);
    },

    jwt: async (
      {
        token,
        user
      }
    ) => {
      const isSignIn = user;

      console.log(token)
      console.log(user)

      if (isSignIn) {
        token.id = user.id;
        token.jwt = user.jwt;
      }

      return Promise.resolve(token);
    },
  },
});
