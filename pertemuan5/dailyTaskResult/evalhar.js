// Fungsi pembungkus (Outer Function) yang menciptakan closure.
function pencatatanPengeluaran() {
    // Variabel lokal ini akan 'tertutup' (closed over) dan nilainya
    // akan tetap tersimpan antar pemanggilan fungsi yang dikembalikan.
    let totalPengeluaran = 0; 

    console.log("Sistem pencatatan pengeluaran baru telah dimulai.");

    // Mengembalikan fungsi dalam (Inner Function), yang merupakan closure-nya.
    // Fungsi ini yang akan dipanggil untuk mencatat pengeluaran.
    return function(jumlahPengeluaran, deskripsi = "Tanpa Deskripsi") {
        if (jumlahPengeluaran > 0) {
            // Memperbarui variabel 'totalPengeluaran' yang tersimpan di closure
            totalPengeluaran += jumlahPengeluaran;
            console.log(`\n✅ Pengeluaran baru dicatat: IDR ${jumlahPengeluaran}`);
            console.log(`   Keterangan: ${deskripsi}`);
            return `💰 Total Pengeluaran Kumulatif: IDR ${totalPengeluaran}`;
        } else {
            return `⚠️ Masukkan jumlah pengeluaran yang valid (lebih dari 0). Total saat ini: IDR ${totalPengeluaran}`;
        }
    };
}

// --- Penggunaan Closure ---

// 1. Membuat instance pencatat pengeluaran.
// 'catat' sekarang adalah fungsi closure yang mengingat 'totalPengeluaran'
const catat = pencatatanPengeluaran(); 

// 2. Mencatat pengeluaran pertama
console.log(catat(15000, "Makan siang")); 

// 3. Mencatat pengeluaran kedua
// Nilai 15.000 dari pemanggilan sebelumnya tetap diingat.
console.log(catat(5000, "Beli kopi")); 

// 4. Mencatat pengeluaran ketiga (dengan deskripsi default)
console.log(catat(25000)); 

// 5. Mencoba mencatat pengeluaran nol atau negatif
console.log(catat(-1000, "Pengembalian dana"));