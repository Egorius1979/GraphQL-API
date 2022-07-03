import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

export const track: DocumentNode = gql`
  type Track {
    id: ID!
    title: String!
    albums: [Album]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
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
