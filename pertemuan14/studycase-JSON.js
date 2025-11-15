// EASY MODE


// 1

const user = { name: "Amin", age: 17 };
const json = JSON.stringify(user);
console.log(1, json); // {"name":"Amin","age":17}

// 2

const json1 = '{"name":"Amin","age":17}';
const user1 = JSON.parse(json);
console.log(2, user1); // {name: 'Amin', age: 17}

// 3

JSON.stringify([1,2,3,4]);
const json2 = JSON.stringify([1,2,3,4]);
console.log(3, json2); // '[1,2,3,4]'

// 4

const siswa = [
  { nama: "Ali" },
  { nama: "Budi" }
];

JSON.stringify(siswa);
const jsonString = JSON.stringify(siswa);
console.log(4, jsonString) // [{"nama":"Ali"},{"nama":"Budi"}]'

// 5

const data = JSON.parse('{"USA":1, "RUSSIA":2}');
console.log(5, data.USA); // 1


// 6


const dataGagal = '{"id": 102, "status": "gagal"}'; 


try {
  const objekBaru = JSON.parse(dataGagal);

  let a = objekBaru

  console.log(a); 

} catch (error) {
  
  console.log();
  
}


// 7

localStorage.setItem("score", JSON.stringify({ level: 3, point:120 }));
const score = {
    level: 3,
    point: 120
}
const hasil = JSON.stringify(score);
console.log(hasil)


// 8

const score1 = JSON.parse(localStorage.getItem("score"));

console.log("Objek skor yang dimuat:", score);


// 9

const user3 = {
  nama: "Rina",
  hobi: ["Membaca", "Menulis"],
  alamat: {
    kota: "Bandung",
    kodepos: 40000
  }
};
JSON.stringify(user3, null, 2);

// 10

