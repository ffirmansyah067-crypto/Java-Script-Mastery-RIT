// 1. Buat array kosong bernama "belanja"
let belanja = [];
console.log('1. Array Belanja Awal (Kosong):', belanja);
// Output: []

// ---

// 2. Tambahkan beberapa barang ke dalam array
belanja.push('Telur', 'Beras', 'Gula', 'Susu');
console.log('2. Setelah Penambahan Barang (4 item):', belanja);
// Output: [ 'Telur', 'Beras', 'Gula', 'Susu' ]

// ---

// 3. Hapus barang terakhir dan pertama
let barangTerakhirDihapus = belanja.pop(); // Hapus item terakhir (Susu)
let barangPertamaDihapus = belanja.shift(); // Hapus item pertama (Telur)
console.log(`3. Setelah Hapus Barang Terakhir ('${barangTerakhirDihapus}') dan Pertama ('${barangPertamaDihapus}'):`, belanja);
// Output: [ 'Beras', 'Gula' ]

// ---

// 4. Tambahkan barang baru di posisi kedua
// Posisi ke-2 = Indeks 1. Kita tidak menghapus item (0) saat menyisipkan.
belanja.splice(1, 0, 'Kopi');
console.log('4. Setelah Tambah Barang Baru (Kopi) di Posisi Kedua:', belanja);
// Output: [ 'Beras', 'Kopi', 'Gula' ]

// ---

// 5. Cetak isi array dan jumlah item
console.log('\n✅ HASIL AKHIR:');
console.log('Isi Daftar Belanja:', belanja);
console.log('Jumlah Item Saat Ini:', belanja.length);