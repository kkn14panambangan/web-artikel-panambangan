const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const articlesHtml = {
    'edukasi-ketahanan-pangan-toga': `<h2>Mengenal Jahe Merah</h2>
<p>Halo Bapak/Ibu sekalian! Tahukah Anda bahwa pekarangan rumah kita bisa disulap menjadi "apotek hidup" sekaligus sumber penghasilan tambahan? Salah satu tanaman yang sangat cocok dan mudah ditanam di pekarangan adalah <strong>Jahe Merah</strong>.</p>
<p>Berbeda dengan jahe biasa, jahe merah memiliki rimpang (umbi) berwarna kemerahan, ukuran yang lebih kecil, namun memiliki aroma dan rasa pedas yang lebih tajam. Karena khasiatnya yang luar biasa, jahe merah sering menjadi buruan pabrik jamu dan obat herbal.</p>
<h2>Manfaat Jahe Merah</h2>
<p>Mengapa kita harus menanam jahe merah? Berikut adalah beberapa alasannya:</p>
<ol>
<li><strong>Untuk Kesehatan Keluarga (Imunitas):</strong> Air rebusan jahe merah sangat ampuh untuk menghangatkan badan, meredakan batuk, mengatasi masuk angin, dan yang paling penting, meningkatkan daya tahan (imun) tubuh kita agar tidak mudah sakit.</li>
<li><strong>Bernilai Ekonomi Tinggi:</strong> Harga jual jahe merah di pasaran umumnya lebih mahal dibandingkan jahe biasa atau jahe gajah. Jika ditekuni, hasil panen dari pekarangan bisa dijual untuk menambah pemasukan keluarga.</li>
<li><strong>Hemat Bumbu Dapur:</strong> Tidak perlu lagi membeli jahe di pasar, tinggal cabut dari halaman rumah saat ingin memasak atau membuat minuman hangat.</li>
</ol>
<h2>Langkah-Langkah Menanam Jahe Merah</h2>
<p>Budidaya jahe merah sangatlah mudah dan tidak membutuhkan lahan yang luas. Bapak/Ibu bisa menanamnya langsung di tanah pekarangan atau menggunakan pot/polybag (karung bekas). Berikut langkah-langkah praktisnya:</p>
<h3>1. Persiapan Bibit</h3>
<ul>
<li>Pilih rimpang (umbi) jahe merah yang sudah tua (umur di atas 10 bulan), warnanya cerah, tidak cacat, dan bebas dari penyakit.</li>
<li>Letakkan rimpang tersebut di tempat yang lembap dan teduh selama 1-2 minggu sampai muncul tunas kecil-kecil.</li>
<li>Potong-potong rimpang yang sudah bertunas, pastikan setiap potongan memiliki 2-3 mata tunas.</li>
</ul>
<h3>2. Persiapan Media Tanam (Tanah)</h3>
<ul>
<li>Jika menanam di polybag atau karung bekas, buatlah campuran tanah, pupuk kandang (kotoran kambing/sapi yang sudah matang), dan sekam padi dengan perbandingan <strong>1 : 1 : 1</strong>.</li>
<li>Masukkan campuran tersebut ke dalam polybag atau karung, jangan sampai penuh (sisakan ruang di bagian atas).</li>
<li>Biarkan media tanam tersebut selama 1 minggu sebelum ditanami agar suhunya stabil.</li>
</ul>
<h3>3. Cara Penanaman</h3>
<ul>
<li>Buat lubang kecil di tengah polybag/tanah sedalam kira-kira 5-7 cm.</li>
<li>Masukkan bibit jahe merah dengan posisi <strong>tunas menghadap ke atas</strong>. (Jangan terbalik ya, Bapak/Ibu!)</li>
<li>Tutup tipis dengan tanah campuran tadi. Jangan ditekan terlalu padat agar tunas mudah tumbuh.</li>
</ul>
<h3>4. Perawatan Rutin</h3>
<ul>
<li><strong>Penyiraman:</strong> Siram tanaman setiap sore hari, terutama di musim kemarau. Pastikan air tidak menggenang di dalam pot/polybag karena bisa membuat rimpang busuk.</li>
<li><strong>Penyiangan:</strong> Cabut rumput-rumput liar yang tumbuh di sekitar tanaman jahe agar tidak merebut nutrisi makanan dari tanah.</li>
<li><strong>Pembumbunan (Penambahan Tanah):</strong> Ini adalah rahasia agar jahe merah berbuah lebat! Saat tanaman mulai tinggi dan rimpang mulai terlihat di permukaan, tambahkan lagi campuran tanah dan pupuk di atasnya. Lakukan ini secara rutin.</li>
</ul>
<h3>5. Masa Panen</h3>
<ul>
<li>Jahe merah biasanya bisa dipanen saat usianya mencapai <strong>10 hingga 12 bulan</strong> setelah tanam.</li>
<li>Ciri-ciri jahe merah siap panen: Daun dan batangnya mulai menguning dan mengering.</li>
<li>Cara panennya mudah, cukup bongkar tanah atau robek polybag, lalu angkat rimpang jahe, bersihkan dari tanah, dan cuci hingga bersih.</li>
</ul>
<h2>Kesimpulan</h2>
<p>Menanam jahe merah di pekarangan rumah adalah langkah kecil yang memberikan manfaat besar. Selain membuat lingkungan rumah menjadi lebih hijau, kita juga mendapatkan akses langsung ke obat herbal alami dan peluang menambah penghasilan.</p>
<p>Mari manfaatkan pekarangan rumah kita! Mulailah dengan 2 atau 3 polybag terlebih dahulu. Selamat mencoba, semoga panennya melimpah!</p>`,

    'edukasi-ketahanan-pangan-maggot': `<p>Lalat tentara hitam (Black Soldier Fly / BSF) adalah jenis lalat yang larvanya (maggot) sangat rakus memakan sampah organik. Ini adalah solusi luar biasa untuk mengatasi sampah dapur sekaligus menghasilkan pakan ternak gratis!</p>
<h2>Langkah-langkah</h2>
<ol>
<li><strong>Siapkan Kandang/Biopond:</strong> Bisa menggunakan boks plastik atau ember bekas yang dilubangi kecil-kecil untuk sirkulasi udara.</li>
<li><strong>Siapkan Bibit:</strong> Anda bisa memancing BSF dari alam menggunakan dedak fermentasi atau membeli telur/pre-pupa BSF.</li>
<li><strong>Pemberian Pakan:</strong> Masukkan sisa makanan, sayur busuk, atau buah ke dalam biopond. Maggot akan melahapnya dengan cepat.</li>
<li><strong>Panen:</strong> Maggot bisa dipanen saat berumur 14-20 hari. Berikan langsung ke unggas atau ikan kesayangan Anda!</li>
</ol>`,

    'perkembangan-umkm-kembang-tahu': `<h2>Mengenal Kembang Tahu Panambangan</h2>
<p>Kembang tahu merupakan salah satu produk kuliner unggulan dari Usaha Mikro, Kecil, dan Menengah (UMKM) yang terus berkembang pesat di Desa Panambangan. Sejak puluhan tahun lalu, resep tradisional ini telah diwariskan secara turun-temurun, mempertahankan cita rasa autentik yang tidak bisa ditemukan di tempat lain.</p>
<p>Proses pembuatannya yang masih menjunjung tinggi metode tradisional dan menggunakan bahan-bahan alami (kedelai pilihan terbaik) membuat tekstur kembang tahu dari desa ini sangat lembut, khas, dan tentunya menyehatkan.</p>
<h2>Inovasi dan Pendampingan KKM 14</h2>
<p>Di era digital ini, kualitas produk saja tidak cukup. Oleh karena itu, melalui dukungan dan kolaborasi program Kuliah Kerja Mahasiswa (KKM) Kelompok 14, para pelaku UMKM kembang tahu diberikan berbagai edukasi intensif.</p>
<ul>
<li><strong>Pemasaran Digital:</strong> Para pengrajin diajarkan cara mempromosikan produk mereka melalui media sosial seperti Instagram dan WhatsApp Business.</li>
<li><strong>Inovasi Pengemasan:</strong> Pengemasan yang dulunya sederhana kini diubah menjadi lebih modern, higienis, dan menarik secara visual.</li>
<li><strong>Sanitasi Produksi:</strong> Perbaikan ruang produksi terus digalakkan agar produk selalu terjamin kebersihannya dan lolos standar kesehatan pangan.</li>
</ul>
<p>Harapan ke depannya, UMKM kembang tahu mampu bertransformasi menjadi tulang punggung perekonomian desa dan menjadi ikon kuliner kebanggaan yang dikenal luas di tingkat kabupaten.</p>`
  };

  for (const [slug, htmlContent] of Object.entries(articlesHtml)) {
    // Also strip the HTML for the summary preview (first 150 chars of plain text)
    // We can just keep the HTML in the content field.
    await prisma.article.update({
      where: { slug: slug },
      data: { content: htmlContent }
    });
    console.log(`Updated HTML content for: ${slug}`);
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
