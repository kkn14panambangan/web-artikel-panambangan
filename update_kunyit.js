const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const htmlContent = `
<p><b>Apa itu Kunyit?</b><br/>
Kunyit (<i>Curcuma longa</i>) adalah tanaman rempah dan obat tradisional yang berasal dari wilayah Asia Tenggara. Tanaman ini sangat ikonik karena rimpangnya yang berwarna kuning-oranye cerah. Warna ini sering dimanfaatkan sebagai pewarna makanan alami maupun jamu tradisional.</p>

<br/>

<p><b>Kandungan Nutrisi Kunyit</b><br/>
Warna cerah pada kunyit bukanlah tanpa makna. Kunyit mengandung senyawa-senyawa berkhasiat tinggi:<br/>
• <b>Kurkumin</b>: Zat aktif utama pada kunyit yang memberikan warna kuning dan memiliki sifat antioksidan serta anti-inflamasi (anti-peradangan) yang sangat kuat.<br/>
• <b>Minyak Atsiri</b>: Membantu mengatasi masalah pencernaan dan memberikan aroma khas rempah.<br/>
• <b>Vitamin & Mineral</b>: Mengandung Vitamin C, Kalsium, Zat Besi, dan Kalium.</p>

<br/>

<p><b>Manfaat Kesehatan</b><br/>
• <b>Obat Anti-Inflamasi Alami:</b> Kurkumin terbukti seefektif beberapa obat peradangan medis, sangat baik untuk penderita radang sendi.<br/>
• <b>Meningkatkan Daya Tahan Tubuh:</b> Sifat antioksidannya membantu melawan radikal bebas dan mencegah infeksi.<br/>
• <b>Meredakan Nyeri Haid:</b> Jamu kunyit asam sudah dipercaya turun-temurun untuk mengurangi kram perut saat menstruasi.<br/>
• <b>Melindungi Lambung:</b> Kunyit dapat membantu menenangkan sistem pencernaan dan mencegah tukak lambung.</p>

<br/>

<p><b>Berapa Lama Masa Tanamnya?</b><br/>
Kunyit memiliki siklus hidup yang hampir sama dengan jahe:<br/>
• <b>Waktu Panen Ideal:</b> Kunyit biasanya siap dipanen pada umur <b>8 hingga 9 bulan</b> setelah masa tanam.<br/>
• <b>Ciri Siap Panen:</b> Sama seperti rimpang lainnya, panen dilakukan saat daun bagian atas mulai layu, menguning, dan mengering, menandakan rimpang di dalam tanah sudah matang sempurna.</p>

<br/>

<p><b>Tempat yang Cocok untuk Ditanam</b><br/>
Kunyit cukup mudah beradaptasi, namun ada syarat optimal agar rimpangnya besar dan berkualitas:<br/>
• <b>Ketinggian Tempat:</b> Tumbuh subur di dataran rendah hingga ketinggian menengah (0 hingga 1.300 mdpl).<br/>
• <b>Curah Hujan:</b> Membutuhkan curah hujan sekitar 1.000 – 4.000 mm per tahun. Sangat butuh air saat masa pertumbuhan awal.<br/>
• <b>Kondisi Tanah:</b> Harus ditanam di tanah yang gembur (latosol atau aluvial) agar akar rimpang bebas membesar. Tanah liat yang padat akan membuat rimpang kunyit kerdil.<br/>
• <b>Sinar Matahari:</b> Kunyit sangat menyukai tempat yang terbuka dan mendapat sinar matahari penuh sepanjang hari.</p>
`;

  const updatedArticle = await prisma.article.upsert({
    where: { slug: 'panduan-budidaya-kunyit' },
    update: {
      content: htmlContent,
      title: 'Panduan Lengkap Budidaya Kunyit: Manfaat dan Cara Tanam',
      image_url: '/kunyit.jpg'
    },
    create: {
      title: 'Panduan Lengkap Budidaya Kunyit: Manfaat dan Cara Tanam',
      slug: 'panduan-budidaya-kunyit',
      content: htmlContent,
      author: 'Admin',
      image_url: '/kunyit.jpg'
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
