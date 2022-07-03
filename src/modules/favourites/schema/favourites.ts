import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

export const favourites: DocumentNode = gql`
  type Favourites {
    id: ID!
    userId: ID
    bands: [Band]
    genres: [Genre]
    artists: [Artist]
    tracks: [Track]
  }

  # type Query {
  #   artists: [Artist]
  #   artist(id: ID!): Artist
  # }

  # type Mutation {
  #   createArtist(
  #     firstName: String!
  #     secondName: String!
  #     country: String!
  #   ): Artist
  # }
`;
