/**
 * Fungsi untuk menerima nilai dari pengguna, menentukan grade, 
 * dan menampilkan hasilnya dalam format popup (alert).
 */
function sistemPenilaianOtomatis() {
    // 1. Menerima input nilai dari pengguna
    let inputNilai = prompt("Masukkan nilai siswa (angka):");
    
    // Periksa jika pengguna membatalkan atau tidak mengisi input
    if (inputNilai === null || inputNilai.trim() === "") {
        alert("Proses dibatalkan.");
        return; 
    }

    // Mengubah string input menjadi angka (integer)
    let nilai = parseInt(inputNilai); 

    // Periksa apakah input benar-benar angka
    if (isNaN(nilai)) {
        alert("Input tidak valid. Harap masukkan angka.");
        return;
    }

    let grade;
    let deskripsi;
    
    // --- 2. Logika Penentuan Grade Menggunakan IF ELSE IF ELSE ---
    
    if (nilai >= 90) {
        grade = "A";
        deskripsi = "Sangat Baik";
    } else if (nilai >= 80) {
        grade = "B";
        deskripsi = "Bagus";
    } else if (nilai >= 70) {
        grade = "C";
        deskripsi = "Cukup";
    } else if (nilai >= 60) {
        grade = "D";
        deskripsi = "Kurang";
    } else {
        // Nilai kurang dari 60
        grade = "E";
        deskripsi = "Sangat Kurang";
    }

    // --- 3. Menampilkan Hasil ---
    
    const hasil = `Nilai kamu: ${grade} (${deskripsi})`;
    
    // Tampilkan hasil sebagai popup
    alert(hasil);
    
    // Tampilkan juga di console untuk debugging/pencatatan
    console.log(`Nilai Siswa: ${nilai}`);
    console.log(hasil);
}

// Panggil fungsi untuk menjalankan sistem penilaian
sistemPenilaianOtomatis();