// --- 1. Ambil data produk (1 detik) ---
function ambilProduk() {
    console.log("1.  Mengambil data produk...");
    return new Promise(function(resolve) {
        setTimeout(() => resolve(100000), 1000); 
    });
}

// --- 2. Hitung total harga (1 detik) ---
function hitungTotal(harga) {
    console.log(`2.  Menghitung total harga (Harga Produk: ${harga})...`);
    return new Promise(function(resolve) {
        setTimeout(() => {
            const total = harga + 10000; 
            resolve(total); 
        }, 1000);
    });
}

// --- 3. Tampilkan hasilnya (Chaining) ---
ambilProduk()
  .then(hargaProduk => {
    return hitungTotal(hargaProduk);
  })
  .then(totalAkhir => {
   
    console.log("3.  Proses Selesai!");
    console.log("Total Belanja:", totalAkhir);
  });