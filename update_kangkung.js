const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const htmlContent = `
<p><b>Apa itu Kangkung?</b><br/>
Kangkung (<i>Ipomoea aquatica</i>) adalah tumbuhan yang termasuk jenis sayur-sayuran populer dan sangat mudah ditemukan di kawasan Asia Tenggara. Tanaman ini memiliki dua jenis utama yang dibudidayakan: Kangkung Darat (daun sempit memanjang) dan Kangkung Air (daun lebih lebar dan tangkai lebih tebal).</p>

<br/>

<p><b>Kandungan Nutrisi Kangkung</b><br/>
Di balik harganya yang terjangkau, kangkung adalah "superfood" lokal yang kaya nutrisi:<br/>
• <b>Zat Besi</b>: Sangat tinggi, berperan penting dalam pembentukan sel darah merah.<br/>
• <b>Vitamin A & C</b>: Menjaga kesehatan mata dan memperkuat sistem imun.<br/>
• <b>Serat & Air</b>: Sangat baik untuk melancarkan saluran pencernaan tubuh.</p>

<br/>

<p><b>Manfaat Kesehatan</b><br/>
• <b>Mencegah Anemia:</b> Tingginya kandungan zat besi dan folat sangat ampuh untuk mencegah kurang darah (anemia).<br/>
• <b>Kesehatan Mata:</b> Kandungan Vitamin A yang tinggi berfungsi seperti wortel untuk menjaga ketajaman penglihatan.<br/>
• <b>Mencegah Sembelit:</b> Serat dan kandungan air kangkung yang tinggi melancarkan proses pencernaan secara alami.<br/>
• <b>Menenangkan Saraf (Bikin Ngantuk?):</b> Kangkung mengandung mineral *selenium* dan *zinc* yang membuat saraf rileks, sehingga memicu rasa kantuk setelah dimakan.</p>

<br/>

<p><b>Berapa Lama Masa Tanamnya?</b><br/>
Kangkung adalah salah satu sayuran dengan masa panen paling cepat!<br/>
• <b>Masa Panen:</b> Kangkung cabut (darat) sudah bisa dipanen pada umur <b>21 hingga 25 hari</b> setelah benih disebar.<br/>
• <b>Cara Panen:</b> Dapat dicabut hingga ke akar (kangkung darat) atau dipotong tangkainya saja agar bisa tumbuh kembali (kangkung air/potong).</p>

<br/>

<p><b>Tempat yang Cocok untuk Ditanam</b><br/>
Tanaman ini sangat adaptif dan mudah ditanam di mana saja:<br/>
• <b>Ketinggian Tempat:</b> Tumbuh baik di dataran rendah hingga sedang.<br/>
• <b>Media Tanam Kangkung Darat:</b> Menyukai tanah yang gembur, kaya kompos, dan memiliki pengairan yang cukup (tapi tidak becek).<br/>
• <b>Media Tanam Kangkung Air:</b> Menyukai tanah berlumpur, rawa, atau kolam yang tergenang air statis/mengalir lambat.<br/>
• <b>Sinar Matahari:</b> Sangat membutuhkan sinar matahari langsung yang terik untuk pertumbuhan daun yang lebat dan hijau.</p>
`;

  const updatedArticle = await prisma.article.upsert({
    where: { slug: 'panduan-budidaya-kangkung' },
    update: {
      content: htmlContent,
      title: 'Panduan Lengkap Budidaya Kangkung: Manfaat dan Cara Tanam',
      image_url: '/kangkung.jpg'
    },
    create: {
      title: 'Panduan Lengkap Budidaya Kangkung: Manfaat dan Cara Tanam',
      slug: 'panduan-budidaya-kangkung',
      content: htmlContent,
      author: 'Admin',
      image_url: '/kangkung.jpg'
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
