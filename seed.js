const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const articles = [
    {
      title: 'Perkembangan UMKM Kembang Tahu di Desa Panambangan',
      slug: 'perkembangan-umkm-kembang-tahu',
      author: 'Tim KKM 14',
      image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
      content: 'Kembang tahu merupakan salah satu produk unggulan UMKM di Desa Panambangan. Proses pembuatannya yang masih tradisional dan menggunakan bahan-bahan alami membuat cita rasa kembang tahu dari desa ini sangat khas dan diminati oleh banyak orang. Melalui dukungan program KKM 14, para pelaku UMKM kembang tahu diberikan pelatihan tentang pemasaran digital dan pengemasan produk agar jangkauan pasarnya bisa lebih luas. Inovasi seperti penambahan varian rasa dan perbaikan sanitasi produksi juga terus digalakkan. Harapannya, UMKM kembang tahu tidak hanya menjadi sumber penghasilan utama warga, tetapi juga dapat menjadi ikon kuliner khas Desa Panambangan yang dikenal luas di tingkat kabupaten.'
    },
    {
      title: 'Media Edukasi Ketahanan Pangan Berbasis Budidaya TOGA dan Maggot',
      slug: 'edukasi-ketahanan-pangan-toga-maggot',
      author: 'Tim KKM 14',
      image_url: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80',
      content: 'Dalam upaya meningkatkan ketahanan pangan desa, program budidaya Tanaman Obat Keluarga (TOGA) dan maggot BSF (Black Soldier Fly) menjadi fokus utama. Budidaya maggot BSF sangat efektif dalam mengurangi volume sampah organik domestik desa, karena maggot ini rakus memakan sisa makanan dapur. Selain itu, hasil panen maggot menjadi pakan ternak alternatif yang sangat kaya akan protein, sehingga menekan biaya peternakan warga. Di sisi lain, budidaya TOGA dimanfaatkan untuk kesehatan keluarga dan penghijauan lingkungan rumah. Melalui media edukasi berupa pamflet dan penyuluhan langsung, warga Desa Panambangan kini mulai mengintegrasikan pengelolaan sampah organik dengan budidaya maggot dan pemanfaatan TOGA secara mandiri.'
    }
  ];

  for (const article of articles) {
    // Check if exists
    const exists = await prisma.article.findUnique({ where: { slug: article.slug } });
    if (!exists) {
      await prisma.article.create({
        data: article
      });
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
