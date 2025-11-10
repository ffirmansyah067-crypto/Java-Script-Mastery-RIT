// EASY MODE LEVEL 1
// #1

const santri = ["Ahmad", "Luqman", "Fauzi", "Rayhan"];
console.log (santri[0]); // Output: Ahmad
console.log (santri.length); // Output: 4

santri.unshift("Zidane"); // Menambahkan santri baru di awal array

delete santri[4]; // Menghapus santri pada index terakhir (Rayhan)

santri.unshift("Ibrahim"); // Menambahkan santri baru di awal array

delete santri[2]; // Menghapus santri pada index ke-2 (Luqman)
console.log(santri);


// #2

const santriBaru = ["Arman", "Zahran", "Ihya", "Raihan Nur", "Rehan S", "Yudis", "Fadhli", "Firman", "Naufal", "Lukman"];
let santriIzin = ["Raihan Nur"];
let santriTerlambat = ['Santri terlambat : Naufal, Lukman'];
console.log(santriTerlambat)
delete santriIzin[0]; // Menghapus santri yang izin
let santriHadir = ["Arman", "Zahran", "Ihya", "Raihan Nur", "Rehan S", "Yudis", "Fadhli", "Firman", "Naufal", "Lukman"];
console.log(santriHadir); // Menampilkan daftar santri yang hadir


// MEDIUM MODE LEVEL 2

const nilaiSantri = [85, 92, 76, 90, 100, 67, 88];

// Tampikan semua nilai 
// console.log("Daftar Nilai Santri:");
// for (const nilai of nilaiSantri) {
//   console.log(nilai);
// }


// FOR EACH
nilaiSantri.forEach((nilaiSantri) => {
console.log(nilaiSantri)
})

// MAP 
const nilaiSetelahBonus = nilaiSantri.map(nilai => {
  return nilai + 5;
});

console.log(nilaiSetelahBonus);

// FILTER
const nilaiLulus = nilaiSantri.filter(nilai => {
  return nilai >= 90;
});

console.log(nilaiLulus);

// REDUCE
const totalNilai = nilaiSantri.reduce((akumulator, nilaiSaatIni) => {
  return akumulator + nilaiSaatIni;
}, 0);

const rata2 = totalNilai / nilaiSantri.length;

console.log(rata2);

// FIND
const nilaiSempurna = nilaiSantri.find(nilai => {
  return nilai === 100;
});

console.log(nilaiSempurna);

// STUDY CASE MEDIUM
const nilaiSantriPIT = [85, 92, 76, 90, 100, 67, 88];

// 1. Menampilkan semua nilai awal
console.log(`Nilai awal: [${nilaiSantri.join(', ')}]`);

// ---

// 2. Menambah 5 poin ke semua santri menggunakan map()
const nilaiBonus = nilaiSantriPIT.map(nilai => {
    return nilai + 5;
});

console.log(`Nilai + Bonus: [${nilaiBonus.join(', ')}]`);

// ---

// 3. Menampilkan hanya santri yang lulus (≥ 85) menggunakan filter()
// Kriteria kelulusan diterapkan pada array setelah bonus
const santriLulus = nilaiBonus.filter(nilai => {
    // Memeriksa nilai yang lebih dari atau sama dengan 85
    return nilai >= 85; 
});

console.log(`Santri Lulus: [${santriLulus.join(', ')}]`);

// ---

// 4. Menghitung rata-rata keseluruhan menggunakan reduce()
// Rata-rata dihitung dari total nilai setelah bonus
const totalNilaiSantri = nilaiBonus.reduce((akumulator, nilaiSaatIni) => {
    return akumulator + nilaiSaatIni;
}, 0); // 0 adalah nilai awal penjumlahan

const rataRata = totalNilai / nilaiBonus.length;

// Menampilkan rata-rata dengan satu angka di belakang koma
console.log(`Rata-rata: ${rataRata.toFixed(1)}`);

// HARD MODE LEVEL 3
// Fokus: Object & Manipulasi Properti

const santriRIT = {
  nama: "Ahmad Fauzi",
  usia: 18,
  program: "Fullstack Development",
  nilai: 92,
  aktif: true
};
santriRIT.hobby= "Ngoding" // Tambah properti baru
santriRIT.nilai= 95 // Mengubah nilai
delete santriRIT.aktif // Menghapus properti
console.log(santriRIT)


// STUDI CASE ARRAY OF OBJECT

const dataSantri01 = [
  { nama: "Ahmad", nilai: 90, aktif: true },
  { nama: "Luqman", nilai: 75, aktif: true },
  { nama: "Fauzi", nilai: 60, aktif: false },
  { nama: "Zain", nilai: 95, aktif: true }
];

const santriAktif = dataSantri01.filter(santri => santri.aktif === true); // Tampilan santri aktif
console.log("Santri Aktif:");
console.log(santriAktif);

const santriBonus = santriAktif.map(santri => ({
    // Gunakan spread operator untuk menyalin properti lain
    ...santri, 
    // Tambahkan 5 poin ke properti 'nilai'
    nilai: santri.nilai + 5 
}));

console.log("\nSantri Aktif dengan Bonus (+5):");
console.log(santriBonus);

const totalNilaiAktif = santriBonus.reduce((akumulator, santri) => {
    return akumulator + santri.nilai;
}, 0);

const jumlahSantriAktif = santriBonus.length; // Jumlah santri aktif (3 orang)
const rataRataNilaiAktif = totalNilaiAktif / jumlahSantriAktif;

console.log("\nTotal Nilai Aktif (dengan bonus):", totalNilaiAktif); // Bonus

console.log(`Rata-rata Nilai Aktif (dengan bonus): ${rataRataNilaiAktif.toFixed(2)}`); // Rata rata nilai aktif

// STUDI CASE ANALISIS SANTRI TERBAIK

const dataSantriSIT = [
  { nama: "Ahmad", nilai: 90, aktif: true },
  { nama: "Luqman", nilai: 75, aktif: true },
  { nama: "Fauzi", nilai: 60, aktif: false },
  { nama: "Zain", nilai: 95, aktif: true }
];

function analisisDataSantri(data) {
  
  // 1. Santri dengan nilai tertinggi
  const santriTertinggi = data.reduce((tertinggi, saatIni) => {
    // Membandingkan nilai saat ini dengan nilai tertinggi yang tersimpan
    return (saatIni.nilai > tertinggi.nilai) ? saatIni : tertinggi;
  }, data[0]); // Mulai perbandingan dari elemen pertama
  
  // 2. Santri dengan nilai terendah
  const santriTerendah = data.reduce((terendah, saatIni) => {
    // Membandingkan nilai saat ini dengan nilai terendah yang tersimpan
    return (saatIni.nilai < terendah.nilai) ? saatIni : terendah;
  }, data[0]); // Mulai perbandingan dari elemen pertama

  // 3. Jumlah santri aktif
  const jumlahAktif = data.filter(santri => santri.aktif).length;

  // 4. Daftar nama santri lulus (nilai ≥ 85)
  const daftarLulus = data
    .filter(santri => santri.nilai >= 85) // Filter objek yang nilainya >= 85
    .map(santri => santri.nama);         // Ambil properti 'nama' saja

  // Mengembalikan semua hasil dalam bentuk objek
  return {
    santriNilaiTertinggi: santriTertinggi,
    santriNilaiTerendah: santriTerendah,
    jumlahSantriAktif: jumlahAktif,
    daftarNamaSantriLulus: daftarLulus
  };
}

// Eksekusi fungsi dan tampilkan hasilnya
const hasilAnalisis = analisisDataSantri(dataSantri01);

console.log("=== Hasil Analisis Data Santri ===");
console.log("1. Santri dengan Nilai Tertinggi:", hasilAnalisis.santriNilaiTertinggi.nama, `(${hasilAnalisis.santriNilaiTertinggi.nilai})`);
console.log("2. Santri dengan Nilai Terendah:", hasilAnalisis.santriNilaiTerendah.nama, `(${hasilAnalisis.santriNilaiTerendah.nilai})`);
console.log("3. Jumlah Santri Aktif:", hasilAnalisis.jumlahSantriAktif);
console.log("4. Daftar Nama Santri Lulus (>= 85):", hasilAnalisis.daftarNamaSantriLulus.join(", "));

// STUDI CASE INTEGRASI ARRAY & OBJECT
const dataSantriBeasiswa = [
  { nama: "Ahmad Fadhil", program: "Tahfiz", nilai: 92, aktif: true },
  { nama: "Sarah Khairunnisa", program: "Hadits", nilai: 88, aktif: true },
  { nama: "Muhammad Zaki", program: "Fikih", nilai: 75, aktif: true },
  { nama: "Siti Aisyah", program: "Tahfiz", nilai: 95, aktif: true },
  { nama: "Ali Hasan", program: "Akidah", nilai: 60, aktif: false },
  { nama: "Fatimah Azzahra", program: "Hadits", nilai: 98, aktif: true },
  { nama: "Lukman Hakim", program: "Fikih", nilai: 81, aktif: true },
  { nama: "Maryam Jamilah", program: "Tahfiz", nilai: 100, aktif: true },
  { nama: "Rizky Firmansyah", program: "Akidah", nilai: 70, aktif: false },
  { nama: "Nadia Syarifah", program: "Hadits", nilai: 85, aktif: true },
  { nama: "Irfan Maulana", program: "Fikih", nilai: 91, aktif: true },
  { nama: "Hana Nuraini", program: "Tahfiz", nilai: 79, aktif: true },
  { nama: "Bagas Pratama", program: "Akidah", nilai: 65, aktif: false },
  { nama: "Dian Permata", program: "Hadits", nilai: 83, aktif: true },
  { nama: "Joko Susilo", program: "Fikih", nilai: 72, aktif: true },
  { nama: "Zainab Aqila", program: "Tahfiz", nilai: 94, aktif: true },
  { nama: "Khalid Ikhwan", program: "Akidah", nilai: 87, aktif: true },
  { nama: "Lina Marlina", program: "Hadits", nilai: 78, aktif: true },
  { nama: "Hafiz Ridwan", program: "Fikih", nilai: 69, aktif: false },
  { nama: "Adelia Putri", program: "Tahfiz", nilai: 96, aktif: true }
];

console.log(dataSantriBeasiswa);

const santriTerurut = [...dataSantriBeasiswa].sort((a, b) => b.nilai - a.nilai); //Urutan nilai tertinggi ke terendah

const topLimaSantri = santriTerurut.slice(0, 5); // 5 Santri terbaik

const pesanTopLima = topLimaSantri.map((santri, index) => { // Map untuk menampilkan pesan
    const peringkat = index + 1;
    let keterangan = "";

    // Logika sederhana untuk keterangan
    if (santri.nilai === 100) {
        keterangan = "Selamat, nilai sempurna!";
    } else if (santri.nilai >= 95) {
        keterangan = "Sangat Memuaskan!";
    } else if (santri.nilai >= 90) {
        keterangan = "Hasilnya Luar Biasa!";
    } else {
        keterangan = "Pertahankan Prestasimu!";
    }

    return `Peringkat ${peringkat}: ${santri.nama} (${santri.program}) — Nilai ${santri.nilai}. ${keterangan}`;
});

console.log("=== 🏆 5 Santri Terbaik Tahun Ini 🏆 ===");
pesanTopLima.forEach(pesan => console.log(pesan));

// Mini Project Akhir: “Dashboard Santri Pintar”

const dataSantri = [
    { nama: "Ahmad", nilai: 90, program: "Tahfiz", aktif: true, kehadiran: 9 },
    { nama: "Luqman", nilai: 75, program: "Fikih", aktif: true, kehadiran: 6 },
    { nama: "Fauzi", nilai: 60, program: "Hadits", aktif: false, kehadiran: 4 },
    { nama: "Zain", nilai: 95, program: "Tahfiz", aktif: true, kehadiran: 10 },
    { nama: "Sarah", nilai: 88, program: "Fikih", aktif: true, kehadiran: 8 },
    { nama: "Risa", nilai: 72, program: "Hadits", aktif: true, kehadiran: 7 },
    { nama: "Khalid", nilai: 98, program: "Tahfiz", aktif: true, kehadiran: 10 },
    { nama: "Nisa", nilai: 81, program: "Fikih", aktif: false, kehadiran: 5 },
    { nama: "Bagas", nilai: 68, program: "Hadits", aktif: true, kehadiran: 7 },
    { nama: "Dian", nilai: 93, program: "Tahfiz", aktif: true, kehadiran: 9 }
];

// --- 1. Daftar Santri Lulus (Filter dan Map) ---
// Kriteria Lulus: Nilai >= 80

const daftarLulus = dataSantri
    .filter(santri => santri.nilai >= 80) // Filter objek yang nilainya 80 ke atas
    .map(santri => santri.nama);          // Ambil properti 'nama' saja

// --- 2. Rata-rata Nilai Seluruh Santri (Reduce) ---

const totalNilaiPIT = dataSantri.reduce((akumulator, santri) => {
    return akumulator + santri.nilai;
}, 0);

const rataRataNilai = totalNilai / dataSantri.length;

// --- 3. Santri dengan Kehadiran Tertinggi (Reduce atau Find) ---
// Menggunakan reduce untuk mencari objek dengan nilai 'kehadiran' tertinggi

const santriTerajin = dataSantri.reduce((tertinggi, saatIni) => {
    return (saatIni.kehadiran > tertinggi.kehadiran) ? saatIni : tertinggi;
}, dataSantri[0]);

// --- 4. Jumlah Santri Aktif (Filter dan Length) ---

const jumlahSantriAktif1 = dataSantri.filter(santri => santri.aktif).length;

// --- 5. Output Leaderboard 3 Besar (Sort dan Slice) ---
// Leaderboard diurutkan berdasarkan 'nilai'

const leaderboard = [...dataSantri] // Salin array agar array asli tidak berubah
    .sort((a, b) => b.nilai - a.nilai) // Urutkan nilai tertinggi ke terendah
    .slice(0, 3); // Ambil 3 teratas

console.log("=== Hasil Analisis Akademik Santri ===");
console.log(`1. Daftar Santri Lulus (Nilai >= 80): ${daftarLulus.join(", ")}`);
console.log(`2. Rata-rata Nilai Seluruh Santri: ${rataRataNilai.toFixed(2)}`);
console.log(`3. Santri dengan Kehadiran Tertinggi: ${santriTerajin.nama} (${santriTerajin.kehadiran}/10)`);
console.log(`4. Jumlah Santri Aktif: ${jumlahSantriAktif} dari ${dataSantri.length} santri`);

console.log("\n=== 🥇 TOP 3 LEADERBOARD NILAI 🥇 ===");
leaderboard.forEach((santri, index) => {
    console.log(`${index + 1}. ${santri.nama} (${santri.program}) - Nilai: ${santri.nilai}`);
});