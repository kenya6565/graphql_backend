const { ApolloServer, gql } = require("apollo-server");

//GraphQLのスキーマ(データ構造)の定義
const typeDefs = gql`
  type Query {
    # 必須
    info: String!
  }
`;
