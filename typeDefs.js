const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    name: String!
    email: String!
    bio: String!
    followers: [ID!]
    following: [ID!]
  }

  type Post {
    id: ID!
    userId: String!
    content: String!
    createdAt: String!
  }

#here i will write all list of queries i would like to do 
# when we hit, control comes to typeDefs, then to resolver.


  type Query {
    getAllUsers: [User!]!
    getAllPosts: [Post!]!
    getUser(name:String!):User!
    getUsersWithFollowers(followersCount:Int!):[User!]!
  }

  input newUserInput{
    username: String!
    name: String!
    email: String!
    bio: String!
  }

  input updateUserInput{
    name:String!
    newBio:String!
  }


  type Mutation{
    addUser(input: newUserInput!):User!
    updateUser(input: updateUserInput!):User!
    deleteUser(id:ID!): User
  }
`;

module.exports = { typeDefs };



