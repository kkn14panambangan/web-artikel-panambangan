const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const updated = await prisma.article.update({
    where: { slug: 'panduan-budidaya-jahe' },
    data: {
      image_url: '/jahe.jpg'
    }
  });
  console.log("Updated Jahe image to:", updated.image_url);
}

main().catch(console.error).finally(() => prisma.$disconnect());
