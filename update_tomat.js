const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const newContent = `**Definisi Tomat**
Tomat (*Solanum lycopersicum*) adalah tumbuhan dari keluarga *Solanaceae* yang memiliki siklus hidup singkat dan dimanfaatkan buahnya sebagai sayuran maupun buah segar. Di Desa Panambangan, tanaman ini memiliki potensi besar untuk dikembangkan.

**Kandungan dan Manfaat**
Tomat sangat kaya akan antioksidan, terutama likopen yang sangat baik untuk menjaga kesehatan jantung dan menangkal radikal bebas. Selain itu, tomat juga merupakan sumber Vitamin C, potasium, folat, dan Vitamin K. Mengonsumsi tomat secara rutin bermanfaat untuk menjaga kesehatan mata, mencerahkan kulit, dan memperlancar pencernaan.

**Berapa Lama Masa Tanamnya?**
Tanaman tomat memiliki masa panen yang relatif cepat. Mulai dari proses penyemaian bibit hingga panen pertama biasanya hanya membutuhkan waktu sekitar **60 hingga 90 hari** (2 sampai 3 bulan), tergantung pada varietas dan perawatannya. Setelah panen pertama, tomat dapat terus dipanen beberapa kali dalam satu siklus hidupnya.

**Tempat yang Cocok untuk Ditanam**
Tomat membutuhkan lokasi yang mendapatkan sinar matahari penuh (minimal 6-8 jam sehari). Lahan di Desa Panambangan sangat cocok karena tomat menyukai tanah yang gembur, subur, dan memiliki sistem drainase (pengairan) yang baik agar air tidak menggenang di akar. Budidaya ini tidak hanya bisa dilakukan di sawah atau ladang luas, tetapi juga sangat cocok ditanam di pekarangan rumah menggunakan pot atau *polybag* sebagai bagian dari program Ketahanan Pangan Keluarga.`;

  const updatedArticle = await prisma.article.update({
    where: { slug: 'potensi-budidaya-tomat-panambangan' },
    data: {
      content: newContent
    }
  });

  console.log(`Updated article: ${updatedArticle.title}`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
