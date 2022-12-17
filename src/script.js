// データベースにアクセスするためのクライアントライブラリ
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // ここのlinkはschema.prismaで設定したmigrationファイルのモデル名
  const newLink = await prisma.link.create({
    data: {
      description: "GraphQLチュートリアルをUdemyで学ぶ",
      url: "www.udemy-graphql-tutorial.com",
    },
  });
  const allLinks = await prisma.link.findMany();
  console.log(allLinks);
}

// main()を実行してその後の処理を例外処理として記載する
main()
  .catch((e) => {
    throw e;
  })
  // 成功でも失敗でもdbを閉じる
  .finally(async () => {
    prisma.$disconnect;
  });
