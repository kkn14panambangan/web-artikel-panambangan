const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const expandedHtmlContent = {
    'edukasi-ketahanan-pangan-toga': `<h2>Pentingnya Budidaya TOGA</h2>
<p>Dalam upaya mendukung program pemerintah untuk meningkatkan ketahanan pangan dan taraf kesehatan masyarakat desa, budidaya <strong>Tanaman Obat Keluarga (TOGA)</strong> kini menjadi salah satu fokus utama di Desa Panambangan. Program ini didorong kuat oleh inisiatif kelompok Kuliah Kerja Mahasiswa (KKM) 14.</p>
<p>Budidaya TOGA bukan sekadar menanam tumbuhan biasa, melainkan sebuah investasi kesehatan bagi setiap keluarga. Tanaman-tanaman herbal seperti jahe merah, kunyit, temulawak, kencur, hingga daun serai memiliki segudang manfaat medis yang telah terbukti secara ilmiah maupun empiris.</p>
<h2>Manfaat Utama</h2>
<ul>
<li><strong>Apotek Hidup:</strong> Berfungsi ganda sebagai pertolongan pertama pada penyakit ringan.</li>
<li><strong>Penghijauan:</strong> Elemen penghijauan yang menyegarkan lingkungan rumah.</li>
<li><strong>Nilai Ekonomi:</strong> Bisa diolah menjadi minuman herbal (jamu) yang bernilai ekonomis.</li>
</ul>
<h2>Langkah Edukasi Mahasiswa</h2>
<p>Untuk memastikan program ini berjalan efektif, Mahasiswa KKM 14 melakukan pendekatan langsung kepada warga melalui pembuatan berbagai media edukasi. Media edukasi ini dirancang semenarik mungkin dalam bentuk pamflet, poster informatif, serta infografis digital.</p>
<p>Tidak berhenti pada alat peraga, tim KKM juga turun langsung memberikan penyuluhan dari pintu ke pintu (door-to-door) dan melalui pertemuan balai desa. Dalam penyuluhan tersebut, warga diajak untuk mengenali khasiat masing-masing tanaman, cara pembibitan yang benar, perawatan harian, hingga teknik pengolahan hasil panen.</p>
<h2>Hasil yang Dicapai</h2>
<p>Alhasil, respons warga Desa Panambangan sangat luar biasa. Kini, pemandangan pekarangan rumah yang dipenuhi polybag berisi tanaman herbal menjadi hal yang lumrah ditemui. Kesadaran warga akan pentingnya menanam TOGA secara mandiri telah tumbuh pesat. Mereka kini menyadari bahwa kemandirian pangan dan kesehatan sejatinya bisa dimulai dari halaman rumah sendiri.</p>`,

    'edukasi-ketahanan-pangan-maggot': `<h2>Tantangan Sampah Organik</h2>
<p>Isu pengelolaan sampah organik rumah tangga senantiasa menjadi tantangan di berbagai daerah, tak terkecuali di Desa Panambangan. Menyikapi hal tersebut, Mahasiswa KKM 14 menghadirkan terobosan solutif berupa edukasi intensif mengenai budidaya <strong>maggot BSF (Black Soldier Fly)</strong> sebagai agen pengurai sampah yang luar biasa.</p>
<h2>Solusi Pengelolaan Sampah</h2>
<p>Maggot BSF bukanlah belatung lalat biasa. Serangga ini memiliki kemampuan makan yang sangat rakus dan siklus hidup yang unik. Budidaya maggot BSF terbukti secara ilmiah sebagai salah satu metode paling efektif, murah, dan ramah lingkungan dalam mengurangi atau bahkan melenyapkan volume sampah organik domestik desa.</p>
<p>Sisa-sisa makanan dapur, sayuran busuk, hingga sisa buah yang biasanya memicu bau tak sedap dan penyakit, kini disulap menjadi "makanan lezat" bagi koloni maggot.</p>
<h2>Keuntungan Ganda</h2>
<ol>
<li><strong>Pakan Ternak Premium:</strong> Tubuh maggot BSF mengandung kadar protein hewani yang sangat tinggi (mencapai 40-50%). Hal ini menjadikannya pakan alternatif untuk hewan ternak seperti unggas dan ikan.</li>
<li><strong>Menekan Biaya:</strong> Bagi peternak, penggunaan maggot mampu menekan biaya operasional pakan pabrikan hingga 50%.</li>
<li><strong>Pupuk Kompos (Kasgot):</strong> Bekas kotoran maggot tidak terbuang sia-sia, melainkan menjadi pupuk organik kualitas tinggi untuk menyuburkan tanaman pertanian.</li>
</ol>
<h2>Implementasi Warga</h2>
<p>Melalui media edukasi yang komprehensif serta praktik langsung pembuatan kandang (biopond) maggot sederhana, warga Desa Panambangan kini mulai mengadopsi sistem ini. Integrasi cerdas antara pengelolaan sampah organik dan budidaya maggot BSF diharapkan mampu mendorong kemandirian pangan, menjaga kebersihan desa, dan menciptakan ekonomi sirkular yang berkelanjutan di masa depan.</p>`,

    'perkembangan-umkm-kembang-tahu': `<h2>Warisan Kuliner Desa Panambangan</h2>
<p><strong>Kembang tahu</strong> merupakan salah satu produk kuliner unggulan dari Usaha Mikro, Kecil, dan Menengah (UMKM) yang terus berkembang pesat di Desa Panambangan. Sejak puluhan tahun lalu, resep tradisional ini telah diwariskan secara turun-temurun, mempertahankan cita rasa autentik yang tidak bisa ditemukan di tempat lain.</p>
<p>Proses pembuatannya yang masih menjunjung tinggi metode tradisional dan menggunakan bahan-bahan alami (kedelai pilihan terbaik) membuat tekstur kembang tahu dari desa ini sangat lembut, khas, dan tentunya menyehatkan. Kuah jahe merahnya yang hangat dan legit selalu berhasil memikat hati para penikmatnya, baik dari kalangan warga lokal maupun wisatawan yang singgah.</p>
<h2>Program Pendampingan KKM 14</h2>
<p>Namun, di era digital ini, kualitas produk saja tidak cukup. Oleh karena itu, melalui dukungan dan kolaborasi program Kuliah Kerja Mahasiswa (KKM) Kelompok 14, para pelaku UMKM kembang tahu diberikan berbagai edukasi intensif.</p>
<ul>
<li><strong>Strategi Digital Marketing:</strong> Para pengrajin diajarkan cara mempromosikan produk mereka melalui media sosial seperti Instagram dan WhatsApp Business.</li>
<li><strong>Inovasi Pengemasan:</strong> Pengemasan yang dulunya sederhana kini diubah menjadi lebih modern, higienis, dan menarik secara visual tanpa menghilangkan unsur tradisionalnya.</li>
<li><strong>Standarisasi Sanitasi:</strong> Perbaikan ruang produksi terus digalakkan agar produk selalu terjamin kebersihannya dan lolos standar kesehatan pangan.</li>
</ul>
<h2>Harapan Masa Depan</h2>
<p>Harapan ke depannya, UMKM kembang tahu tidak hanya sekadar menjadi sumber penghasilan tambahan bagi warga, tetapi mampu bertransformasi menjadi tulang punggung perekonomian desa. Lebih dari itu, kembang tahu Panambangan bersiap untuk melangkah lebih jauh menjadi ikon kuliner kebanggaan yang dikenal luas di tingkat kabupaten, bahkan provinsi.</p>`
  };

  for (const [slug, htmlContent] of Object.entries(expandedHtmlContent)) {
    await prisma.article.update({
      where: { slug: slug },
      data: { content: htmlContent }
    });
    console.log(`Restored correct HTML content for: ${slug}`);
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
