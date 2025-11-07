let nilai = [60, 75, 80, 55 ,90, 45];

// NO 1
const nilaiLulus = nilai.filter(n => n >= 70);
console.log('1. Nilai yang lulus:', nilaiLulus); 
// Output: Nilai yang lulus: [75, 80, 90]


// NO 2

const hasilKomentar = nilai.map(n => {
    // Terapkan logika di sini  
    if (n >= 70) {
        return { nilai: n, status: "Lulus" };
    } else {
        return { nilai: n, status: "Gagal" };
    }
});
console.log("2. Hasil Komentar (Lulus/Gagal):", hasilKomentar);
/*
Output: 
[
  { nilai: 60, status: 'Gagal' },
  { nilai: 75, status: 'Lulus' },
  { nilai: 80, status: 'Lulus' },
  { nilai: 55, status: 'Gagal' },
  { nilai: 90, status: 'Lulus' },
  { nilai: 45, status: 'Gagal' }
]
*/


// NO 3
// Total dihitung dari array nilai awal
const totalNilai = nilai.reduce((akumulator, nilaiSaatIni) => {
    return akumulator + nilaiSaatIni;
}, 0); // Nilai awal akumulator adalah 0
console.log("3. Total Seluruh Nilai (Menggunakan reduce):", totalNilai);
// Output: 405 (60 + 75 + 80 + 55 + 90 + 45)


// NO 4
console.log("4. Inilah Hasil Akhir:");
console.log(`Total Semua Nilai: ${totalNilai}`);
console.log(`Jumlah Siswa Lulus: ${nilaiLulus.length} orang`);
console.log("Detail Status Kelulusan:", hasilKomentar);