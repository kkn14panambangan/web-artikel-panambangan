const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const htmlContent = `
<p><b>Apa itu Bayam?</b><br/>
Bayam (<i>Amaranthus</i>) adalah tumbuhan merambat/perdu yang daun mudanya sangat populer dikonsumsi sebagai sayuran hijau segar. Saking tingginya nilai gizi yang dimiliki, sayuran ini bahkan diabadikan dalam budaya pop melalui karakter kartun Popeye sebagai sumber kekuatan instan!</p>

<br/>

<p><b>Kandungan Nutrisi Bayam</b><br/>
Bayam adalah salah satu sayuran berdaun hijau dengan kepadatan nutrisi tertinggi:<br/>
• <b>Zat Besi & Asam Folat</b>: Duo mineral penting untuk memproduksi sel darah merah yang sehat.<br/>
• <b>Vitamin K & Kalsium</b>: Menjaga kepadatan tulang dan gigi.<br/>
• <b>Vitamin A & C</b>: Antioksidan kuat untuk imunitas tubuh dan kejernihan penglihatan.</p>

<br/>

<p><b>Manfaat Kesehatan</b><br/>
• <b>Cegah Kurang Darah (Anemia):</b> Sangat dianjurkan bagi penderita anemia akut maupun ibu hamil untuk memenuhi kebutuhan zat besi dan folat.<br/>
• <b>Menurunkan Tekanan Darah:</b> Kandungan kalium dalam bayam sangat baik untuk penderita hipertensi.<br/>
• <b>Kesehatan Mata Terjaga:</b> Kandungan lutein dan zeaxanthin pada bayam hijau melindungi mata dari kerusakan akibat sinar UV dan katarak.<br/>
• <b>Bagus untuk Tulang:</b> Mencegah osteoporosis sejak dini berkat suplai Vitamin K yang melimpah.</p>

<br/>

<p><b>Berapa Lama Masa Tanamnya?</b><br/>
Sama seperti kangkung, bayam adalah komoditas pertanian yang perputarannya sangat cepat:<br/>
• <b>Masa Panen Cepat:</b> Bayam cabut (bayam potong) sudah bisa dipanen pada umur <b>20 hingga 25 hari</b> setelah benih disebar.<br/>
• <b>Saran Konsumsi:</b> Sebaiknya bayam segar yang sudah dimasak segera dihabiskan dan <b>tidak dipanaskan berulang kali</b> agar senyawa nitratnya tidak berubah menjadi nitrit yang beracun.</p>

<br/>

<p><b>Tempat yang Cocok untuk Ditanam</b><br/>
Bayam sangat mudah dibudidayakan di pekarangan rumah:<br/>
• <b>Ketinggian Tempat:</b> Sangat toleran, tumbuh subur di dataran rendah hingga dataran tinggi pegunungan.<br/>
• <b>Kondisi Tanah:</b> Menyukai tanah yang subur, gembur, dan kaya pupuk organik atau kompos.<br/>
• <b>Kebutuhan Air:</b> Membutuhkan kelembapan tanah yang stabil. Penyiraman dilakukan rutin, tapi pastikan tanah memiliki drainase yang baik agar tidak becek.<br/>
• <b>Sinar Matahari:</b> Bayam sangat menyukai paparan sinar matahari penuh (<i>full sun</i>) agar daunnya tumbuh lebar dan hijau gelap.</p>
`;

  const updatedArticle = await prisma.article.upsert({
    where: { slug: 'panduan-budidaya-bayam' },
    update: {
      content: htmlContent,
      title: 'Panduan Lengkap Budidaya Bayam: Manfaat dan Cara Tanam',
      image_url: '/bayam.jpg'
    },
    create: {
      title: 'Panduan Lengkap Budidaya Bayam: Manfaat dan Cara Tanam',
      slug: 'panduan-budidaya-bayam',
      content: htmlContent,
      author: 'Admin',
      image_url: '/bayam.jpg'
    }
  });

  console.log("Article updated/created successfully:", updatedArticle.slug);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
