const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const newContent = `<p><b>Definisi Tomat</b><br/>
Tomat (<i>Solanum lycopersicum</i>) adalah tumbuhan dari keluarga <i>Solanaceae</i> yang memiliki siklus hidup singkat dan dimanfaatkan buahnya sebagai sayuran maupun buah segar. Tanaman ini sangat populer dibudidayakan di berbagai belahan dunia karena tingkat konsumsi yang tinggi.</p>

<p><b>Kandungan dan Manfaat</b><br/>
Tomat sangat kaya akan antioksidan, terutama likopen yang sangat baik untuk menjaga kesehatan jantung dan menangkal radikal bebas. Selain itu, tomat juga merupakan sumber Vitamin C, potasium, folat, dan Vitamin K. Mengonsumsi tomat secara rutin bermanfaat untuk menjaga kesehatan mata, mencerahkan kulit, dan memperlancar pencernaan.</p>

<p><b>Berapa Lama Masa Tanamnya?</b><br/>
Tanaman tomat memiliki masa panen yang relatif cepat. Mulai dari proses penyemaian bibit hingga panen pertama biasanya hanya membutuhkan waktu sekitar <b>60 hingga 90 hari</b> (2 sampai 3 bulan), tergantung pada varietas dan perawatannya. Setelah panen pertama, tomat dapat terus dipanen beberapa kali dalam satu siklus hidupnya.</p>

<p><b>Tempat yang Cocok untuk Ditanam</b><br/>
Tomat membutuhkan lokasi yang mendapatkan sinar matahari penuh (minimal 6-8 jam sehari). Tanaman tomat menyukai tanah yang gembur, subur, dan memiliki sistem drainase (pengairan) yang baik agar air tidak menggenang di akar. Budidaya ini tidak hanya bisa dilakukan di sawah atau ladang luas, tetapi juga sangat cocok ditanam di pekarangan rumah menggunakan pot atau <i>polybag</i> sebagai bagian dari program Ketahanan Pangan.</p>`;

  const updatedArticle = await prisma.article.update({
    where: { slug: 'panduan-budidaya-tomat' },
    data: {
      content: newContent
    }
  });

  console.log(`Updated HTML article: ${updatedArticle.title}`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
