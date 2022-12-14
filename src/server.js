const { ApolloServer, gql } = require("apollo-server");

//GraphQLのスキーマ(データ構造)の定義
const typeDefs = gql`
  type Query {
    # 必須
    info: String!
  }
`;

// リゾルバ関数
// typeDefsで定義した型に値を入れていく関数
const resolvers = {
  // 上で定義したQueryに対して実際に値を入れている
  Query: {
    info: () => "HackerNewsクローン",
  },
};
