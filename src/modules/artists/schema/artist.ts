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

  # input BandInput {
  #   id: ID!
  # }

  # input ArtistInput {
  #   firstName: String!
  #   secondName: String!
  #   middleName: String
  #   birthDate: String
  #   birthPlace: String
  #   country: String!
  #   bands: [BandInput]
  #   instruments: [String]
  # }

  type DeleteResponse {
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
      instruments: [String] # artistInput: ArtistInput
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
      instruments: [String] # updateArtist: ArtistInput
    ): Artist!

    deleteArtist(id: ID!): DeleteResponse!
  }
`;
