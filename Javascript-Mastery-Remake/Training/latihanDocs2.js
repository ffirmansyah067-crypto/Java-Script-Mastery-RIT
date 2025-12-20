
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
json += {merk: 'Mtech'}
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
console.log(daftarProduk[3].nama); // Output: Headset Gaming

let jadiJson = (daftarProduk) => JSON.stringify(daftarProduk)
let hasilProduk = jadiJson(daftarProduk)
console.log(hasilProduk);

let ubahKeJs = (data = '') => {
    try {
        let result = JSON.parse(data)
        console.log('ANJAY LU BERHASIL BRAY');
        return result
    } catch (error) {
        console.error(error.message);
         if (error.message.includes('Unexpected non-whitespace character after JSON')) {
            console.error(`ERROR 001 => Penyebabnya: Format JSON ganda atau terdapat karakter sampah setelah objek utama.`);
        } else if (error.message.includes('is not valid JSON') ) {
            console.error("ERROR 002 => Penyebabnya: Format JSON rusak: Terdapat kesalahan penulisan simbol atau karakter ilegal.");
        } else if (error.message.includes('Unexpected token')) {
            console.error("ERROR 003 => Penyebabnya: Data bukan JSON: Kamuy mengirim format HTML/Teks mungkin ya. Cek data yang kamu kirim.");   
        }
        else {
            console.error('error baru belom dikenali');
        }
    }
        
}

let json2 = jadiJson(daftarProduk)
let err1 = json += 'Test'
let err2 = json2.substring(10)
ubahKeJs(err2) // 
console.log("INI KODE LAIN HARUS JALAN MAU NGGK MAU");