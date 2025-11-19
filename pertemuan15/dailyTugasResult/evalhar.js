/**
 * 1. Fungsi Callback: Mengirim Notifikasi
 * Fungsi ini akan dipanggil setelah proses registrasi selesai.
 */
function sendNotification(email, username) {
  console.log("--- Notifikasi ---");
  console.log(`✉️ Kepada: ${email}`);
  console.log(`Isi: Selamat datang, ${username}! Registrasi Anda telah berhasil.`);
  console.log("------------------");
}

/**
 * 2. Fungsi Utama: Registrasi User
 * Menerima data user dan callback.
 */
function registerUser(username, email, callback) {
  console.log(`⏳ Memulai proses registrasi untuk user: ${username}...`);

  // Mensimulasikan penyimpanan data ke database yang membutuhkan waktu (misalnya 2 detik)
  setTimeout(() => {
    
    // Asumsi: Proses penyimpanan ke database berhasil
    const userId = Math.floor(Math.random() * 1000) + 1; // ID User random
    console.log(`✅ User berhasil disimpan dengan User ID: ${userId}`);

    // Setelah berhasil disimpan, panggil CALLBACK untuk mengirim notifikasi
    // Kita meneruskan email dan username ke fungsi callback
    callback(email, username); 

  }, 2000); // Delay 2 detik
}

// --- EKSEKUSI SIMULASI ---
const usernameBaru = "fadhli_dev";
const emailBaru = "fadhli@example.com";

// Panggil fungsi registrasi dan berikan sendNotification sebagai callback
registerUser(usernameBaru, emailBaru, sendNotification);

console.log("Program utama berjalan tanpa menunggu database selesai."); 
// Baris ini akan dicetak INSTAN, menunjukkan bahwa registerUser adalah operasi ASINKRON.