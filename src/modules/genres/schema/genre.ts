import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

export const genre: DocumentNode = gql`
  type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  type Query {
    genre(id: ID!): Genre
    genres: [Genre]
  }

  type Mutation {
    createGenre(name: String!, description: String, country: String, year: Int): Genre!

    updateGenre(id: ID!, name: String, description: String, country: String, year: Int): Genre!

    deleteGenre(id: ID!): Delete!
  }
`;
