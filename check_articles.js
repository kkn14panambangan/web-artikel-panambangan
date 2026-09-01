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
  console.log(articles.map(a => ({ title: a.title, content: a.content.substring(0, 100), image_url: a.image_url })));
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
