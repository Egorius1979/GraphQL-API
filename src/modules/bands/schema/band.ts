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
    artist: String
    instrument: String
    years: [String]
  }

  type Query {
    bands: [Band]
    band(id: ID!): Band
  }

  input MemberInput {
    artist: String
    instrument: String
    years: [String]
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
