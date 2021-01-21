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
  input UpdateProjectInput {
    id: String!
    name: String!
    description: String!
    hours: String! 
  }
  type Query {
    projects(input: ProjectsInput): [Project]!
  }
  type Mutation {
    updateProject(input: UpdateProjectInput!): Project!
    addProject(input: NewProjectInput!): Project!
    deleteProject(id: ID! ): Project!
  }
`;

module.exports = typeDefs;

