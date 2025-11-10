let siswa = {
    nama: "Rina",
    usia: 17,
    kelas: "XII",
    jurusan: "IPA"
};
// NOMOR 1
let { nama, kelas } = siswa;
console.log(nama, kelas)

// NOMOR 2
let siswa2 = { ...siswa, nilai: 90 };
console.log(siswa2);

// NOMOR 3
let nilaiTerbaru = [90, 98, 89, 98, 85, 88,90,]
function hitungNilai(...nilaiTerbaru) {
    let total = nilaiTerbaru.reduce((a, b) => {
        return a + b
    });

    console.log(total);

    return total / nilaiTerbaru.length

}


console.log(hitungNilai(...nilaiTerbaru));


let nilaiSiswa = [90,80,98,88,87,97,85,92]
function hitungNilai2(...nilaiSiswa) {
    let total2 = nilaiSiswa.reduce((a, b) => {
        return a+b
    });

    console.log(total2)

    return total2 / nilaiSiswa.length
}
console.log(hitungNilai2(...nilaiSiswa));

