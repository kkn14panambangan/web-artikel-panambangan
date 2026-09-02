const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const htmlContent = `
<p><b>Apa itu Jahe?</b><br/>
Jahe (<i>Zingiber officinale</i>) adalah tanaman rimpang yang sangat populer sebagai rempah-rempah dan bahan baku obat tradisional. Rimpangnya berbentuk jemari yang menggembung di ruas-ruas tengah. Rasa dominan pedas yang dirasakan dari jahe disebabkan oleh senyawa keton bernama zingeron.</p>

<br/>

<p><b>Kandungan Nutrisi Jahe</b><br/>
Jahe kaya akan senyawa aktif dan nutrisi penting, di antaranya:<br/>
• <b>Gingerol & Zingeron</b>: Senyawa bioaktif utama yang memberikan rasa pedas dan memiliki efek anti-inflamasi serta antioksidan kuat.<br/>
• <b>Minyak Atsiri</b>: Memberikan aroma khas dan bermanfaat untuk relaksasi tubuh.<br/>
• <b>Vitamin & Mineral</b>: Mengandung Vitamin C, Magnesium, Kalium, dan Tembaga yang baik untuk metabolisme.</p>

<br/>

<p><b>Manfaat Kesehatan</b><br/>
• <b>Meredakan Mual:</b> Sangat efektif untuk mengatasi mual akibat mabuk perjalanan atau *morning sickness*.<br/>
• <b>Mengurangi Nyeri Otot & Sendi:</b> Sifat anti-inflamasinya membantu meredakan pegal-pegal dan radang sendi (osteoarthritis).<br/>
• <b>Menurunkan Gula Darah:</b> Beberapa penelitian menunjukkan jahe dapat menurunkan kadar gula darah puasa pada penderita diabetes tipe 2.<br/>
• <b>Memperkuat Sistem Imun:</b> Antioksidan di dalamnya membantu tubuh melawan infeksi dan radikal bebas.</p>

<br/>

<p><b>Berapa Lama Masa Tanamnya?</b><br/>
Masa panen jahe sangat bergantung pada tujuan penggunaannya:<br/>
• <b>Jahe Segar/Konsumsi:</b> Bisa dipanen pada umur <b>8 hingga 10 bulan</b> setelah tanam.<br/>
• <b>Jahe Bibit/Asinan:</b> Biasanya dipanen lebih tua, yaitu sekitar umur <b>10 hingga 12 bulan</b>.<br/>
Ciri jahe yang siap panen adalah sebagian besar daun dan batangnya mulai menguning dan mengering secara alami.</p>

<br/>

<p><b>Tempat yang Cocok untuk Ditanam</b><br/>
Agar rimpang jahe tumbuh optimal, perhatikan syarat tumbuh berikut:<br/>
• <b>Ketinggian Tempat:</b> Tumbuh paling baik di dataran dengan ketinggian 200 hingga 900 meter di atas permukaan laut (mdpl).<br/>
• <b>Curah Hujan:</b> Membutuhkan curah hujan 2.500 – 4.000 mm per tahun. Jahe butuh banyak air, tapi tanahnya tidak boleh tergenang air.<br/>
• <b>Kondisi Tanah:</b> Tanah harus gembur, subur, kaya humus, dan memiliki drainase (sistem resapan air) yang sangat baik agar rimpang tidak busuk.<br/>
• <b>Sinar Matahari:</b> Membutuhkan cahaya matahari terbuka atau dengan sedikit naungan (sedang).</p>
`;

  const updatedArticle = await prisma.article.upsert({
    where: { slug: 'panduan-budidaya-jahe' },
    update: {
      content: htmlContent,
      title: 'Panduan Lengkap Budidaya Jahe: Manfaat dan Cara Tanam'
    },
    create: {
      title: 'Panduan Lengkap Budidaya Jahe: Manfaat dan Cara Tanam',
      slug: 'panduan-budidaya-jahe',
      content: htmlContent,
      image_url: 'https://images.unsplash.com/photo-1596647285642-88220f1883be?q=80&w=1000&auto=format&fit=crop',
      author: 'Admin'
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
