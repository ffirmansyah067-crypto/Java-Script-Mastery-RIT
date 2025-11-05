// NOMER1

// Deklarasi variabel di scope global (di luar fungsi manapun)
const NAMA_APLIKASI = "Manajemen Saldo Digital";
let saldoKhas = 50000; 

function tampilkanSaldo() {
    // Fungsi ini dapat mengakses dan menggunakan variabel global
    console.log(`--- Laporan Saldo ---`);
    console.log(`Aplikasi: ${NAMA_APLIKASI}`);
    console.log(`Saldo Khas Saat Ini (Global): ${saldoKhas}`);

    // Kita juga bisa memodifikasi variabel global dari dalam fungsi
    saldoKhas = saldoKhas + 10000;
    console.log("Saldo telah ditambahkan 10.000 dari dalam fungsi.");
    console.log(`Saldo Khas Terbaru: ${saldoKhas}`);
}

// Panggil fungsi
tampilkanSaldo(); 

// Variabel global dapat diakses di luar fungsi setelah modifikasi
console.log(`\nSaldo Khas Global setelah fungsi selesai: ${saldoKhas}`);


// NOMER2
console.log("--- Uji Coba Hoisting ---");

// 1. Uji Coba dengan 'var'
console.log(`Nilai 'varA' sebelum deklarasi: ${varA}`); // Output: undefined
var varA = "Nilai VAR";
console.log(`Nilai 'varA' setelah deklarasi: ${varA}`); // Output: Nilai VAR

// 2. Uji Coba dengan 'let'
try {
    console.log(`Nilai 'letB' sebelum deklarasi: ${letB}`); 
} catch (error) {
    // Output: ReferenceError: Cannot access 'letB' before initialization
    console.log(`Nilai 'letB' sebelum deklarasi: ERROR! (${error.name}: Tidak dapat diakses sebelum inisialisasi/TDZ)`);
}
let letB = "Nilai LET";
console.log(`Nilai 'letB' setelah deklarasi: ${letB}`); // Output: Nilai LET

// 3. Uji Coba dengan 'const'
try {
    console.log(`Nilai 'constC' sebelum deklarasi: ${constC}`);
} catch (error) {
    // Output: ReferenceError: Cannot access 'constC' before initialization
    console.log(`Nilai 'constC' sebelum deklarasi: ERROR! (${error.name}: Tidak dapat diakses sebelum inisialisasi/TDZ)`);
}
const constC = "Nilai CONST";
console.log(`Nilai 'constC' setelah deklarasi: ${constC}`); // Output: Nilai CONST

//NOMER3 
// Fungsi pembungkus (Outer Function) yang membuat closure
function kelolaSaldo(saldoAwal) {
    // Variabel lokal yang 'tertutup' (closed over) oleh inner function.
    // Variabel ini akan menyimpan nilai saldo saat ini.
    let saldoSaatIni = saldoAwal; 

    console.log(`Saldo awal berhasil dibuat: ${saldoSaatIni}`);

    // Mengembalikan fungsi dalam (Inner Function), ini adalah closure-nya.
    // Fungsi ini dapat mengakses dan memodifikasi saldoSaatIni.
    return function(tambahan) {
        if (tambahan > 0) {
            saldoSaatIni += tambahan;
            return `Saldo baru berhasil ditambahkan ${tambahan}. Saldo total: ${saldoSaatIni}`;
        } else {
            return `Saldo saat ini: ${saldoSaatIni}`;
        }
    };
}

// --- Penggunaan Closure ---

// 1. Membuat instance closure pertama (memiliki memori saldo tersendiri)
const dompetA = kelolaSaldo(100000); 

// Cek saldo awal dompet A
console.log(dompetA(0)); 

// Menambahkan saldo baru ke dompet A
console.log(dompetA(50000)); 

// Menambahkan saldo lagi ke dompet A
console.log(dompetA(25000)); 

// 2. Membuat instance closure kedua (memiliki memori saldo yang terpisah)
console.log("\n--- Instance Kedua ---");
const dompetB = kelolaSaldo(5000); 

// Menambahkan saldo ke dompet B
console.log(dompetB(1500)); 
console.log(dompetB(0)); 

// Memastikan dompet A tetap tidak terpengaruh
console.log("\n--- Memastikan Dompet A Tidak Terpengaruh ---");
console.log(dompetA(0));


