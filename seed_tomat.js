const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const article = {
    title: 'Potensi Budidaya Tomat di Desa Panambangan',
    slug: 'potensi-budidaya-tomat-panambangan',
    author: 'Tim KKM 14',
    image_url: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&q=80',
    content: 'Desa Panambangan memiliki tanah yang subur dan sangat cocok untuk budidaya berbagai macam tanaman hortikultura, salah satunya adalah tomat. Mahasiswa KKM 14 melakukan observasi dan penyuluhan mengenai cara menanam tomat yang baik dan benar, mulai dari pemilihan bibit, perawatan, hingga masa panen. Budidaya tomat tidak hanya bisa dilakukan di lahan luas, namun juga bisa memanfaatkan lahan pekarangan rumah. Selain untuk dikonsumsi sendiri yang kaya akan vitamin C, tomat juga memiliki nilai ekonomis yang cukup baik jika dikelola dan dipasarkan dengan strategi yang tepat, sehingga dapat membantu meningkatkan perekonomian warga desa.'
  };

  const exists = await prisma.article.findUnique({ where: { slug: article.slug } });
  if (!exists) {
    await prisma.article.create({ data: article });
    console.log(`Created: ${article.title}`);
  } else {
    console.log(`Already exists: ${article.title}`);
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
