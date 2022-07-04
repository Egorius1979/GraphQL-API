import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

export const artist: DocumentNode = gql`
  type Artist {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [Band]
    instruments: String
  }

  type Query {
    artist(id: ID!): Artist
    artists: [Artist]
  }

  type Delete {
    acknowledged: Boolean!
    deletedCount: Int!
  }

  type Mutation {
    createArtist(
      firstName: String!
      secondName: String!
      middleName: String
      birthDate: String
      birthPlace: String
      country: String!
      bandsIds: [ID!]
      instruments: [String]
    ): Artist!

    updateArtist(
      id: ID!
      firstName: String
      secondName: String
      middleName: String
      birthDate: String
      birthPlace: String
      country: String
      bandsIds: [ID!]
      instruments: [String]
    ): Artist!

    deleteArtist(id: ID!): Delete!
  }
`;
