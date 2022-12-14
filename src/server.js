const { ApolloServer, gql } = require("apollo-server");

//HackerNewsの1つ1つの投稿(本当ならDBから取ってきたりする)
let links = [
  {
    id: "link-0",
    description: "GraphQLチュートリアルをUdemyで学ぶ",
    url: "www.udemy-graphql-tutorial.com",
  },
];

//GraphQLのスキーマ(データ構造)の定義
const typeDefs = gql`
  type Query {
    # 必須
    info: String!
    feed: [Link]!
  }

  type Link {
    id: ID!
    # ニュースタイトル
    description: String!
    url: String!
  }
`;

// リゾルバ関数
// typeDefsで定義した型に値を入れていく関数
const resolvers = {
  // 上で定義したQueryに対して実際に値を入れている
  Query: {
    info: () => "HackerNewsクローン",
    feed: () => links,
  },
};

// インスタンス化して初めて使うことができる
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => console.log(`${url}でサーバーを起動中`));
