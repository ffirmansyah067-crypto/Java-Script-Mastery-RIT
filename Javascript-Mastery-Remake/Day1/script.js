const angka = [2,3,4,5,6];

const AngkaBaru = angka.map(v => v * 3);

console.log(AngkaBaru);

const kopi = ["kapal api", "abc", "liong"]

const addAwal = (k) => kopi.unshift(k)

const addAkhir = (l) => kopi.push(l)

console.log(kopi) 

addAwal('kopi baru')

addAkhir('americano')

console.log(kopi)

const angka1 = [1,2,3];
const angkaNew = angka1.map(v => v * 2);
console.log(angkaNew)



const angka2 = [1,2,3,4,5,6];
const genap = angka2.filter(v => v %2);
console.log(genap);
