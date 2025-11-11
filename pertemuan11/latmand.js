// Data Awal: Array of Object
const dataSiswa = [
    { nama: "Rin", nilai: 90, jurusan: "IPA" },
    { nama: "Lee", nilai: 75, jurusan: "IPS" },
    { nama: "Zeta", nilai: 88, jurusan: "IPA" },
    { nama: "Ethan", nilai: 92, jurusan: "Bahasa" },
    { nama: "Kazuma", nilai: 65, jurusan: "IPS" },
    { nama: "Reggy", nilai: 82, jurusan: "IPA" },
    { nama: "Aether", nilai: 78, jurusan: "Bahasa" },
    { nama: "Manz", nilai: 95, jurusan: "IPA" }
];

// --- 1. Filter hanya siswa dari jurusan "IPA" ---

const siswaIPA = dataSiswa.filter(siswa => {
    return siswa.jurusan === "IPA";
});

console.log("=== Siswa Jurusan IPA ===");
console.log(siswaIPA.map(s => s.nama).join(", "));
// Output: Rin, Zeta, Reggy, Manz

// --- 2. Ambil nilai siswa IPA yang lebih dari 80 ---

const nilaiIPA_diatas80 = siswaIPA
    .filter(siswa => siswa.nilai > 80) // Filter yang nilainya > 80
    .map(siswa => siswa.nilai);        // Ambil array nilainya saja

console.log("\n=== Nilai Siswa IPA di Atas 80 ===");
console.log(nilaiIPA_diatas80);
// Output: [90, 88, 82, 95]


// --- 3. Hitung rata-rata nilai SELURUH siswa ---

// Langkah A: Ambil semua nilai dari seluruh siswa
const semuaNilai = dataSiswa.map(siswa => siswa.nilai);

// Langkah B: Hitung total nilai menggunakan reduce
const totalNilai = semuaNilai.reduce((akumulator, nilaiSaatIni) => {
    return akumulator + nilaiSaatIni;
}, 0);

// Langkah C: Hitung rata-rata
const rataRataSeluruhSiswa = totalNilai / dataSiswa.length;

console.log("\n=== Rata-Rata Nilai Seluruh Siswa ===");
console.log(`Total Nilai: ${totalNilai}`);
console.log(`Jumlah Siswa: ${dataSiswa.length}`);
console.log(`Rata-rata: ${rataRataSeluruhSiswa.toFixed(2)}`);
// Output: 82.50