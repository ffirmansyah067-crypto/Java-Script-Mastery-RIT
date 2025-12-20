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
console.log(daftarCharger[6].merk); // Output: Aukey Wall Charger

let ubahKeJson = (daftarCharger) => JSON.stringify(daftarCharger)
let hasil = ubahKeJson(daftarCharger)
console.log(hasil);

let ubahKeJs = (data = '') => JSON.parse(data)
let result = ubahKeJs(hasil)
console.log(result);
