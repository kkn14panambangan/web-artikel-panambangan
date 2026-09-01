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
  console.log("Found articles:", articles.map(a => a.title));
  
  // Find the TOGA article
  const togaArticle = articles.find(a => a.title.includes('TOGA'));
  
  if (togaArticle) {
    await prisma.article.update({
      where: { id: togaArticle.id },
      data: { image_url: '/toga-garden.jpg' }
    });
    console.log(`Updated article "${togaArticle.title}" with new image.`);
  } else {
    console.log("Could not find TOGA article.");
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
