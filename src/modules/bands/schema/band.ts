import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

export const band: DocumentNode = gql`
  type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
  }

  type Member {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    instrument: String
    years: [String]
  }

  input MemberInput {
    artistId: ID!
    instrument: String
    years: [String]
  }

  type Query {
    band(id: ID!): Band
    bands(offset: Int, limit: Int): [Band]
  }

  type Mutation {
    createBand(
      name: String!
      origin: String
      members: [MemberInput]
      website: String
      genresIds: [ID!]
    ): Band!

    updateBand(
      id: ID!
      name: String
      origin: String
      members: [MemberInput]
      website: String
      genresIds: [ID!]
    ): Band!

    deleteBand(id: ID!): Delete!
  }
`;
