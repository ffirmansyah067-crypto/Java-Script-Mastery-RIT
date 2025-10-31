// let nama = Mendeklarasikan variabel 'nama' dan memberinya nilai "Bambang"
let nama = "BAMBANG";


// String = Variabel ini menyimpan data berupa teks (karakter, kata, atau kalimat).
let namaVar = "Ini Value String";
let namaVar1 = 'String';

// Number / Integer = Variabel ini menyimpan data berupa angka.
let namaVar2 = 100;

// Boolean = Variabel ini hanya bisa menyimpan dua kemungkinan nilai: true (benar) atau false (salah).
let namaVar3 = true ;
let namaVar4 = false ;

// Null = Variabel ini secara sengaja diset menjadi "kosong" atau tidak memiliki nilai objek.
let namaVar5 = null;

// Undifined = Menandakan variabel belum diberi nilai.
let namaVar6 = undefined; 
let namaVarr5;


// console.log("Check Value: " +namaVar2);
// console.log("Check Type Data: " + typeof namaVar2);


// function namaFunction = untuk mengelompokkan serangkaian instruksi atau tugas agar dapat dipanggil dan dijalankan berulang kali kapan pun dibutuhkan dalam program.
function namaFunction() {
    console.log("Si "+ nama + " Telah ngisi nama");
    confirm("Oh kamu namanya adalah "+ nama +" kah?")
    namaF2()
}

// function namaF2 = yaitu, mencatat ke konsol dan menampilkan pop-up konfirmasi selesai.
function namaF2(){
    console.log("Ini Function 2 Berjalan");
}
//-->Batas<--//


// 3 OPSI 
// LET - VAR - CONST

// let alamat = prompt("Masukan Alamat Anda");

let a = 90;
let b = a;
let c = b + a;
let d = a + b * c ;

var e = "Halo ";
const f = "Nama ";
let g = "Saya ";
let h = "Bambang ";

let result = e + f + g + h;

console.log(result);
// console.log((90*180)+90);


function add(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) + Number(b)
    console.log("Hasil dari "+ a +"+"+ b +" Adalah " + result);
}

function minus(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) - Number(b)
    console.log("Hasil dari "+ a +"-"+ b +" Adalah " + result);
}

function multiply(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) * Number(b)
    console.log("Hasil dari "+ a +"x"+ b +" Adalah " + result);
}

function devide(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) / Number(b)
    console.log("Hasil dari "+ a +"/"+ b +" Adalah " + result);
}

function modulus(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) % Number(b)
    console.log("Sisa Bagi dari "+ a +" Di Bagi "+ b +" Sisanya " + result);
}

function exponen(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) ** Number(b)
    console.log("Hasil dari "+ a +" Pangkat "+ b +" Adalah " + result);
}

/* Variable & Value

// Variable adalah wadah untuk menyimpan data di program (sementara)
// Praktik pemrograman yang baik untuk selalu mendeklarasikan variable sebelum digunakan.
// 3opsi = let far const
// var: cara lama, memiliki scope functioner
// let: deklarasi variabel yang bisa diubah nilainya
// const: deklarasi variabel yang nilainya tetap (konstan)

// operator aritmatika
minus : pengurangan
multiply : perkalian
devide : pembagian
modulus : sisa dari pembagian 
eksponen : pangkat

// operator perbandingan
>  : lebih besar
<  : lebih kecil
==  : membandingkan nilai sama
>=  : membandingkan nilai lebih besar atau sama
<=  : membandingkan nilai lebih kecil atau sama
=== : membandingkan persamaan nilai dan data
!=  : membandingkan ketidaksamaan nilai dari variabel 
!==  :  membandingkan ketidaksamaan nilai dari variabel dan data

Contohnya : 

// operator logika
&&  : Hasilnya true apabila kedua kondisinya sama sama true
||  : Hasilnya true jika salah satu kondisinya true
|   : Membalikkam nilai boolean
!   : Bisa membalikkan fakta

*/


// let w = "10"
// console.log(w);
// console.log(typeof w);
// // let ww = Number(w);
// let ww = + w
// console.log(ww);
// console.log(typeof ww);

// OPERATOR PERBANDINGAN 

let m = 10;
let n = 10 ;

// > | < | == | != | >= | <= | === | !== 

let v = m !== n;

// (&&) | (||) | (!) | 

// && hanya true apabila kondisi sama sama true 
// console.log(true && true); // TRUE
// console.log(5 > 4 && 9 < 10 )
// console.log(false && true); // FALSE
// console.log(12 != 12 && "45" !== 45);
// console.log(true && false); // FALSE

// (||) BISA TRUE APABILA SALAH SATU KONDISI TRUE
// console.log(true || false); // TRUE
// console.log(false || true); // TRUE
// console.log(false || false); // FALSE
// console.log(true || true); // TRUE

// (!) BISA MEMBALIKAN FAKTA
let data = "Santri";

if(data != "Santri" ) {

}

// console.log(!true);


let x = m == n && m >= n ; // TRUE 
//


// console.log(typeof x);
// console.log(x);

// OPERATOR COMPARASION FOR >> GREATER THEN (>)
// console.log(5 > 5); // False
// console.log(6 > 5); // True 
// console.log(6 > 90); // False 
// console.log(5 >= 5); // True

// OPERATOR COMPARASION FOR >> LESS THEN (<)
// console.log(5 < 5); // False
// console.log(5 <= 5); // True


function checkUmur(){
    let data = prompt("Santri Mana ?")
    // let result = + umur 

    if(data != "PIT") {
       console.log("Anda Bukan Santri");
       console.log(data != "PIT");
    } else {
        console.log("Oke Santri");
        console.log(data != "PIT");
    }

    if(data == "PIT") {
        console.log("Oke Santri");
        console.log(data != "PIT");
    } else {
       console.log("Anda Bukan Santri");
       console.log(data != "PIT");
    }

    if(!data){
        console.log(!data);
        console.log(data);
        console.warn("Anda Belom Ngisi Data");
    } else {
        console.log(!data);
        console.log(data);
        console.log("Oke Data Di terima");
    }
}

console.log(70 > 90 && 23 < 90 && !true || 87 > 67 && 54 < 90 && !true); // 