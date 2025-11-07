// 1. Buat array berisi 5 nama teman
let teman = ['Budi', 'Ani', 'Citra', 'Dian', 'Eko'];
console.log('1. Array Awal (5 Nama):', teman);
// Output: [ 'Budi', 'Ani', 'Citra', 'Dian', 'Eko' ]

// ---

// 2. Tambahkan 1 nama di awal dan akhir array
teman.unshift('Fahmi'); // Menambah di awal
teman.push('Gita');    // Menambah di akhir
console.log('2. Setelah Tambah Awal (Fahmi) & Akhir (Gita):', teman);
// Output: [ 'Fahmi', 'Budi', 'Ani', 'Citra', 'Dian', 'Eko', 'Gita' ]

// ---

// 3. Hapus 1 nama dari awal dan akhir
teman.shift(); // Menghapus dari awal ('Fahmi')
teman.pop();   // Menghapus dari akhir ('Gita')
console.log('3. Setelah Hapus Awal & Akhir:', teman);
// Output: [ 'Budi', 'Ani', 'Citra', 'Dian', 'Eko' ]

// ---

// 4. Sisipkan nama baru di posisi ke-2
// Posisi ke-2 berarti indeks 1.
// splice(indeks_mulai, jumlah_dihapus, elemen_baru)
teman.splice(1, 0, 'Hendra');
console.log('4. Setelah Sisip (Hendra) di Posisi ke-2 (Indeks 1):', teman);
// Output: [ 'Budi', 'Hendra', 'Ani', 'Citra', 'Dian', 'Eko' ]