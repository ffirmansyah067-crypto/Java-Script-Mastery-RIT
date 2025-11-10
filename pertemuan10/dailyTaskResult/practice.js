// TUGAS LATIHAN 

// 1
// MENCARI NAMA
const mahasiswa = {
    alice: { math: 85, english: 90, science: 88 },
    bob: { math: 78, english: 85, science: 82 },
    carol: { math: 92, english: 89, science: 94 }
};
const namaMahasiswa = Object.keys(mahasiswa) ;
console.log(namaMahasiswa)
const rataRataNilai = {};


// MENCARI NILAI RATA RATA
namaMahasiswa.forEach(nama => {
    // Ambil array nilai dari sub-objek
    const nilaiArray = Object.values(mahasiswa[nama]);
    
    // Hitung total menggunakan reduce()
    const totalNilai = nilaiArray.reduce((sum, nilai) => sum + nilai, 0);
    
    // Hitung rata-rata
    const rataRata = totalNilai / nilaiArray.length;
    
    // Simpan hasilnya ke objek baru
    rataRataNilai[nama] = rataRata.toFixed(2);
});

console.log("\n2. Rata-rata Nilai Setiap Mahasiswa:");
console.log(rataRataNilai);

// LOOP DATA MAHASISWA
console.log("\n3. Loop Data Mahasiswa (Nama dan Total Nilai):");

Object.entries(mahasiswa).forEach(([nama, nilaiObjek]) => {
    // Destructuring: [nama (key), nilaiObjek (value)]
    const total = Object.values(nilaiObjek).reduce((sum, nilai) => sum + nilai, 0);
    console.log(`- ${nama} memiliki total nilai: ${total}`);
});

// GABUNGAN DENGAN DATA BARU0
const dataBaru = {
    david: { math: 70, english: 75, science: 72 }
};

// Menggabungkan objek 'mahasiswa' dan 'dataBaru'
const dataLengkap = { 
    ...mahasiswa, 
    ...dataBaru 
};

console.log("\n4. Data Mahasiswa Lengkap (Gabungan dengan Spread Operator):");
console.log(dataLengkap);