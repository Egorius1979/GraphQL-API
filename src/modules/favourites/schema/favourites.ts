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

  type Query {
    favourites: Favourites
  }

  type Mutation {
    addTrackToFavourites(type: String!, id: ID!): Favourites!

    addBandToFavourites(type: String!, id: ID!): Favourites!

    addArtistToFavourites(type: String!, id: ID!): Favourites!

    addGenreToFavourites(type: String!, id: ID!): Favourites!
  }
`;
