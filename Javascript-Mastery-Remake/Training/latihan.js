let nama = 'Ucup';
let kelas = 12 ;
let umur = 17;
let hobi = 'Futsal'


function biodata(nama = '',kelas = '',umur = '',hobi = ''){
    let a = nama
    let b = kelas
    let c = umur
    let d = hobi
    return `${a}  ${b}  ${c}  ${d}`
}
console.log(biodata(`Halo nama saya ${nama}, saya kelas ${kelas} umurnya ${umur} lalu hobi saya ${hobi}`));

// TRY AGAIN

// LEVEL 1
function ucapkanSalam() {
    console.log("Hello World!");
}

ucapkanSalam();

// LEVEL 2
function hitungLuasPersegi(sisi){
    let luas = sisi * sisi
    return luas
}
let hasil = hitungLuasPersegi(15);
console.log("Luas persegi adalah..." + hasil);
 
// LEVEL 3
const cekStatusLulus = (nilai) =>{
    if (nilai >= 75){
        return "Lulus" ;
    } else {
        return "Remedial" ;
    }
}
let nilaiSiswa = [70,85,90];

nilaiSiswa.forEach(n =>{
    console.log(`Nilai ${n} dinyatakan ${cekStatusLulus(n)}`);
})

// LEVEL 4
function prosesData(nama, callback) {
    console.log("Memproses data untuk: " + nama);
    // Simulasi jeda waktu atau proses
    callback();
}

prosesData("Budi", function() {
    console.log("Proses selesai! Pesan ini muncul dari Callback.");
});

const pendaftar = [
    { nama : 'Ali', umur: 12},
    { nama : 'Budi', umur: 17},
    { nama : 'Cici', umur: 18},
    { nama: 'Dodi', umur : 25}
]
let cici = pendaftar[2]
console.log(`Nama Saya ${cici.nama} dan Saya umur ${cici.umur}`);


// CONTOH FOR EACH
const siswa = ["Budi", "Siti", "Andi"];
siswa.forEach((nama) => {
    console.log("Halo, " + nama);
});

// CONTOH MAP
const angka = [1, 2, 3, 4];
const dikaliDua = angka.map((n) => n * 2);

console.log(dikaliDua); // [2, 4, 6, 8]

// CONTOH FILTER
const angka2 = [1, 2, 3, 4, 5, 6];
const genap = angka2.filter((n) => n % 2 === 0);

console.log(genap); // [2, 4, 6]

// CONTOH FIND
const users = [
    { id: 1, nama: "Budi" },
    { id: 2, nama: "Siti" },
    { id: 3, nama: "Andi" }
];
const ketemu = users.find((user) => user.id === 2);

console.log(ketemu.nama); // "Siti"

// CONTOH REDUCE
const keranjang = [10000, 20000, 5000];
// total = nilai sementara (accumulator), harga = elemen saat ini
const totalBayar = keranjang.reduce((total, harga) => total + harga, 0);

console.log(totalBayar); // 35000