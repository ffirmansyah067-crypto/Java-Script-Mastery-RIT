//  NOMOR 1

let biodata = {nama: "Firman", umur: 20, alamat: "Depok"}
const json = JSON.stringify(biodata)
console.log(1, json) // {"nama":"Firman","umur":20,"alamat":"Depok"}

// NOMOR 2 

localStorage.setItem("biodata", JSON.stringify({nama:"Firman", umur: 20, alamat: "Depok"}))
const jsonString = '{"nama":"Firman","umur":20,"alamat":"Depok"}' ;
const biodataObj = JSON.parse(jsonString) ;
console.log(2, biodataObj.nama, biodataObj.umur, biodataObj.alamat) // Firman 20 Depok

// NOMOR 3

