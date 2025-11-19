const janji = new Promise(function(resolve, reject){
    let jika = false
    setTimeout(() =>{
        if (jika) {
            resolve('OK')
        } else {
            reject('Error')
        }
    }, 4000)
})

console.log(janji)

const loading = new Promise((resolve, reject) => {
    let kalau = false
    setTimeout(() =>{
        if (kalau) {
            resolve('Berhasil')
        } else {
            reject ('Gagal')
        }
    }, 2000)
})

janji
.then((hasilJanji)=>{
    console.log(`ini then ${hasilJanji}`);
})
.then(()=>{
    console.log(`ini then 2`);
})
.catch ((alasanDitolak)=>{
    console.log(`gagal ${alasanDitolak}`)
})
console.log(janji)



function proses1() {
    return new Promise(function(resolve){
        setTimeout(() => resolve("Langkah 1"), 1000);
    });
}
function proses2(data) {
    return new Promise (function(resolve){
        setTimeout(() => resolve(data + " Langkah 2"), 1000);
    });
}
proses1 () 
.then (proses2)
.then (function(hasilAkhir){
console.log("Hasil:" , hasilAkhir)
});


function pilihKursi (kodeFilm) {
    console.log("Langkah 1 : Mencari kursi tersedia")
    return new Promise (resolve => {
        setTimeout(() => {
            const kursiTerpilih = "E5 dan E6";
            resolve(kursiTerpilih); 
        }, 1500);
    })
}

function hitungHarga(kursi) {
    console.log(`Langkah 2 : Menghitung harga untuk kursi ${kursi}`)
    return new Promise (resolve =>{
        setTimeout(()=> {
            const totalHarga = "Rp 120.000";
            resolve({ kursi: kursi, harga: totalHarga }); 
        }, 1000);
        
    })
}

pilihKursi('Avatar-2')
.then(kursiTerpilih =>hitungHarga(kursiTerpilih))
.then(detailPembayaran =>{
    console.log("\n Langkah 3 (Selesai): Tampilkan Detail Pembayaran.");
    console.log(`   Kursi Terkunci: ${detailPembayaran.kursi}`);
    console.log(`   Total Pembayaran: ${detailPembayaran.harga}`);
    console.log("   Silakan lanjutkan ke proses pembayaran.");

})