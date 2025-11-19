//=====================>NOMOR 1
// Callback adalah fungsi yang dikirim sebagai argumen ke fungsi lain
// Contoh
function sapaUser(nama, callback) {
    console.log("1. Hai "+ nama)
    callback();
}
function setelanSapa() {
    console.log("Outfit lu keren juga!")
}
sapaUser("Manz" , setelanSapa)


//=====================>NOMOR 2
function sapaUser2(callback) {
    console.log("2. Halo Santri!")
    callback
}
sapaUser2(sapaUser2)


//=====================>NOMOR 3
function angka1(callback) {
    console.log("3. angka", 1)
    console.log("angka", 2)
    callback
}
angka1(angka1)


//=====================>NOMOR 4
// Kita harus menggunakan JSON.stringify() saat menyimpan data ke localStorage karena localStorage hanya dapat menyimpan data dalam bentuk string (teks).


//=====================>NOMOR 5
localStorage.setItem("Belajar JS", JSON.stringify)
const Study =  "Belajar JS"
const hasil = JSON.stringify(Study);

console.log("5.", hasil)


//=====================>NOMOR 6
const Study2 = JSON.stringify(localStorage.getItem("Belajar JS")) || [];
const hasil2 = JSON.stringify(Study);

console.log("6.", hasil2)


//=====================>NOMOR 7
const Array = [1,2,3];
const jsonString = JSON.stringify(Array)
localStorage.setItem("todoList", jsonString);

console.log("7. Array 123 berhasil disimpan sebagai string di localStorage.");


//=====================>NOMOR 8
const dataString = localStorage.getItem("todoList")
const arrayYangDiupload = JSON.parse(dataString);

console.log("8.", arrayYangDiupload);


//=====================>NOMOR 9
// JSON (JavaScript Object Notation) adalah format pertukaran data yang ringan dan mudah dibaca oleh manusia serta mudah diurai oleh mesin. 


//=====================>NOMOR 10
const Santri = {
    nama: "Mark",
    kelas: 12,
    nilai: 100
}
const dataSantri = JSON.stringify(Santri)
localStorage.setItem("todoList", dataSantri)

console.log("10. Mark kelas 12 dengan nilai 100 berhasil disimpan sebagai string di localStorage");
