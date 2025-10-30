//<--FUNCTION SAYHELLO-->//

function sayHello() {
    console.time("f1");
    console.info('Info Time Terkini dari F1 >>');
    console.timeLog("f1");
    alert('Hello Selamat Datang');
    let nama = prompt("Nama Siapa?");
    confirm(nama + " Klik Button ")
    console.log(nama + " Telah Klik Button");
    console.count("submited"); 
    console.timeEnd("f1");
}
//-->PENGUKUR WAKTU (DEBUGGING)
// console.time("f1"): Memulai timer dengan label "f1" untuk mengukur berapa lama waktu yang dibutuhkan fungsi ini untuk selesai.
// console.info(...): Menampilkan pesan informasi di konsol.
// console.timeLog("f1"): Mencatat waktu yang telah berlalu sejak timer "f1" dimulai hingga saat ini (sementara fungsi berjalan).
//-->INTERAKSI DENGAN PENGGUNA
// alert('Hello Selamat Datang'): Menampilkan kotak dialog peringatan sederhana.
// let nama = prompt("Nama Siapa?"): Menampilkan kotak dialog input yang meminta pengguna memasukkan nama, dan menyimpannya dalam variabel nama.
// confirm(nama + " Klik Button "): Menampilkan kotak dialog konfirmasi (dengan tombol OK/Batal) untuk meminta pengguna mengklik tombol.
//-->PENCATATAN DAN PENGHITUNGAN (DEBUGGING)
// console.log(...): Menampilkan nama yang dimasukkan pengguna di konsol.
// console.count("submited"): Menghitung dan mencatat berapa kali kode pada baris ini dieksekusi (setiap kali fungsi dipanggil, hitungan akan bertambah).
// console.timeEnd("f1"): Menghentikan timer "f1" dan menampilkan total waktu yang dibutuhkan fungsi untuk selesai.
//-->FUNCTION SAYHELLO<--//

//<--FUNCTIONCOUNT-->//
function resetCount() {
    console.countReset("submited");
    alert("Button Submitted Ke reset");
    console.info("Button Reset Berhasil");
    
}
//-->MENGATUR ULANG PENGHITUNG
// console.countReset("submited"): Perintah ini mengatur ulang (me-reset) nilai hitungan dari penghitung bernama "submited" kembali ke 0.
//-->NOTIFIKASI PENGGUNA
// alert("Button Submitted Ke reset"): Menampilkan kotak dialog peringatan kepada pengguna di browser.
//-->PENCATATAN STATUS (DEBUGGING)
// console.info("Button Reset Berhasil"): Menampilkan pesan informasi di Konsol Developer (browser).
//-->FUNCTIONCOUNT<--//


//-->TAMPILAN KONSOL<--//
console.warn("Ini Contoh Warning");
console.error("Ini Contoh Error");
// console.warn() adalah pengingat bahwa ada sesuatu yang perlu diperbaiki atau dioptimalkan, namun kode masih berjalan.
// console.error() adalah sinyal bahaya merah yang menunjukkan bahwa sesuatu telah rusak atau gagal secara signifikan.
//<--TAMPILAN KONSOL-->//

//-->OBJEK STRUKTUR DATA<--//
let userData = [
    { userId: "user123", loginStatus: "active", lastLogin: "2024-03-20" },
    { userId: "user456", loginStatus: "inactive", lastLogin: "2024-03-15" },
    { userId: "user45678", loginStatus: "inactive 001", lastLogin: "2024-03-15" },
];
// userData	Array []	Struktur utama yang menampung semua data pengguna.
// Objek {}	Objek	Setiap objek di dalam array mewakili satu entitas/pengguna.
// userId	String	ID unik pengguna (Contoh: "user123").
// loginStatus	String	Status login pengguna (aktif, tidak aktif, atau status kustom lain).
// lastLogin	String	Tanggal terakhir kali pengguna login (dalam format YYYY-MM-DD).
//-->OBJEK STRUKTUR DATA<--//


//-->FUNGSI KONSOL<--//
console.group('API Response Debug');
console.table(userData);
console.log('Status Code:', "Successfull");
console.log('Response Time:', "Successfull");
console.log('Payload Size:', "Successfull");
console.groupEnd();
// console.group('API Response Debug'): Memulai grup konsol baru yang dapat dilipat (collapsible).
// console.table(userData) : Menampilkan data array objek (userData) dalam format tabel yang mudah dibaca dengan kolom yang diberi label secara otomatis (userId, loginStatus, lastLogin).
// console.log('Status Code:', "Successfull") : Mencatat detail tertentu, dalam hal ini Status Code, sebagai pesan log standar.
// console.log('Response Time:', "Successfull") : Mencatat detail lain, yaitu Response Time, sebagai pesan log standar.
// console.log('Payload Size:', "Successfull") : Mencatat detail lain, yaitu Payload Size, sebagai pesan log standar.
// console.groupEnd() : Mengakhiri grup konsol yang dibuka oleh console.group(). Output konsol berikutnya akan kembali ke tingkat indentasi normal.
//-->FUNGSI KONSOL<--//


