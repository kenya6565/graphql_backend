const { ApolloServer, gql } = require("apollo-server");
const fs = require("fs");
const path = require("path");

//HackerNewsの1つ1つの投稿(本当ならDBから取ってきたりする)
let links = [
  {
    id: "link-0",
    description: "GraphQLチュートリアルをUdemyで学ぶ",
    url: "www.udemy-graphql-tutorial.com",
  },
];

// リゾルバ関数
// typeDefsで定義した型に値を入れていく関数
const resolvers = {
  // 上で定義したQueryに対して実際に値を入れている
  Query: {
    info: () => "HackerNewsクローン",
    feed: () => links,
  },

  Mutation: {
    post: (parent, args) => {
      let idCount = links.length;
      const link = {
        // 現在の配列数+1
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      };

      // 既存のlinksに入れる
      links.push(link);
      
      // 作成したlinkはplaygroundで見たいから返す
      return link;
    },
  },
};

// インスタンス化して初めて使うことができる
const server = new ApolloServer({
  // __dirnameは今操作しているファイルのdir名を取得(server.jsならsrcを取得)
  typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf-8"),
  resolvers,
});

server.listen().then(({ url }) => console.log(`${url}でサーバーを起動中`));
