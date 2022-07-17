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

  type Query {
    album(id: ID!): Album
    albums(offset: Int, limit: Int): [Album]
  }

  type Mutation {
    createAlbum(
      name: String!
      released: Int
      artistsIds: [ID!]
      bandsIds: [ID!]
      trackIds: [ID!]
      genresIds: [ID!]
      image: String
    ): Album!

    updateAlbum(
      id: ID!
      name: String
      released: Int
      artistsIds: [ID!]
      bandsIds: [ID!]
      trackIds: [ID!]
      genresIds: [ID!]
      image: String
    ): Album!

    deleteAlbum(id: ID!): Delete!
  }
`;
