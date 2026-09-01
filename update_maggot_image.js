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
  
  // Find the Maggot article
  const maggotArticle = articles.find(a => a.title.includes('Maggot'));
  
  if (maggotArticle) {
    // Append the second image to the content if it's not already there
    let newContent = maggotArticle.content;
    if (!newContent.includes('/maggot-2.jpg')) {
      newContent += '\n\n<img src="/maggot-2.jpg" alt="Budidaya Maggot BSF" style="width:100%; border-radius:12px; margin-top:20px;" />';
    }

    await prisma.article.update({
      where: { id: maggotArticle.id },
      data: { 
        image_url: '/maggot-1.jpg',
        content: newContent
      }
    });
    console.log(`Updated article "${maggotArticle.title}" with new images.`);
  } else {
    console.log("Could not find Maggot article.");
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
