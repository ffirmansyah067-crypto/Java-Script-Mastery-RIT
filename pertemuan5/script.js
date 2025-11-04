

// Default Notification
function togglePopup(no) {
    document.getElementById(`popupModal${no}`).classList.toggle("hidden");
}

function clearOutput() {
    document.getElementById("outputBox").innerText = "";
}

function addNewPharaghraph() {
    const random = `\n======================\n`;
    const output = document.getElementById("outputBox");
    output.innerText += `${random}`;
}

let dataSantri = [
    "bambang",
    21,
    true,
    "dodi",
    "euis",
    "febri",
    "gusti",
    "hani",
    "indri",
    "joko",
    "karti",
    "lala",
    "mama",
    "nana",
    "ocha",
    "pipi",
    "qori",
    "rani",
    "siti",
    "tata",
    "uusi",
    "vivi",
    "wati",
    "xeni",
    "yuni",
    "zaki",
]
let dataSantri2 = [
    'Data1', "Data2", 'Data3', 'Data4', 'Data5']

function logggingNama(nama, alamat, rek) {
    let result = `Nama Kamu ${nama} \n Alamat kamu di ${alamat} \n Rek kamu ${rek}`;
    // return "Ini Hasil Return"
    return result
}

// console.log(logggingNama("Bambang", "jakarta", "09876654321"));



// =======================================


// >>>>>>>>>>>>>>>>>>>>>   FORM F1
document.getElementById("F1").addEventListener("submit", function (e) {
    e.preventDefault();
    togglePopup("1")
    const firstNumber = document.getElementById("firstNumber").value;
    const secondNumber = document.getElementById("secondNumber").value;
    const operator = document.getElementById("operator").value;

    if (!firstNumber || !secondNumber || !operator) {
        alert("Masukan Angka / Opeator");
    } else {
        f1(firstNumber, secondNumber, operator)
    }

});

// Deklartif
function f1(angkaPertama, angkaKedua, operator) {
    togglePopup("1");
    let result;
    const a = Number(angkaPertama);
    const b = Number(angkaKedua);

    if (isNaN(a) || isNaN(b) && !a || !b) {
        console.log("Input harus berupa angka");
        return;
    }

    switch (operator) {
        case "*":
            result = a * b;
            break;
        case "+":
            result = a + b;
            break;
        case "/":
            result = a / b;
            break;
        default:
            console.log("Operator tidak valid");
            return;
    }

    const output = document.getElementById("outputBox");
    output.innerText += `F1: Hasil dari ${angkaPertama} ${operator} ${angkaKedua} = ${result}`;
    togglePopup("1");
    return result;
}

// Ekpresif
// const f1 = function (angkaPertama, angkaKedua, operator) {
//     togglePopup("1");
//     let result;
//     const a = Number(angkaPertama);
//     const b = Number(angkaKedua);

//     if (isNaN(a) || isNaN(b) && !a || !b) {
//         console.log("Input harus berupa angka");
//         console.log(typeof a);
//         console.log(typeof b);

//         return;
//     }

//     switch (operator) {
//         case "*":
//             result = a * b;
//             break;
//         case "+":
//             result = a + b;
//             break;
//         default:
//             console.log("Operator tidak valid");
//             return;
//     }

//     const output = document.getElementById("outputBox");
//     output.innerText += `Hasil dari ${angkaPertama} ${operator} ${angkaKedua} = ${result}`;
//     togglePopup("1");
//     return result;
// }

// arrow function
// const funct1 =  (angkaPertama, angkaKedua,) => angkaPertama * angkaKedua;

// =============================================================


// LOOPING 
function f3(data) {
    for (start = 0; start < data.length; start++) {
        if (start % 2 != 0) {
            console.log(`${start + 1} Genap >>> ${data[start]}`);
            // console.log((start + 1) + " Genap >>>" + data[start]);
        } else {
            console.log(`${start + 1} Ganjil >>> ${data[start]}`);
        }
    }
}

// f3(dataSantri2)
// console.log(`\n ========== \n`);
// f3(dataSantri)


document.getElementById("F2").addEventListener("submit", function (e) { // FORM SALAM RELIGI
    e.preventDefault(); // mencegah reload page
    togglePopup("2") // Membuka popup
    const nama = document.getElementById("nama").value; // Mengambil value input nama

    if (!nama) { // Cek jika input nama kosong
        alert("Silahkan masukan nama"); // Validasi input nama kosong
        togglePopup("2")
    } else {
        salamCheckReligi(nama) // Memanggil fungsi salamCheckReligi dengan parameter nama
        togglePopup("2")

    }

});

let tagOutput = document.getElementById('outputBox'); // Mengambil elemen outputBox

// Fungsi untuk mengecek nama dan memberikan salam sesuai

function salamCheckReligi(nama) {
    togglePopup("2")
    if(nama.includes("muhammad")){ // Cek jika nama mengandung "muhammad"
        tagOutput.innerText += `Hello ${nama} Assalamualaikum Brother`; // Menambahkan salam religius ke output
        return `Hello ${nama} Assalamualaikum Brtoher` // Mengembalikan salam religius
    } else {
        tagOutput.innerText += `Hello ${nama} Ada yang bisa di bantu \n`; // Menambahkan salam biasa ke output
        return `Hello ${nama} Brtoher` // Mengembalikan salam biasa
    }
}

// NB FROM ME : 
// includes() itu method dari string untuk mengecek apakah ada substring di dalam string tersebut
// innerText itu properti dari elemen HTML untuk mengatur atau mengambil teks di dalam elemen tersebut
// += itu operator penugasan yang menambahkan nilai di sebelah kanan ke variabel di sebelah kiri
// \n itu karakter khusus untuk membuat baris baru dalam string
// return itu perintah untuk mengembalikan nilai dari sebuah fungsi
// togglePopup("2") itu memanggil fungsi togglePopup dengan parameter "2" untuk menutup popup modal nomor 2
// alert() itu fungsi bawaan JavaScript untuk menampilkan pesan peringatan kepada pengguna
// e.preventDefault() itu method untuk mencegah aksi default dari sebuah event, dalam hal ini mencegah form submit mereload halaman
// document.getElementById() itu method untuk mengambil elemen HTML berdasarkan id-nya
// addEventListener() itu method untuk menambahkan event listener pada sebuah elemen HTML
// submit itu jenis event yang terjadi ketika sebuah form dikirimkan
// function itu kata kunci untuk mendefinisikan sebuah fungsi di JavaScript
// const itu kata kunci untuk mendefinisikan variabel konstan di JavaScript
// let itu kata kunci untuk mendefinisikan variabel yang nilainya bisa diubah di JavaScript
// if itu pernyataan kondisi untuk menjalankan blok kode jika kondisi terpenuhi
// else itu pernyataan kondisi untuk menjalankan blok kode jika kondisi if tidak terpenuhi
// return mengizinkan nilai dari dalam keluar
// parameter mengizinkan nilai dari luar ke dalam fungsi

// =============================================================

// SCOPE AND ALL THINGS

var a = 10; // global scope

