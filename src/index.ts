import 'dotenv/config';
import express from 'express';
import http from 'http';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';

import {
  typeDefs,
  resolvers,
  UserAPI,
  ArtistAPI,
  BandAPI,
  GenreAPI,
} from './collector';

async function startApolloServer() {
  const app = express();
  const port = process.env.PORT || 5000;
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: ({ req }) => {
      return { token: req.headers.authorization || '' };
    },
    dataSources: () => {
      return {
        userApi: new UserAPI(),
        artistAPI: new ArtistAPI(),
        bandAPI: new BandAPI(),
        genreAPI: new GenreAPI(),
      };
    },
  });

  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));

  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  );
}

startApolloServer();
