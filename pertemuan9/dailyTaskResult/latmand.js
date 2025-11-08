// NOMER 1

let buku = {
    judul : "3726 mdpl",
    pengarang : "Nurwina Sari",
    tahunTerbit : 2024
}
// console.log(buku);

//NOMER 2
 
buku.penerbit = "Romancious (Elex Media Komputindo)" // menambah properti baru yaitu penerbit
// console.log(buku);

//NOMER 3

buku.tahunTerbit = 2023 // mengubah nilai properti yaitu tahun terbit menjadi 2023
// console.log(buku);

//NOMER 4

delete buku.pengarang // menghapus properti yaitu pengarang
console.log(buku);{
    
}

//NOMER 5

for (let key in buku) {
    console.log(`Pada Key => "${key}" Valuenya => "${buku[key]}"`);
    
}
