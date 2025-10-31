// Deklarasi Variabel dengan Tipe Data Berbeda

// 1. Menggunakan let (Bisa diubah nilainya, Block Scope)
let usia = 20; // Tipe data: Number

// 2. Menggunakan const (Nilai TIDAK BISA diubah, Block Scope)
const namaLengkap = "Firmansyah"; // Tipe data: String

// 3. Menggunakan var (Bisa diubah nilainya, Function Scope/Global Scope - Kurang disarankan)
var statusLulus = true; // Tipe data: Boolean

// --- Operasi Aritmatika dan Perbandingan ---

// Angka yang akan dibandingkan
const angka1 = 5; // const untuk angka yang tidak berubah
let angka2 = 7;     // let karena akan digunakan dalam operasi

// 1. Operator Aritmatika 
let hasilKali = angka1 * angka2; // 50 * 7 = 350
let hasilSisaBagi = angka1 % angka2; // Sisa bagi dari 50 / 7 = 1

console.log("--- Variabel Dasar ---");
console.log("Usia (let):", usia);
console.log("Nama (const):", namaLengkap);
console.log("Status Lulus (var):", statusLulus);

console.log("\n--- Operasi Aritmatika ---");
console.log("Hasil Perkalian (" + angka1 + " * " + angka2 + "):", hasilKali);
console.log("Hasil Sisa Bagi (" + angka1 + " % " + angka2 + "):", hasilSisaBagi);

// 2. Operator Perbandingan (Comparison Operators)
let apakahSamaDengan = (angka1 == 50); // Apakah angka1 sama nilainya dengan 50? (true)
let apakahLebihBesar = (angka1 > angka2); // Apakah angka1 lebih besar dari angka2? (true)
let apakahTidakSama = (angka2 != 10); // Apakah angka2 tidak sama dengan 10? (true)
let apakahIdentik = (angka1 === "50"); // Apakah angka1 sama nilai DAN tipe datanya dengan "50"? (false, karena tipe data beda)

console.log("\n--- Operasi Perbandingan ---");
console.log("Apakah angka1 == 50? (Perbandingan Nilai):", apakahSamaDengan);
console.log("Apakah angka1 > angka2? (Lebih Besar):", apakahLebihBesar);
console.log("Apakah angka2 != 10? (Tidak Sama):", apakahTidakSama);
console.log("Apakah angka1 === '50'? (Perbandingan Nilai & Tipe):", apakahIdentik);