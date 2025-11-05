//=================================>Variabel
let nama = "Firmansyah"; 
const umur = 25; 
var kota = Jakarta; 

//=================================> Tipe Data Primitif
// String
let pesan = "Halo, dunia!";
// Number
let angka = 42;
// Boolean
let isActive = true;
// Null
let kosong = null;
// Undefined
let tidakTerdefinisi;

//=================================> Operator 
// Aritmatika
let a = 10;
let b = 5;
let penjumlahan = a + b; // 15
let pengurangan = a - b; // 5
let perkalian = a * b;   // 50
let pembagian = a / b;   // 2

// Perbandingan
let lebihBesar = a > b;      // true
let samaDengan = a === b;    // false

// Logika
let dan = (a > 5) && (b < 10); // true
let atau = (a < 5) || (b < 10); // true

//=================================> Struktur Kontrol
// Percabangan
if (umur >= 18) {
  console.log("Anda sudah dewasa.");
} else {
  console.log("Anda masih di bawah umur.");
}

// Perulangan
for (let i = 0; i < 5; i++) {       
    console.log("Perulangan ke-" + i);  
}

let count = 0;
while (count < 5) {
  console.log("Count: " + count);
  count++;
}

// Fungsi: Deklarasi, Parameter, Return, Arrow Function (ES6)
// Contoh Function Declaration
function sapa(nama) {
  return "Halo, " + nama + "! Selamat datang.";
}

console.log(sapa("Budi"));

// Contoh Function Expression
const hitungLuasPersegi = function(sisi) {
  return sisi * sisi;
};

console.log(hitungLuasPersegi(5)); // Output: 25

// Contoh Arrow Function
const tambah = (a, b) => a + b;

console.log(tambah(10, 5)); // Output: 15

// Contoh function dengan parameter default
function hitungDiskon(harga, diskon = 0.10) {
  return harga - (harga * diskon);
}

console.log(hitungDiskon(100000));      // Menggunakan diskon default (10%)
console.log(hitungDiskon(100000, 0.25)); // Menggunakan diskon 25%

// Scope, Hoisting, dan Closure
// Contoh Scope
function contohScope() {
  let lokal = "Saya hanya bisa diakses di dalam fungsi ini.";
  console.log(lokal);
}

contohScope();
// console.log(lokal); // Error: lokal is not defined

// Contoh Hoisting
console.log(hoistedVar); // Output: undefined
var hoistedVar = "Saya dihoist!";

// Contoh Closure
function buatPenghitung() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const penghitung = buatPenghitung();
console.log(penghitung()); // Output: 1
console.log(penghitung()); // Output: 2
console.log(penghitung()); // Output: 3

