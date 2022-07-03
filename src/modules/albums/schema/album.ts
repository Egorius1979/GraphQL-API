import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

export const album: DocumentNode = gql`
  type Album {
    id: ID!
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
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
