const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const newContent = `**Definisi Tomat**
Tomat (*Solanum lycopersicum*) adalah tumbuhan dari keluarga *Solanaceae* yang memiliki siklus hidup singkat dan dimanfaatkan buahnya sebagai sayuran maupun buah segar. Tanaman ini sangat populer dibudidayakan di berbagai belahan dunia karena tingkat konsumsi yang tinggi.

**Kandungan dan Manfaat**
Tomat sangat kaya akan antioksidan, terutama likopen yang sangat baik untuk menjaga kesehatan jantung dan menangkal radikal bebas. Selain itu, tomat juga merupakan sumber Vitamin C, potasium, folat, dan Vitamin K. Mengonsumsi tomat secara rutin bermanfaat untuk menjaga kesehatan mata, mencerahkan kulit, dan memperlancar pencernaan.

**Berapa Lama Masa Tanamnya?**
Tanaman tomat memiliki masa panen yang relatif cepat. Mulai dari proses penyemaian bibit hingga panen pertama biasanya hanya membutuhkan waktu sekitar **60 hingga 90 hari** (2 sampai 3 bulan), tergantung pada varietas dan perawatannya. Setelah panen pertama, tomat dapat terus dipanen beberapa kali dalam satu siklus hidupnya.

**Tempat yang Cocok untuk Ditanam**
Tomat membutuhkan lokasi yang mendapatkan sinar matahari penuh (minimal 6-8 jam sehari). Tanaman tomat menyukai tanah yang gembur, subur, dan memiliki sistem drainase (pengairan) yang baik agar air tidak menggenang di akar. Budidaya ini tidak hanya bisa dilakukan di sawah atau ladang luas, tetapi juga sangat cocok ditanam di pekarangan rumah menggunakan pot atau *polybag* sebagai bagian dari program Ketahanan Pangan.`;

  const newTitle = "Panduan Lengkap Budidaya Tomat: Manfaat dan Cara Tanam";
  const newSlug = "panduan-budidaya-tomat";

  // Check if old article exists, and update it
  const oldArticle = await prisma.article.findUnique({ where: { slug: 'potensi-budidaya-tomat-panambangan' } });
  
  if (oldArticle) {
    const updatedArticle = await prisma.article.update({
      where: { slug: 'potensi-budidaya-tomat-panambangan' },
      data: {
        title: newTitle,
        slug: newSlug,
        content: newContent
      }
    });
    console.log(`Updated article: ${updatedArticle.title} with new slug: ${updatedArticle.slug}`);
  } else {
    // If somehow old slug is not found, we update by the new one or create
    const updatedArticle = await prisma.article.upsert({
      where: { slug: newSlug },
      update: {
        title: newTitle,
        content: newContent
      },
      create: {
        title: newTitle,
        slug: newSlug,
        content: newContent,
        author: 'Tim KKM 14',
        image_url: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&q=80'
      }
    });
    console.log(`Upserted article: ${updatedArticle.title}`);
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
