// EVALUASI HARIAN


const tagDiv96 = document.getElementById ('tagDiv96')

const produkArray = [
    { nama: "keyboard", harga: 300000 },
    { nama: "mouse", harga: 150000 } 
];

const jsonString = JSON.stringify(produkArray);

localStorage.setItem("produk", jsonString);

const dataTersimpan = localStorage.getItem("produk");
const objekDiperoleh = JSON.stringify(dataTersimpan);

console.log("Data yang tersimpan di localStorage:");
console.log(dataTersimpan);
// Output: [ { nama: 'keyboard', harga: 300000 }, { nama: 'mouse', harga: 150000 } ]

tagDiv96.innerHTML =  `<h2> ${dataTersimpan} </h2>`
