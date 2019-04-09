const { GraphQLServer } = require("graphql-yoga");
const gql = require("graphql-tag");
const { prisma } = require("./src/generated/prisma-client");

const Query = require("./src/resolvers/Query");
const Mutation = require("./src/resolvers/Mutation");
const User = require("./src/resolvers/User");
const Link = require("./src/resolvers/Link");
const Subscription = require("./src/resolvers/Subscription");

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Link,
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    };
  },
});
server.start(() => console.log("Server is running on http://localhost:4000"));
