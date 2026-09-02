const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.article.update({
    where: { slug: 'panduan-budidaya-cabai' },
    data: { image_url: '/cabai.jpg' }
  });
  console.log("Updated Cabai image URL to /cabai.jpg");
}

main().catch(console.error).finally(() => prisma.$disconnect());
