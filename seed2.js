const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const articles = [
    {
      title: 'Pemberdayaan Masyarakat melalui Sosialisasi Digital Marketing',
      slug: 'sosialisasi-digital-marketing-umkm',
      author: 'Tim KKM 14',
      image_url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80',
      content: 'Digitalisasi memegang peranan penting dalam pertumbuhan ekonomi desa. Oleh karena itu, mahasiswa KKM 14 menyelenggarakan kegiatan sosialisasi Digital Marketing yang ditujukan untuk para pelaku UMKM di Desa Panambangan. Dalam kegiatan ini, para peserta diajarkan cara membuat akun bisnis di media sosial, teknik fotografi produk menggunakan ponsel, serta strategi promosi yang menarik. Antusiasme warga sangat tinggi karena mereka menyadari pentingnya memperluas pasar hingga ke luar daerah tangga. Melalui program ini, diharapkan produk-produk lokal desa, termasuk kembang tahu dan hasil tani lainnya, dapat dikenal lebih luas dan meningkatkan kesejahteraan ekonomi keluarga.'
    }
  ];

  for (const article of articles) {
    const exists = await prisma.article.findUnique({ where: { slug: article.slug } });
    if (!exists) {
      await prisma.article.create({ data: article });
      console.log(`Created: ${article.title}`);
    } else {
      console.log(`Already exists: ${article.title}`);
    }
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
