// ==================================================
// ==================================================

//   MANIPULATION OBJECT WITH ONLY METHOD FOR OBJECT

// ==================================================
// ==================================================

let dataSantri = {
    nama: "Bambang",
    "umur": 90,
    alamat: "Yogyakarta",
    wa: 6289512345678,
    fullData: (passwordData) => {
        if (passwordData == "pw") {
            return `Ok You Can Access My Full Data:
        Nama : ${dataSantri['nama']}
        Umur : ${dataSantri.umur}
        Alamat : ${dataSantri['alamat']}
        WA : ${dataSantri.wa}`
        } else {
            return "Password Salah"
        }
    },
    dataArr: [
        {
            data1: "Contoh data 1",
            data2: "Contoh data 2"
        },
        {
            data1a: "Contoh data 1A",
            data2a: "Contoh data 2A"
        },
        {
            data1b: "Contoh data 1B",
            data2b: "Contoh data 2B"
        }
    ]
}
// console.log(dataSantri.fullData("pw"));

// console.log(dataSantri.dataArr[2].data2b);


const santri = {
  id: 101,
  nama: "Ahmad Fauzi",
  usia: 17,
  jenisKelamin: "Laki-laki",
  asalDaerah: "Yogyakarta",
  program: "Fullstack Web Development",
  nilaiRataRata: 88.5,
  aktif: true,
  tanggalDaftar: "2025-02-15",
  hobi: ["Membaca", "Ngoding", "Olahraga"]
};

santri.nilaiRataRata = 100
santri["nilaiRataRata"] = 95
santri['namaAyah'] = "Bambang"
delete santri.jenisKelamin

if(santri['nilaiRataRata'] > 75 ) {
    santri['status'] = "Lulus"
} 

// console.log(santri["nilaiRataRata"]);

for (let key in santri) {
    console.log(`Pada Key => "${key}" Valuenya => "${santri[key]}"`);
    
}

// CONTOH 
 // contoh

let dataMobil = {
    merk: "Toyota",
    model: "Fortuner",
    tahun: 2023
};

console.log(`${dataMobil.merk}, ${dataMobil.model}, ${dataMobil.tahun}`);


let dataMotor = {
    merk: "Yamaha",
    model: "RX-KING",
    tahun: 2004

};
console.log(`${dataMotor.merk}, ${dataMotor.model}, ${dataMotor.tahun}`);

let dataPesawat = {
    merk: "Boeing",
    model: "737 MAX",
    tahun: 2020
};
fullData = (dataPesawat) => {
    return `${dataPesawat.merk}, ${dataPesawat.model}, ${dataPesawat.tahun}`;
}
console.log(fullData(dataPesawat));

let dataKapal = {
    merk: "Carnival",
    model: "Vista",
    tahun: 2016
};

fullData = (dataKapal) => {
    return `${dataKapal.merk}, ${dataKapal.model}, ${dataKapal.tahun}`;
};

console.log(fullData(dataKapal));

const siswa = {
    nama: "Ethan",
    umur: 20,
    jurusan: "Informatika",
    hobbi : ["Membaca", "Bermain Game", "Coding"],
    makananFavorit: "mie ayam",
    minumanFavorit: "jus mangga"
    
};  
for (let key in siswa) {
    console.log(`${key}: ${siswa[key]}`);
}

const peserta = {
    peserta1: "Ayaka",
    peserta2: "Hutao",
    peserta3: "Yae Miko",
    peserta4: "Lisa",
    peserta5: "Raiden Shogun"
};
peserta.peserta1 = "Kamisato Ayaka";
console.log["peserta1"];
peserta['peserta6'] = "Furina";

for (let key in peserta) {
    console.log(`${key}: ${peserta[key]}`);
}

// NB FOR ME :
// Object adalah tipe data koompleks yang digunakan untuk menyimpan data dalam bentuk pasangan key-value.
// CONTOH
let novel = {
    judul1 : "Gunung Rinjani",
    judul2 : "Weathering with you",
    judul3 : "IPA & IPS"
};
// Akses object 
console.log(novel.judul2); // Weathering with you
console.log(novel['judul3']); // IPA & IPS

// Menambah properti 
novel.judul4 = "Love Or Osis"; // Menambah judul4

// Mengubah nilai properti
novel.judul1 = "3726 mdpl"; // Mengubah judul1

// Menghapus properti
delete novel.judul3; // Menghapus judul3

// Looping pada Object
for (let key in novel) {
    console.log(`${key}: ${novel[key]}`);
}
// Output:
// judul1: Gunung Rinjani
// judul2: Weathering with you
// judul4: Love Or Osis

// Object dapat menyimpan berbagai tipe data, termasuk string, angka, array, dan bahkan fungsi sebagai nilai properti.


