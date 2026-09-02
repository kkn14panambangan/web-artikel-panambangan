const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const htmlContent = `
<p><b>Apa itu Cabai?</b><br/>
Cabai (<i>Capsicum</i>) adalah buah dan tumbuhan anggota genus Capsicum yang buahnya dapat digolongkan sebagai sayuran maupun bumbu, tergantung bagaimana penggunanya. Rasa pedas yang menjadi ciri khas utama cabai berasal dari zat <i>capsaicin</i> yang sangat digemari oleh masyarakat Indonesia.</p>

<br/>

<p><b>Kandungan Nutrisi Cabai</b><br/>
Meskipun ukurannya kecil dan rasanya pedas membakar, cabai ternyata menyimpan banyak nutrisi penting:<br/>
• <b>Capsaicin</b>: Senyawa bioaktif utama yang memberikan rasa pedas dan memiliki efek analgesik (pereda nyeri).<br/>
• <b>Vitamin C</b>: Kandungan vitamin C pada cabai segar bahkan lebih tinggi daripada jeruk!<br/>
• <b>Vitamin A & Antioksidan</b>: Sangat baik untuk daya tahan tubuh dan menangkal radikal bebas.</p>

<br/>

<p><b>Manfaat Kesehatan</b><br/>
• <b>Pereda Nyeri Alami:</b> Capsaicin dalam cabai dapat mengurangi persepsi rasa sakit dengan menghambat zat P penghantar sinyal nyeri ke otak.<br/>
• <b>Melancarkan Metabolisme:</b> Sensasi panas dari cabai terbukti dapat meningkatkan pembakaran kalori tubuh (termogenesis).<br/>
• <b>Kesehatan Jantung:</b> Konsumsi cabai dalam jumlah wajar membantu melancarkan peredaran darah dan mencegah pembekuan darah.<br/>
• <b>Melegakan Hidung Tersumbat:</b> Sifat pedasnya membantu mengencerkan lendir saat flu atau pilek.</p>

<br/>

<p><b>Berapa Lama Masa Tanamnya?</b><br/>
Budidaya cabai membutuhkan ketelatenan ekstra dibandingkan sayuran daun:<br/>
• <b>Masa Panen Pertama:</b> Cabai mulai berbunga pada umur 45-50 hari dan panen pertama dapat dilakukan pada umur <b>75 hingga 85 hari</b> setelah tanam (tergantung varietas dan ketinggian tempat).<br/>
• <b>Frekuensi Panen:</b> Dapat dipanen berulang kali setiap 3-5 hari sekali hingga tanaman berumur 6-8 bulan.</p>

<br/>

<p><b>Tempat yang Cocok untuk Ditanam</b><br/>
Cabai termasuk tanaman yang cukup sensitif terhadap cuaca ekstrem:<br/>
• <b>Ketinggian Tempat:</b> Tumbuh optimal di dataran rendah hingga dataran tinggi (0 - 1.500 mdpl).<br/>
• <b>Curah Hujan & Air:</b> Membutuhkan pasokan air yang cukup, namun <b>sangat rentan terhadap genangan air</b> yang bisa memicu penyakit busuk akar dan layu fusarium.<br/>
• <b>Kondisi Tanah:</b> Harus gembur, kaya bahan organik, memiliki drainase baik, dan pH tanah netral (sekitar 6,0 - 7,0).<br/>
• <b>Sinar Matahari:</b> Mutlak membutuhkan sinar matahari penuh sepanjang hari (10-12 jam/hari).</p>
`;

  const updatedArticle = await prisma.article.upsert({
    where: { slug: 'panduan-budidaya-cabai' },
    update: {
      content: htmlContent,
      title: 'Panduan Lengkap Budidaya Cabai: Manfaat dan Cara Tanam',
      image_url: null
    },
    create: {
      title: 'Panduan Lengkap Budidaya Cabai: Manfaat dan Cara Tanam',
      slug: 'panduan-budidaya-cabai',
      content: htmlContent,
      author: 'Admin',
      image_url: null
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
