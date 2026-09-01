const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://postgres.uarfbwwhfbfxabklgqzf:panambangan@aws-0-ap-northeast-2.pooler.supabase.com:5432/postgres"
    }
  }
});

async function main() {
  const articles = await prisma.article.findMany();
  const maggotArticle = articles.find(a => a.title.includes('Maggot'));
  console.log(maggotArticle.content);
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
