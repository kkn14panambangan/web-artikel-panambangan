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
  
  // Find the Kembang Tahu article
  const tahuArticle = articles.find(a => a.title.includes('Kembang Tahu'));
  
  if (tahuArticle) {
    await prisma.article.update({
      where: { id: tahuArticle.id },
      data: { 
        image_url: '/kembang-tahu.jpg'
      }
    });
    console.log(`Updated article "${tahuArticle.title}" with new image.`);
  } else {
    console.log("Could not find Kembang Tahu article.");
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
