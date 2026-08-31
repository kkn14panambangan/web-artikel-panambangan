const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Delete all existing articles to reset
  await prisma.article.deleteMany({});
  console.log("Deleted all old articles.");

  const articles = [
    {
      title: 'Perkembangan UMKM Kembang Tahu di Desa Panambangan',
      slug: 'perkembangan-umkm-kembang-tahu',
      author: 'Tim KKM 14',
      image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
      content: 'Kembang tahu merupakan salah satu produk unggulan UMKM di Desa Panambangan. Proses pembuatannya yang masih tradisional dan menggunakan bahan-bahan alami membuat cita rasa kembang tahu dari desa ini sangat khas dan diminati oleh banyak orang. Melalui dukungan program KKM 14, para pelaku UMKM kembang tahu diberikan berbagai edukasi dan bantuan untuk memaksimalkan potensi produksi. Inovasi pengemasan produk dan perbaikan sanitasi produksi juga terus digalakkan. Harapannya, UMKM kembang tahu tidak hanya menjadi sumber penghasilan utama warga, tetapi juga dapat menjadi ikon kuliner khas Desa Panambangan yang dikenal luas di tingkat kabupaten.'
    },
    {
      title: 'Media Edukasi Ketahanan Pangan Berbasis Budidaya TOGA',
      slug: 'edukasi-ketahanan-pangan-toga',
      author: 'Tim KKM 14',
      image_url: 'https://images.unsplash.com/photo-1596484552735-86699ebf3994?auto=format&fit=crop&w=800&q=80',
      content: 'Dalam upaya meningkatkan ketahanan pangan dan kesehatan desa, program budidaya Tanaman Obat Keluarga (TOGA) menjadi salah satu fokus utama. Budidaya TOGA dimanfaatkan untuk kesehatan keluarga, pertolongan pertama alami, dan penghijauan lingkungan pekarangan rumah. Melalui pembuatan media edukasi berupa pamflet, poster, dan penyuluhan langsung, warga Desa Panambangan diajak untuk mulai mengenali berbagai khasiat tanaman herbal seperti jahe, kunyit, dan serai. Warga kini mulai sadar akan pentingnya menanam TOGA secara mandiri di halaman rumah sebagai bentuk ketahanan pangan dan apotek hidup.'
    },
    {
      title: 'Media Edukasi Ketahanan Pangan Berbasis Budidaya Maggot BSF',
      slug: 'edukasi-ketahanan-pangan-maggot',
      author: 'Tim KKM 14',
      image_url: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80',
      content: 'Selain budidaya TOGA, Mahasiswa KKM 14 juga menghadirkan media edukasi mengenai budidaya maggot BSF (Black Soldier Fly). Budidaya maggot BSF sangat efektif dalam mengurangi volume sampah organik domestik desa, karena maggot ini rakus memakan sisa makanan dapur. Selain menjadi pahlawan pengolah sampah, hasil panen maggot menjadi pakan ternak (seperti unggas dan ikan) alternatif yang sangat kaya akan protein, sehingga dapat menekan biaya pakan peternakan warga setempat. Integrasi antara pengelolaan sampah organik dan budidaya maggot diharapkan dapat mendorong kemandirian pangan yang berkelanjutan di Desa Panambangan.'
    }
  ];

  for (const article of articles) {
    await prisma.article.create({ data: article });
    console.log(`Created: ${article.title}`);
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
