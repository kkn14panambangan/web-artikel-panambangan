const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const expandedContent = {
    'perkembangan-umkm-kembang-tahu': `Kembang tahu merupakan salah satu produk kuliner unggulan dari Usaha Mikro, Kecil, dan Menengah (UMKM) yang terus berkembang pesat di Desa Panambangan. Sejak puluhan tahun lalu, resep tradisional ini telah diwariskan secara turun-temurun, mempertahankan cita rasa autentik yang tidak bisa ditemukan di tempat lain.

Proses pembuatannya yang masih menjunjung tinggi metode tradisional dan menggunakan bahan-bahan alami (kedelai pilihan terbaik) membuat tekstur kembang tahu dari desa ini sangat lembut, khas, dan tentunya menyehatkan. Kuah jahe merahnya yang hangat dan legit selalu berhasil memikat hati para penikmatnya, baik dari kalangan warga lokal maupun wisatawan yang singgah.

Namun, di era digital ini, kualitas produk saja tidak cukup. Oleh karena itu, melalui dukungan dan kolaborasi program Kuliah Kerja Mahasiswa (KKM) Kelompok 14, para pelaku UMKM kembang tahu diberikan berbagai edukasi intensif. Pelatihan ini difokuskan pada strategi pemasaran digital (digital marketing), di mana para pengrajin diajarkan cara mempromosikan produk mereka melalui media sosial seperti Instagram dan WhatsApp Business.

Selain pemasaran, inovasi dalam hal pengemasan (packaging) produk juga menjadi perhatian utama. Pengemasan yang dulunya sederhana kini diubah menjadi lebih modern, higienis, dan menarik secara visual, tanpa menghilangkan unsur tradisionalnya. Perbaikan sanitasi ruang produksi juga terus digalakkan agar produk selalu terjamin kebersihannya dan lolos standar kesehatan pangan.

Harapan ke depannya, UMKM kembang tahu tidak hanya sekadar menjadi sumber penghasilan tambahan bagi warga, tetapi mampu bertransformasi menjadi tulang punggung perekonomian desa. Lebih dari itu, kembang tahu Panambangan bersiap untuk melangkah lebih jauh menjadi ikon kuliner kebanggaan yang dikenal luas di tingkat kabupaten, bahkan provinsi.`,

    'edukasi-ketahanan-pangan-toga': `Dalam upaya mendukung program pemerintah untuk meningkatkan ketahanan pangan dan taraf kesehatan masyarakat desa, budidaya Tanaman Obat Keluarga (TOGA) kini menjadi salah satu fokus utama di Desa Panambangan. Program ini didorong kuat oleh inisiatif kelompok Kuliah Kerja Mahasiswa (KKM) 14.

Budidaya TOGA bukan sekadar menanam tumbuhan biasa, melainkan sebuah investasi kesehatan bagi setiap keluarga. Tanaman-tanaman herbal seperti jahe merah, kunyit, temulawak, kencur, hingga daun serai memiliki segudang manfaat medis yang telah terbukti secara ilmiah maupun empiris. Keberadaannya di pekarangan rumah berfungsi ganda: sebagai apotek hidup untuk pertolongan pertama pada penyakit ringan, sekaligus sebagai elemen penghijauan yang menyegarkan lingkungan.

Untuk memastikan program ini berjalan efektif, Mahasiswa KKM 14 melakukan pendekatan langsung kepada warga melalui pembuatan berbagai media edukasi. Media edukasi ini dirancang semenarik mungkin dalam bentuk pamflet, poster informatif, serta infografis digital. Tidak berhenti pada alat peraga, tim KKM juga turun langsung memberikan penyuluhan dari pintu ke pintu (door-to-door) dan melalui pertemuan balai desa.

Dalam penyuluhan tersebut, warga diajak untuk mengenali khasiat masing-masing tanaman, cara pembibitan yang benar, perawatan harian, hingga teknik pengolahan hasil panen menjadi minuman herbal (jamu) yang bernilai ekonomis. 

Alhasil, respons warga Desa Panambangan sangat luar biasa. Kini, pemandangan pekarangan rumah yang dipenuhi polybag berisi tanaman herbal menjadi hal yang lumrah ditemui. Kesadaran warga akan pentingnya menanam TOGA secara mandiri telah tumbuh pesat. Mereka kini menyadari bahwa kemandirian pangan dan kesehatan sejatinya bisa dimulai dari halaman rumah sendiri.`,

    'edukasi-ketahanan-pangan-maggot': `Isu pengelolaan sampah organik rumah tangga senantiasa menjadi tantangan di berbagai daerah, tak terkecuali di Desa Panambangan. Menyikapi hal tersebut, Mahasiswa KKM 14 menghadirkan terobosan solutif berupa edukasi intensif mengenai budidaya maggot BSF (Black Soldier Fly) sebagai agen pengurai sampah yang luar biasa.

Maggot BSF bukanlah belatung lalat biasa. Serangga ini memiliki kemampuan makan yang sangat rakus dan siklus hidup yang unik. Budidaya maggot BSF terbukti secara ilmiah sebagai salah satu metode paling efektif, murah, dan ramah lingkungan dalam mengurangi atau bahkan melenyapkan volume sampah organik domestik desa. Sisa-sisa makanan dapur, sayuran busuk, hingga sisa buah yang biasanya memicu bau tak sedap dan penyakit, kini disulap menjadi "makanan lezat" bagi koloni maggot.

Selain bertindak sebagai pahlawan lingkungan (pengolah sampah), hasil panen maggot itu sendiri memberikan keuntungan finansial yang signifikan. Tubuh maggot BSF mengandung kadar protein hewani yang sangat tinggi (mencapai 40-50%). Hal ini menjadikannya sebagai pakan alternatif premium untuk hewan ternak seperti unggas (ayam, bebek) dan ikan (lele, nila).

Bagi warga desa yang mayoritas memiliki usaha sampingan peternakan, penggunaan maggot sebagai substitusi pakan pabrikan mampu menekan biaya operasional pakan hingga 50%. Tentu saja, ini berdampak langsung pada peningkatan margin keuntungan peternak. Bekas kotoran maggot (kasgot) pun tidak terbuang sia-sia, melainkan dapat digunakan sebagai pupuk kompos organik kualitas tinggi untuk menyuburkan tanaman pertanian.

Melalui media edukasi yang komprehensif serta praktik langsung pembuatan kandang (biopond) maggot sederhana, warga Desa Panambangan kini mulai mengadopsi sistem ini. Integrasi cerdas antara pengelolaan sampah organik dan budidaya maggot BSF diharapkan mampu mendorong kemandirian pangan, menjaga kebersihan desa, dan menciptakan ekonomi sirkular yang berkelanjutan di masa depan.`
  };

  for (const [slug, content] of Object.entries(expandedContent)) {
    await prisma.article.update({
      where: { slug: slug },
      data: { content: content }
    });
    console.log(`Updated content for: ${slug}`);
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
