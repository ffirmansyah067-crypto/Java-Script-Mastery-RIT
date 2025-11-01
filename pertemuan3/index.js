// STRUKTUR PERCABANGAN IF ELSE
function login(){ // Buat fungsi login

    let email = prompt("Masukan Email"); // Minta user memasukan email dan simpan di variabel email
    let pw = prompt("Masukan Password"); // Minta user memasukan password dan simpan di variabel pw

    if(!email || !pw) {
        alert("Email atau Password Belom Di isi"); //Jika email atau password kosong: Tampilkan peringatan ("Email atau Password Belom Di isi").
        console.log("Login Gagal"); 
    } else if(email == "saya@email.com" && pw == "112233445566") { //Kalau Tidak, Jika email dan password cocok: Tampilkan "Login Berhasil". 
        console.log("Login Berhasil");
    } else {
        alert("Email Atau Password anda salah"); // Kalau Tidak (sudah diisi tapi tidak cocok): Tampilkan peringatan ("Email Atau Password anda salah"). 
        console.log("Login Gagal");
    }

     
    
}
function cekAksesPengguna() { // Buat fungsi cekAksesPengguna
    let statusPengguna = prompt("Apa Status Pengguna Anda") // Minta user memasukan status pengguna dan simpan di variabel statusPengguna
    let levelAkses = prompt("Apa Level akses Anda") // Minta user memasukan level akses dan simpan di variabel levelAkses

    if (statusPengguna === 'aktif') { // Jika statusPengguna adalah 'aktif'
        console.log("Pengguna aktif terdeteksi"); // Tampilkan "Pengguna aktif terdeteksi"
        if (levelAkses === 'admin') { // Jika levelAkses adalah 'admin'
            console.log("Akses diberikan: Admin memiliki semua hak akses"); // Tampilkan "Akses diberikan: Admin memiliki semua hak akses"
        } else if (levelAkses === 'moderator') { // Jika levelAkses adalah 'moderator'
            console.log("Akses diberikan: Moderator memiliki akses terbatas"); // Tampilkan "Akses diberikan: Moderator memiliki akses terbatas"
        } else {
            console.log("Akses diberikan: Pengguna biasa dengan akses standar"); // Tampilkan "Akses diberikan: Pengguna biasa dengan akses standar"
        }
    } else if (statusPengguna === 'nonaktif') { // Jika statusPengguna adalah 'nonaktif'
        console.log("Pengguna tidak aktif, akses dibatasi"); // Tampilkan "Pengguna tidak aktif, akses dibatasi"
        if (levelAkses === 'admin') { // Jika levelAkses adalah 'admin'
            console.log("Namun Admin masih bisa mengakses data"); // Tampilkan "Namun Admin masih bisa mengakses data"
        } else if (levelAkses === 'moderator') { // Jika levelAkses adalah 'moderator'
            console.log("Moderator tidak bisa mengakses data"); // Tampilkan "Moderator tidak bisa mengakses data"
        } else {
            console.log("Pengguna biasa tidak bisa mengakses data"); // Tampilkan "Pengguna biasa tidak bisa mengakses data"
        }
    } else if (statusPengguna === 'banned') { // Jika statusPengguna adalah 'banned'
        console.log("Pengguna diblokir"); // Tampilkan "Pengguna diblokir"
        if (levelAkses === 'admin') { // Jika levelAkses adalah 'admin'
            console.log("Admin juga tidak bisa mengakses"); // Tampilkan "Admin juga tidak bisa mengakses"
        } else if (levelAkses === 'moderator') { // Jika levelAkses adalah 'moderator'
            console.log("Moderator tidak bisa mengakses"); // Tampilkan "Moderator tidak bisa mengakses"
        } else {
            console.log("Pengguna biasa sangat dibatasi"); // Tampilkan "Pengguna biasa sangat dibatasi"
        }
    } else {
        console.log("Status pengguna tidak dikenali, akses ditolak"); // Tampilkan "Status pengguna tidak dikenali, akses ditolak"
    }
}

// Contoh pemanggilan fungsi
// cekAksesPengguna('aktif', 'admin');
// cekAksesPengguna('nonaktif', 'moderator');
// cekAksesPengguna('banned', 'user');
// cekAksesPengguna('guest', 'user');

function listMenu() { // Buat fungsi listMenu
    
    if( confirm("Anda mau makan ?")) { // Tampilkan konfirmasi "Anda mau makan ?"
        let menu = prompt('Menu Nomer Berapa anda Pilih ? \n Pilih Menu di Bawah ini: \n 1. Mie Ayam : Rp15.000 \n 2. Bakso : Rp.10.000 \n 3. Soto : Rp5.000') // Jika user menekan "OK", minta user memasukan nomor menu dan simpan di variabel menu

        switch (menu) { // Gunakan struktur switch untuk memeriksa nilai menu
            case "1": 
                console.log("Anda Pilih Mie Ayam : Rp15.000"); // Jika menu adalah "1", tampilkan "Anda Pilih Mie Ayam : Rp15.000"
                break;
            case "2":
                console.log("Anda Pilih Bakso : Rp.10.000"); // Jika menu adalah "2", tampilkan "Anda Pilih Bakso : Rp.10.000"
                break;
            case "3":
                console.log("Anda Pilih Soto : Rp5.000"); // Jika menu adalah "3", tampilkan "Anda Pilih Soto : Rp5.000"
                break;
            default: // Jika menu bukan "1", "2", atau "3"
                console.log("Menu Tidak Tersedia"); // Jika menu bukan "1", "2", atau "3", tampilkan "Menu Tidak Tersedia"
                break; // Akhiri struktur switch
        }
    }
}
function listIstri (){ // Buat fungsi listIstri
    let istri = prompt("Hari ini kamu mau sama siapa? \n Pilih istri dibawah ini: \n 1. Ayaka \n 2. Yae Miko \n 3. Raiden Shogun") // Minta user memasukan nama istri dan simpan di variabel istri

    switch (istri) { // Gunakan struktur switch untuk memeriksa nilai istri
        case "Ayaka":
            console.log("Istri Anda Bernama Ayaka");
                window.location.href = "https://www.example.com/halaman-baru";
             // jika istri adalah Ayaka, tampilkan "Istri Anda Bernama Ayaka"
            break;
        case "Yae Miko":
            console.log("Istri Anda Bernama Yae Miko"); // Jika istri adalah Yae Miko, tampilkan "Istri Anda Bernama Yae Miko"
            break;
        case "Raiden Shogun":
            console.log("Istri Anda Bernama Raiden Shogun"); // Jika istri adalah Raiden Shogun, tampilkan "Istri Anda Bernama Raiden Shogun"
            break;
        default: // Jika istri bukan "Ayaka", "Yae Miko", atau "Raiden Shogun"
            console.log("Istri Anda Tidak Dikenal"); // Jika istri bukan "Ayaka", "Yae Miko", atau "Raiden Shogun", tampilkan "Istri Anda Tidak Dikenal"
            break; // Akhiri struktur switch
    }
}
/**
 * Fungsi untuk merekomendasikan genre musik berdasarkan suasana hati (mood).
 */
function rekomendasiMusik() {
    // Meminta input dari pengguna tentang suasana hati mereka
    let mood = prompt("Bagaimana suasana hati Anda saat ini? (contoh: senang, sedih, santai, energik)").toLowerCase();

    // --- Struktur Percabangan IF ELSE IF ELSE ---

    if (mood === "senang" || mood === "energik") {
        // Blok IF pertama: Diperiksa jika mood adalah "senang" ATAU "energik"
        console.log(`🎶 Mood Anda ${mood}! Saya rekomendasikan musik **Pop Ceria** atau **EDM** untuk meningkatkan semangat!`);
    } else if (mood === "sedih" || mood === "galau") {
        // Blok ELSE IF pertama: Diperiksa jika kondisi IF sebelumnya salah, dan mood adalah "sedih" ATAU "galau"
        console.log(`😔 Mood Anda ${mood}. Dengarkan **Musik Klasik** atau **Ballad Akustik** yang menenangkan.`);
    } else if (mood === "santai" || mood === "tenang") {
        // Blok ELSE IF kedua: Diperiksa jika semua kondisi ELSE IF sebelumnya salah, dan mood adalah "santai" ATAU "tenang"
        console.log(`🧘 Mood ${mood} cocok dengan **Jazz Instrumental** atau **Lo-Fi** untuk relaksasi.`);
    } else {
        // Blok ELSE (Jalur default): Dijalankan jika semua kondisi IF dan ELSE IF di atas salah
        console.log("🤔 Suasana hati tidak dikenal. Coba dengarkan **musik pilihan editor** di playlist acak!");
    }
}

function rekomendasiMusik() {
    // Meminta input dari pengguna tentang suasana hati mereka
    let mood = prompt("Bagaimana suasana hati Anda saat ini? (contoh: senang, sedih, santai, energik)").toLowerCase();

    // --- Struktur Percabangan IF ELSE IF ELSE ---

    if (mood === "senang" || mood === "energik") {
        // Blok IF pertama: Diperiksa jika mood adalah "senang" ATAU "energik"
        console.log(`🎶 Mood Anda ${mood}! Saya rekomendasikan musik **Pop Ceria** atau **EDM** untuk meningkatkan semangat!`);
    } else if (mood === "sedih" || mood === "galau") {
        // Blok ELSE IF pertama: Diperiksa jika kondisi IF sebelumnya salah, dan mood adalah "sedih" ATAU "galau"
        console.log(`😔 Mood Anda ${mood}. Dengarkan **Musik Klasik** atau **Ballad Akustik** yang menenangkan.`);
    } else if (mood === "santai" || mood === "tenang") {
        // Blok ELSE IF kedua: Diperiksa jika semua kondisi ELSE IF sebelumnya salah, dan mood adalah "santai" ATAU "tenang"
        console.log(`🧘 Mood ${mood} cocok dengan **Jazz Instrumental** atau **Lo-Fi** untuk relaksasi.`);
    } else {
        // Blok ELSE (Jalur default): Dijalankan jika semua kondisi IF dan ELSE IF di atas salah
        console.log("🤔 Suasana hati tidak dikenal. Coba dengarkan **musik pilihan editor** di playlist acak!");
    }
}

// perulangan (looping)
/**
 * Contoh Penggunaan Berbagai Jenis Perulangan (Loop) di JavaScript
 */

// --- 1. Perulangan FOR (Ketika Anda Tahu Jumlah Putaran) ---
console.log("=== 1. Perulangan FOR ===");

// Menghitung putaran dari 1 hingga 3
for (let i = 1; i <= 3; i++) {
    console.log(`Perulangan FOR ke-${i}.`);
}

console.log("Perulangan FOR selesai.\n");


// --- 2. Perulangan WHILE (Ketika Anda Belum Tahu Kapan Berakhir) ---
console.log("=== 2. Perulangan WHILE ===");

let stokBarang = 5;

while (stokBarang > 0) {
    // Selama stokBarang lebih dari 0, kode ini akan berjalan
    console.log(`Stok tersisa: ${stokBarang}. Satu barang terjual.`);
    stokBarang--; // Mengurangi stokBarang (PENTING! Agar loop bisa berhenti)
}

console.log("Perulangan WHILE selesai. Stok habis.\n");


// --- 3. Perulangan DO...WHILE (Menjamin Eksekusi Minimal 1 Kali) ---
console.log("=== 3. Perulangan DO...WHILE ===");

let nilaiAcak = 10; // Kondisi awal sudah GAGAL (10 tidak kurang dari 5)

do {
    // Blok DO ini akan tetap dijalankan sekali, meskipun kondisinya (nilaiAcak < 5) SALAH.
    console.log(`Nilai Acak saat ini: ${nilaiAcak}. Kode ini dieksekusi minimal satu kali.`);
    nilaiAcak++;
} while (nilaiAcak < 5);

console.log("Perulangan DO...WHILE selesai. Kondisi tidak terpenuhi.\n");