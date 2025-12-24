
const daftarCharger = [
  { id: 1, merk: "Apple MagSafe", watt: 35, tipe: "MagSafe 3", aman: true },
  { id: 2, merk: "Baseus Gan", watt: 65, tipe: "USB-C PD", aman: true },
  { id: 3, merk: "Ugreen Nexode", watt: 100, tipe: "USB-C PD", aman: true },
  { id: 4, merk: "Anker Nano", watt: 30, tipe: "USB-C PD", aman: true },
  { id: 5, merk: "Charger HP Jadul", watt: 5, tipe: "USB-A", aman: false },
  { id: 6, merk: "Samsung Fast Charge", watt: 25, tipe: "USB-C PD", aman: true },
  { id: 7, merk: "Aukey Wall Charger", watt: 60, tipe: "USB-C PD", aman: true }
];

// Contoh cara mengakses data:
// console.log(daftarCharger[6].merk); // Output: Aukey Wall Charger

let ubahKeJson = (daftarCharger) => JSON.stringify(daftarCharger)
let hasil = ubahKeJson(daftarCharger)
// console.log(hasil);

// let ubahKeJs = (data = '') => JSON.parse(data)
// let result = ubahKeJs(hasil)
// console.log(result);
// let ubahKeJs = (data = '') => {
//     try{
//     let result = JSON.parse(data)
//     console.log('EKSESKUSI BERHASIL');
//     return result
//     } catch (error) {
//         if (error.message.includes('Unexpected non-whitespace character after JSON at position')) {
//             console.log(`404 => Error telah terjadi`);
//         } else {
//             console.log('error baru belum dikenali');

//         }
//     }
// }

let json = ubahKeJson(daftarCharger)
json += { merk: 'Mtech' }
// ubahKeJs(json)
// console.log("Kode ini pasti jalan padahal diatas error");


// MANZ TESTI
const daftarGadget = [
  { produk: "MacBook Air M2", kategori: "Laptop", stok: 5, garansiAktif: true },
  { produk: "iPhone 15 Pro", kategori: "Smartphone", stok: 12, garansiAktif: true },
  { produk: "iPad Pro M2", kategori: "Tablet", stok: 0, garansiAktif: false },
  { produk: "AirPods Pro 2", kategori: "Audio", stok: 20, garansiAktif: true },
  { produk: "Apple Watch Series 9", kategori: "Wearable", stok: 8, garansiAktif: true },
  { produk: "Magic Mouse", kategori: "Aksesoris", stok: 15, garansiAktif: false },
  { produk: "Studio Display", kategori: "Monitor", stok: 3, garansiAktif: true }
];

// Cara menampilkan data di console dalam bentuk tabel agar rapi
// console.table(daftarGadget);

let ubahKeJson2 = (daftarGadget) => JSON.stringify(daftarGadget)
let gadget = ubahKeJson2(daftarGadget)
// console.log(gadget);

let ubahKeJs2 = (data2 = '') => JSON.parse(data2)
let result2 = ubahKeJs2(gadget)
// console.log(result2);


// MANZ TESTI 2
const daftarProduk = [
  { id: "P01", nama: "Mouse Wireless", harga: 150000, kategori: "Aksesoris" },
  { id: "P02", nama: "Keyboard Mechanical", harga: 450000, kategori: "Aksesoris" },
  { id: "P03", nama: "Webcam HD", harga: 300000, kategori: "Kamera" },
  { id: "P04", nama: "Headset Gaming", harga: 550000, kategori: "Audio" },
  { id: "P05", nama: "Mousepad XL", harga: 75000, kategori: "Aksesoris" },
  { id: "P06", nama: "USB Hub Type-C", harga: 200000, kategori: "Konektivitas" },
  { id: "P07", nama: "Stand Laptop", harga: 125000, kategori: "Furniture" }
];

// Cara akses data produk ke-4 (Headset Gaming)
// console.log(daftarProduk[3].nama); // Output: Headset Gaming

let jadiJson = (daftarProduk) => JSON.stringify(daftarProduk)
let hasilProduk = jadiJson(daftarProduk)
// console.log(hasilProduk);

// let ubahKeJs = (data = '') => {
//     try {
//         let result = JSON.parse(data)
//         console.log('ANJAY LU BERHASIL BRAY');
//         return result
//     } catch (error) {
//         console.error(error.message);
//          if (error.message.includes('Unexpected non-whitespace character after JSON')) {
//             console.error(`ERROR 001 => Penyebabnya: Format JSON ganda atau terdapat karakter sampah setelah objek utama.`);
//         } else if (error.message.includes('is not valid JSON') ) {
//             console.error("ERROR 002 => Penyebabnya: Format JSON rusak: Terdapat kesalahan penulisan simbol atau karakter ilegal.");
//         } else if (error.message.includes('Unexpected token')) {
//             console.error("ERROR 003 => Penyebabnya: Data bukan JSON: Kamuy mengirim format HTML/Teks mungkin ya. Cek data yang kamu kirim.");   
//         }
//         else {
//             console.error('error baru belom dikenali');
//         }
//     }

// }

let json2 = jadiJson(daftarProduk)
let err1 = json += 'Test'
let err2 = json2.substring(10)
// ubahKeJs(err2) 
// console.log("INI KODE LAIN HARUS JALAN MAU NGGK MAU");


const daftarNegara = [
  { id: 1, negara: "Indonesia", ibukota: "Nusantara", populasi: 278000000, benua: "Asia", mataUang: "IDR" },
  { id: 2, negara: "Jepang", ibukota: "Tokyo", populasi: 125000000, benua: "Asia", mataUang: "JPY" },
  { id: 3, negara: "Jerman", ibukota: "Berlin", populasi: 83000000, benua: "Eropa", mataUang: "EUR" },
  { id: 4, negara: "Brasil", ibukota: "Brasilia", populasi: 214000000, benua: "Amerika", mataUang: "BRL" },
  { id: 5, negara: "Mesir", ibukota: "Kairo", populasi: 109000000, benua: "Afrika", mataUang: "EGP" },
  { id: 6, negara: "Australia", ibukota: "Canberra", populasi: 26000000, benua: "Australia", mataUang: "AUD" },
  { id: 7, negara: "Kanada", ibukota: "Ottawa", populasi: 38000000, benua: "Amerika", mataUang: "CAD" }
];

// Cara akses ibukota Mesir:
// console.log(daftarNegara[4].ibukota); // Output: Kairo

// Cara ambil value populasi
// console.log(daftarNegara[1].populasi); // 125000000

// Cara ambil value benua
// console.log(daftarNegara[6].benua); // Amerika

// Cara ambil value mata uang 
// console.log(daftarNegara[2].mataUang); // EUR



let toJson = (daftarNegara) => JSON.stringify(daftarNegara)
let hasilDaftarNegara = toJson(daftarNegara)
// console.log(hasilDaftarNegara);

let toJsDaftarNegara = (data = '') => JSON.parse(data)
let hasilNegara = toJsDaftarNegara(hasilDaftarNegara)
// console.log(hasilNegara);


// 3
const destinasiIkonik = [
  {
    id: "BMA-01",
    nama: "Pulau Satonda",
    lokasi: "Dompu, NTB",
    rating: 4.8,
    fiturUtama: ["Danau Air Asin", "Snorkeling", "Legenda Pohon Harapan"],
    isPopuler: true
  },
  {
    id: "BMA-02",
    nama: "Gunung Tambora",
    lokasi: "Bima/Dompu",
    rating: 4.9,
    fiturUtama: ["Kaldera Terbesar", "Jalur Pendakian", "Situs Geologi"],
    isPopuler: true
  },
  {
    id: "BMA-03",
    nama: "Pantai Lariti",
    lokasi: "Lambu, Bima",
    rating: 4.7,
    fiturUtama: ["Laut Terbelah", "Pasir Putih", "Dekat Pulau Kelapa"],
    isPopuler: false
  },
  {
    id: "BMA-04",
    nama: "Situs Uma Lengge",
    lokasi: "Wawo, Bima",
    rating: 4.6,
    fiturUtama: ["Rumah Adat Tradisional", "Lumbung Padi", "Wisata Budaya"],
    isPopuler: false
  }
];

// Contoh penggunaan: Menampilkan semua destinasi yang punya rating di atas 4.7
const wisataFavorit = destinasiIkonik.filter(tempat => tempat.rating > 4.7);
// console.log(wisataFavorit);

const toJsonWisFav = (destinasiIkonik) => JSON.stringify(destinasiIkonik)
let hasilWisFav = toJsonWisFav(destinasiIkonik)
// console.log(hasilWisFav);

const toJsWisFav = (data = '') => JSON.parse(data)
let hasilJs = toJsWisFav(hasilWisFav)
// console.log(hasilJs);


// MENYIMPAN DATA SELURUH DATA KE LOCAL STORAGE
const KUNCI_PENYIMPANAN = {
  STATE_POS: 'pos_state', // Gudang Utama (Produk, Transaksi, dll)
  PENGGUNA_SAAT_INI: 'pos_pengguna_saat_ini', // Sesi Login (Terpisah biar aman)
  LACI_TERLARANG: 'pos_laci_terlarang',
  LACI_ORANG_TULUS: 'pos_laci_orang_tulus'
};

// Data state yang mau disimpan
const statePos = {
  produk: {
    daftar: [
      { id: 1, nama: 'Teh Botol', harga: 5000, stok: 20 },
      { id: 2, nama: 'Kopi Hitam', harga: 7000, stok: 15 }
    ]
  },
  transaksi: {
    keranjang: [],
    riwayat: []
  }
};

// Simpan ke localStorage
localStorage.setItem(KUNCI_PENYIMPANAN.STATE_POS, JSON.stringify(statePos));

// Ambil item darilocalStorage
// Kita akan memperbarui data diatas
let dataPos = JSON.parse(localStorage.getItem(KUNCI_PENYIMPANAN.STATE_POS)) || { transaksi: { keranjang: [] } }
dataPos.transaksi.keranjang.push({ id: 3, nama: 'Iwak Lele', harga: 10000 })

localStorage.setItem(KUNCI_PENYIMPANAN.STATE_POS, JSON.stringify(dataPos));

// Part 2
// Aku mau nambahin riwayat pembelian
let dataPos2 = JSON.parse(localStorage.getItem(KUNCI_PENYIMPANAN.STATE_POS)) || { transaksi: { riwayat: [] } }
dataPos2.transaksi.riwayat.push({ id: 4, nama: 'Yamaha RX-KING', harga: 15000000, stok: 1 })

localStorage.setItem(KUNCI_PENYIMPANAN.STATE_POS, JSON.stringify(dataPos2));


const produkFavorit = [
  {
    kode: "A001",
    namaProduk: "Espresso Senja",
    kategori: "Minuman",
    harga: 25000,
    stok: true
  },
  {
    kode: "A002",
    namaProduk: "Latte Malam",
    kategori: "Minuman",
    harga: 30000,
    stok: false
  },
  {
    kode: "B101",
    namaProduk: "Brownies Kopi",
    kategori: "Makanan",
    harga: 20000,
    stok: true
  },
  {
    kode: "C501",
    namaProduk: "Merchandise Mug",
    kategori: "Merchandise",
    harga: 50000,
    stok: true
  }
];
// localStorage.setItem(KUNCI_PENYIMPANAN.STATE_POS, JSON.stringify([produkFavorit]))



// POS PENGGUNA SAAT INI
const daftarPengguna1 = [{
  id: 101,
  nama: "Firmansyah",
  peran: "kasir", // atau "admin"
  waktuLogin: new Date().toISOString(),
  preferensi: {
    tema: "gelap",
    bahasa: "id"
  }
}];

// Simpan ke localStorage
localStorage.setItem(KUNCI_PENYIMPANAN.PENGGUNA_SAAT_INI, JSON.stringify(daftarPengguna1));


// Nambah key dan value pada local storage, tanpa merubah sebelumnya
const tambahEmail = JSON.parse(localStorage.getItem('pos_pengguna_saat_ini'))
tambahEmail.email = "FirmansyahJaGoNGODING.com"
localStorage.setItem('pos_pengguna_saat_ini', JSON.stringify(tambahEmail))

// Kali ini aku akan menambah pengguna 
let daftarPengguna2 = JSON.parse(localStorage.getItem('pos_pengguna_saat_ini')) || []
const pengguna2 = {
  id: 102,
  nama: "Natasha",
  peran: "admin", // atau "kasir"
  waktuLogin: new Date().toISOString(),
  preferensi: {
    tema: "terang",
    bahasa: "en"
  }
};
daftarPengguna2.push(pengguna2);
localStorage.setItem('pos_pengguna_saat_ini', JSON.stringify([daftarPengguna2]));

// Cobain lagi tambah orang ketiga
let daftarPengguna3 = JSON.parse(localStorage.getItem('pos_pengguna_saat_ini'))
const pengguna3 = {
  id: 103,
  nama: "Wonyoung",
  peran: "kasir", // atau "admin"
  waktuLogin: new Date().toDateString(),
  preferensi: {
    tema: "terang",
    bahasa: "id/en"
  }
};
daftarPengguna3.push(pengguna3)
localStorage.setItem('pos_pengguna_saat_ini', JSON.stringify([daftarPengguna3]))


//===========================>

const simpanDataPos = (data) => {
  try {
    console.log(data);

    const stringJson = JSON.stringify(data);

    console.log(stringJson);


  } catch (err) {
    console.error(err.message);

  }
}

simpanDataPos('tes')



// LACI TERLARANG💀
// TOP SECRET !!!

const secretFiles = [
  {
    kode: "SEC001",
    judul: "Operasi Senja",
    level: "Top Secret",
    lokasi: "Gudang Bawah Tanah"
  },
  {
    kode: "SEC002",
    judul: "Proyek Aurora",
    level: "Confidential",
    lokasi: "Laboratorium Rahasia"
  },
  {
    kode: "SEC003",
    judul: "Dokumen Bayangan",
    level: "Restricted",
    lokasi: "Arsip Tersembunyi"
  },
  {
    kode: "SEC004",
    judul: "Misi Phantom",
    level: "Classified",
    lokasi: "Pulau Terisolasi"
  },
  {
    kode: "SEC005",
    judul: "Kunci Dimensi",
    level: "Ultra Secret",
    lokasi: "Ruang Server Gelap"
  },
  {
    kode: "SEC006",
    judul: "Catatan Oracle",
    level: "Confidential",
    lokasi: "Perpustakaan Terkunci"
  },
  {
    kode: "SEC007",
    judul: "Protokol Abyss",
    level: "Top Secret",
    lokasi: "Bunker Rahasia"
  }
];

// KITA SIMPAN DULU DATA DATA RAHASIA INI GAIS 😈
const rahasiaJson = secretFiles
localStorage.setItem(KUNCI_PENYIMPANAN.LACI_TERLARANG, JSON.stringify(rahasiaJson))

// KITA COBA AMBIL DATA RAHASIA NYA COY🙂‍↕🥶
console.log(localStorage.getItem(KUNCI_PENYIMPANAN.LACI_TERLARANG));

// AMBIL LEBIH SPESIFIK GAISS🤭
let spesifikSecret = rahasiaJson
// let dataSecret = localStorage.getItem(KUNCI_PENYIMPANAN.LACI_TERLARANG, JSON.parse(spesifikSecret[1].judul));
console.log(spesifikSecret[1]);
console.log(spesifikSecret[6].level);

// ADA SECRET FILES BARU?
// DAN DATANYA BAKALAN AKU MASUKIN SEBAGAI KODE SEC008😱!
let secretBaru = JSON.parse(localStorage.getItem('pos_laci_terlarang'))
const fileBaru = {
  kode: "SEC008",
  judul: "Raja Lele From Ngawi",
  level: "Top Secret",
  lokasi: "Kolam Penampungan Lele"
};
secretBaru.push(fileBaru)
localStorage.setItem('pos_laci_terlarang', JSON.stringify([secretBaru]))

// AKU MAU TAU LOKASI SEC008 DIMANA💀
// JADI KITA AKAN AMBIL KEY NYA AGAR KITA TAU VALUE NYA🥶
let lokasiSec8 = secretBaru
console.log(lokasiSec8[7]);
console.log(lokasiSec8[7].lokasi);


// WONG TULUS WAYAHE TAMPIL🥵
const laguGalauIndo = [
  {
    kode: "LG001",
    judul: "Tentang Aku Kau dan Dia",
    penyanyi: "Kangen Band",
    tema: "Cinta Segitiga"
  },
  {
    kode: "LG002",
    judul: "Bukan Dia Tapi Aku",
    penyanyi: "Judika",
    tema: "Patah Hati"
  },
  {
    kode: "LG003",
    judul: "Tanpa Cinta",
    penyanyi: "Yovie & Nuno",
    tema: "Kesepian"
  },
  {
    kode: "LG004",
    judul: "Akhir Tak Bahagia",
    penyanyi: "Misellia",
    tema: "Perpisahan"
  },
  {
    kode: "LG005",
    judul: "Masing Masing",
    penyanyi: "Ernie Zakri & Ade Govinda",
    tema: "Berjalan Sendiri"
  },
  {
    kode: "LG006",
    judul: "Tak Ingin Usai",
    penyanyi: "Keisya Levronka",
    tema: "Tidak Rela Berpisah"
  }
];

// KITA SIMPAN DULU YA BUAT NGEGALAU NIH😖
const orangTulus = laguGalauIndo
localStorage.setItem(KUNCI_PENYIMPANAN.LACI_ORANG_TULUS, JSON.stringify(orangTulus))







// const KUNCI_PENYIMPANAN2 = {
//     STATE_POS: 'pos_state', 
//     PENGGUNA_SAAT_INI: 'pos_pengguna_saat_ini',
//     DEV_LOG: "pos_developer_logging" 
// };

// const data = {
//     nama: "Bambang",
//     kelas: "1",
//     alamat : "bekasi"
// }

// // console.log(data.nama); // Bambang
// // console.log(data.alamat); // Bekasi


// localStorage.setItem(KUNCI_PENYIMPANAN2.STATE_POS,"INI TEST SIMPAN DATA")
// // localStorage.setItem('pos_state',"INI TEST SIMPAN DATA")
// localStorage.setItem(KUNCI_PENYIMPANAN2.DEV_LOG,"(DEV) BERHASIL SIMPAN : INI TEST SIMPAN DATA")

// localStorage.setItem(KUNCI_PENYIMPANAN2.PENGGUNA_SAAT_INI,"INI TEST SIMPAN DATA PENGGUNA")
// // localStorage.setItem('pos_pengguna_saat_ini' ,"INI TEST SIMPAN DATA PENGGUNA")

// console.log(`Data yang ada Simpan adalah: ${localStorage.getItem(KUNCI_PENYIMPANAN2.STATE_POS)} `);
// // console.log(`Data yang ada Simpan adalah: ${localStorage.getItem('pos_state')} `);

// console.log(localStorage.getItem(KUNCI_PENYIMPANAN2.DEV_LOG));