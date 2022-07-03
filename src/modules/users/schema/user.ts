import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

export const user: DocumentNode = gql`
  type User {
    id: ID!
    firstName: String
    lastName: String
    password: String
    email: String!
  }

  type JWT {
    jwt: String!
  }

  type Query {
    jwt(email: String!, password: String!): JWT
    user(id: ID!): User
  }

  type Mutation {
    register(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): User
  }
`;
