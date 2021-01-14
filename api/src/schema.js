const { gql } = require("apollo-server");

const typeDefs = gql`
  
  type Project {
    id: ID!
    createdAt: Int!
    name: String!
    description: String!
    hours: String!
  }
  input NewProjectInput {
    name: String!
    description: String!
    hours: String!
  }
  input ProjectsInput {
    name: String!
    description: String!
    hours: String! 
  }
  type Query {
    projects(input: ProjectsInput): [Project]!
  }
  type Mutation {
    addProject(input: NewProjectInput!): Project!
    deleteProject(id: ID! ): ID!
  }
`;

module.exports = typeDefs;

