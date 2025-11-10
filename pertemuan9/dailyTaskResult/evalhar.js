let bukuFavorit = {
    judul: "Clean Code",
    penulis: "Robert C. Martin",
    tahun: 2008,
};
// Menambahkan properti baru 'kategori' ke objek bukuFavorit
bukuFavorit.kategori = "Pemrograman";

// Memperbarui nilai properti 'tahun' di objek bukuFavorit
bukuFavorit.tahun=2010; 

// Menghapus properti 'penulis' dari objek bukuFavorit
delete bukuFavorit.penulis;

// Menampilkan semua properti dan nilainya dari objek bukuFavorit
for (let key in bukuFavorit) {
    console.log(`Pada Key => "${key}" Valuenya => "${bukuFavorit[key]}"`);
}

