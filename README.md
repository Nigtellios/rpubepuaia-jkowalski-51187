# rpubepuaia-jkowalski-51187
Implementation and review of an E-commerce application written in TypeScript, Next.JS and Node.JS

# Structure
**Lerna** manages both the frontend and backend packages. The frontend is a React app, while the backend is a Strapi app.

## FrontEnd
The frontend is a NEXT React app with Apollo Client to communicate with the backend using GraphQL Interface.
- Next.JS
- React
- Apollo Client
- GraphQL
- Codegen (for generating typescript types from GraphQL schema - https://the-guild.dev/graphql/codegen)

## BackEnd
Backend is a Strapi app (made on Node.JS environment) with Tensorflow JS.
- Strapi (Node.JS)
- Tensorflow

# Commands
To build both projects, use: 
```
npx lerna run build
```

To run both projects in development mode, use:
```
npx lerna run dev
```

