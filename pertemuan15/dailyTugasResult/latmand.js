// NOMOR 1

function prosesData(data, callback){
    console.log(data)
    callback
}

// NOMOR 2

console.log("1. Mulai");
setTimeout(function delay(){
    console.log("2. Ini dari callback setelah 3 detik")
}, 3000);
console.log("3. Proses selesai")

// NOMOR 3

function cetakAngka(callbackSelesai){
    console.log("Memulai mencetak angka...")
    const angka =[1,2,3,4,5];
    angka.forEach((num, index) => {
    
    setTimeout(() => {
      console.log(`Angka: ${num}`);

      if (index === angka.length - 1) {
        
        callbackSelesai();
      }
    }, (index + 1) * 1000); 
  });
}

function pesanSelesai() {
  console.log("Selesai mencetak");
}

cetakAngka(pesanSelesai);
