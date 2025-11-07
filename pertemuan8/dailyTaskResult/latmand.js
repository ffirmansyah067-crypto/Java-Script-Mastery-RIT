// 1. Buat array berisi angka 1–10
const angkaAwal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Array Awal:', angkaAwal);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// ---

// 2. Gunakan map untuk mengalikan semua angka dengan 5
const dikaliLima = angkaAwal.map(angka => angka * 5);
console.log('Setelah map (x5):', dikaliLima);
// Output: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

// ---

// 3. Gunakan filter untuk mengambil angka genap (dari array dikaliLima)
const angkaGenap = dikaliLima.filter(angka => angka % 2 === 0);
console.log('Setelah filter (Genap):', angkaGenap);
// Output: [10, 20, 30, 40, 50]

// ---

// 4. Gunakan reduce untuk menjumlahkan semua angka (dari array angkaGenap)
// (akumulator, nilai_saat_ini) => operasi, nilai_awal_akumulator
const totalJumlah = angkaGenap.reduce((total, angka) => total + angka, 0);
console.log('Setelah reduce (Total Jumlah):', totalJumlah);
// Output: 150 (10 + 20 + 30 + 40 + 50)

// ---

// 5. Gunakan find untuk mencari angka pertama yang lebih dari 8 (dari array angkaAwal)
const angkaDitemukan = angkaAwal.find(angka => angka > 8);
console.log('Setelah find (Angka pertama > 8):', angkaDitemukan);
// Output: 9