const transaksi = [
    { namaBarang: "Laptop Gaming", jumlah: 1, hargaSatuan: 12000000 },
    { namaBarang: "Mouse Wireless", jumlah: 5, hargaSatuan: 150000 },
    { namaBarang: "Keyboard Mekanik", jumlah: 2, hargaSatuan: 600000 },
    { namaBarang: "Monitor 24 inch", jumlah: 1, hargaSatuan: 2500000 },
    { namaBarang: "Webcam HD", jumlah: 4, hargaSatuan: 125000 },
    { namaBarang: "Speaker Bluetooth", jumlah: 3, hargaSatuan: 300000 }
];

// Menghitung dan memfilter barang
const barangMahal = transaksi
    .map(item => ({
        ...item, // Salin semua properti asli
        totalBelanja: item.jumlah * item.hargaSatuan // Tambahkan properti baru
    }))
    .filter(item => item.totalBelanja > 500000) // Filter yang total belanjanya > 500.000
    .map(item => ({
        namaBarang: item.namaBarang,
        total: item.totalBelanja.toLocaleString('id-ID') // Format mata uang untuk tampilan
    }));

console.log("=== Barang dengan Total Belanja di Atas Rp 500.000 ===");
console.log(barangMahal);


// Menghitung total seluruh belanja menggunakan reduce
const totalSemuaBelanja = transaksi.reduce((akumulator, item) => {
    const totalItem = item.jumlah * item.hargaSatuan;
    return akumulator + totalItem;
}, 0);  

const totalFormatted = totalSemuaBelanja.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR'
});

console.log("\n=== Total Keseluruhan Belanja ===");
console.log(`Rp ${totalFormatted}`);


// Membuat array baru menggunakan map
const ringkasanBelanja = transaksi.map(item => ({
    nama: item.namaBarang,
    total: item.jumlah * item.hargaSatuan
}));

console.log("\n=== Ringkasan Belanja (Nama Barang & Total) ===");
console.log(ringkasanBelanja);
