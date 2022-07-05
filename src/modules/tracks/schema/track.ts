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

  type Query {
    track(id: ID!): Track
    tracks(offset: Int, limit: Int): [Track]
  }

  type Mutation {
    createTrack(
      title: String!
      albumId: ID
      bandsIds: [ID!]
      duration: Int
      released: Int
      genresIds: [ID!]
    ): Track!

    updateTrack(
      id: ID!
      title: String
      albumId: ID
      bandsIds: [ID!]
      duration: Int
      released: Int
      genresIds: [ID!]
    ): Track!

    deleteTrack(id: ID!): Delete!
  }
`;
