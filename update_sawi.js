const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const htmlContent = `
<p><b>Apa itu Sawi?</b><br/>
Sawi (<i>Brassica</i>) adalah kelompok sayuran daun yang sangat digemari dan tak terpisahkan dari berbagai hidangan Asia, seperti mi ayam, capcay, dan tumisan. Jenis sawi yang paling umum dibudidayakan di Indonesia adalah Sawi Hijau (Caisim) dan Sawi Sendok (Pakcoy).</p>

<br/>

<p><b>Kandungan Nutrisi Sawi</b><br/>
Sayuran berdaun hijau gelap ini adalah sumber nutrisi padat:<br/>
• <b>Vitamin K</b>: Sangat tinggi, penting untuk pembekuan darah dan metabolisme tulang.<br/>
• <b>Glukosinolat</b>: Senyawa fitokimia alami yang memberikan sedikit rasa pahit namun terkenal sebagai agen antikanker.<br/>
• <b>Kalsium & Asam Folat</b>: Kalsium nabati yang mudah diserap tubuh dan folat untuk pembentukan sel.</p>

<br/>

<p><b>Manfaat Kesehatan</b><br/>
• <b>Menjaga Kesehatan Tulang:</b> Kandungan Vitamin K dan kalsium menjaga kepadatan tulang dan mencegah osteoporosis.<br/>
• <b>Mencegah Kanker:</b> Senyawa <i>glukosinolat</i> dalam sawi dapat membantu menghambat pertumbuhan sel kanker.<br/>
• <b>Detoksifikasi Tubuh:</b> Serat dan kandungan klorofilnya membantu hati menyaring racun dari tubuh.<br/>
• <b>Kesehatan Jantung:</b> Kaya akan kalium yang membantu mengontrol tekanan darah.</p>

<br/>

<p><b>Berapa Lama Masa Tanamnya?</b><br/>
Sama seperti kangkung, sawi adalah sayuran cepat panen yang sangat menguntungkan:<br/>
• <b>Masa Panen:</b> Sawi (Caisim maupun Pakcoy) sudah dapat dipanen pada umur <b>30 hingga 40 hari</b> setelah pindah tanam dari persemaian.<br/>
• <b>Ciri Siap Panen:</b> Daun sudah mekar lebar, berwarna hijau segar, dan pangkal batangnya cukup besar/tebal.</p>

<br/>

<p><b>Tempat yang Cocok untuk Ditanam</b><br/>
Sawi sangat toleran dan mudah tumbuh baik secara konvensional maupun hidroponik:<br/>
• <b>Ketinggian Tempat:</b> Tumbuh subur di dataran rendah maupun dataran tinggi.<br/>
• <b>Media Tanam:</b> Menyukai tanah yang gembur, banyak mengandung humus, dan punya sirkulasi udara (aerasi) yang baik.<br/>
• <b>Kebutuhan Air:</b> Butuh disiram rutin agar daun tidak layu, tetapi tanah tidak boleh menggenang karena akar mudah busuk.<br/>
• <b>Sinar Matahari:</b> Membutuhkan sinar matahari sedang hingga penuh (minimal 6-8 jam sehari) agar daun hijau maksimal.</p>
`;

  const updatedArticle = await prisma.article.upsert({
    where: { slug: 'panduan-budidaya-sawi' },
    update: {
      content: htmlContent,
      title: 'Panduan Lengkap Budidaya Sawi: Manfaat dan Cara Tanam',
      image_url: '/sawi.jpg'
    },
    create: {
      title: 'Panduan Lengkap Budidaya Sawi: Manfaat dan Cara Tanam',
      slug: 'panduan-budidaya-sawi',
      content: htmlContent,
      author: 'Admin',
      image_url: '/sawi.jpg'
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
