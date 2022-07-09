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
    addTrackToFavourites(id: ID!): Favourites!

    addBandToFavourites(id: ID!): Favourites!

    addArtistToFavourites(id: ID!): Favourites!

    addGenreToFavourites(id: ID!): Favourites!
  }
`;
