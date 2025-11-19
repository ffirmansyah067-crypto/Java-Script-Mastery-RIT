

function sapaGue(nama, callback) {
    console.log("Hai " + nama) ;
    let a = callback();
}

function setelanNyapa () {
    console.log("Iya bang, sehat selalu") ;
} 

function setelanGue () {
    console.log("Keren lu bang")

}

function setelanTerkini () {
    console.log("Outfit lu kece juga")
}

sapaGue ("Manz", setelanTerkini);


//==================================>>>STUDYCASE


// Study Case LocalStorage 1 — Simpan Object User
const user = {
    nama: "Fanny" ,
    role: "Assassin" ,
    level: 15
};

localStorage.setItem("user", JSON.stringify(user));
const data = JSON.parse(localStorage.getItem("user"));
console.log(data.nama);

// Study Case LocalStorage 2 — Simpan Array
const tasks = ["bangun pagi", "gosok gigi", "cuci muka", "main lagi"];
localStorage.setItem("tasks", JSON.stringify(tasks));
const t = JSON.parse(localStorage.getItem("tasks"));
console.log(t);

// Study Case LocalStorage 3 — Push data baru ke array di LocalStorage
function tambahTask(task) {
  let data = JSON.parse(localStorage.getItem("tasks")) || [];
  data.push(task);
  localStorage.setItem("tasks", JSON.stringify(data));
  return data
}

tambahTask("ngoding");
console.log(tambahTask(data))

// Study Case LocalStorage 4 — Hapus item di array localStorage (pakai splice)
// let tasks = JSON.parse(localStorage.getItem("tasks"));
tasks.splice(1, 1);  // hapus index ke 1
localStorage.setItem("tasks", JSON.stringify(tasks));
console.log(tasks)

// Study Case LocalStorage 5 — Update item array
// let tasks = JSON.parse(localStorage.getItem("tasks"));
tasks[0] = "belajar memahami apapun dalam hidup";
localStorage.setItem("tasks", JSON.stringify(tasks));
console.log(tasks)

// Study Case LocalStorage 6 — Menyimpan Data Absensi
function absen(nama) {
  let absensi = JSON.parse(localStorage.getItem("absensi")) || [];
  absensi.push({
    nama,
    waktu: new Date().toISOString()
  });
  localStorage.setItem("absensi", JSON.stringify(absensi));

  console.log(nama)
}

absen("Fadhli");

// Study Case LocalStorage 7 — Filtering Data dari Penyimpanan
let absensi = JSON.parse(localStorage.getItem("absensi"));
let hariIni = absensi.filter(a => a.nama === "Fadhli");
console.log(hariIni);

// Study Case LocalStorage 8 — Mencari Data dengan find()
let absensi2 = JSON.parse(localStorage.getItem("absensi"));
let found = absensi2.find(a => a.nama === "Fadhli");
console.log(found)

// Study Case LocalStorage 9 — Reduce untuk total pertemuan
let absensi3 = JSON.parse(localStorage.getItem("absensi"));

let total = absensi.reduce((acc, curr) => {
  acc[curr.nama] = (acc[curr.nama] || 0) + 1;
  return acc;
}, {});

console.log(total);

// Study Case LocalStorage 10 — Penggunaan di Aplikasi Mini To-Do
function tambahAbsensi(nama, callback) {
  const absensi = JSON.parse(localStorage.getItem("absensi")) || [];
  const data = {
    id: absensi.length + 1,
    nama,
    waktu: new Date().toLocaleString()
  };

  callback(absensi, data);
}

function simpan(absensi, dataBaru) {
  absensi.push(dataBaru);
  localStorage.setItem("absensi", JSON.stringify(absensi));
  console.log("Absensi masuk:", dataBaru);
}

tambahAbsensi("Ikhya", simpan);