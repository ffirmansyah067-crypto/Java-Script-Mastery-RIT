// NOMOR 1
let totalHarga = {
    harga: 10000,
    qty: 3,
    pajakPct: 11,
    diskonPct: 10,
};
function hitungTotal(data) {
    // 1. Kalikan (harga × qty) untuk mendapatkan Subtotal Awal
    let subtotalAwal = data.harga * data.qty;
    console.log(`1. Subtotal Awal (10000 x 3): ${subtotalAwal}`);

    // 2. Kurangi diskon%
    const diskon = subtotalAwal * (data.diskonPct / 100);
    let setelahDiskon = subtotalAwal - diskon;
    console.log(`2. Nilai Diskon (10% dari 30000): ${diskon}`);
    console.log(`   Subtotal Setelah Diskon: ${setelahDiskon}`);

    // 3. Tambah pajak%
    const pajak = setelahDiskon * (data.pajakPct / 100);
    let total = setelahDiskon + pajak;
    console.log(`3. Nilai Pajak (5% dari 27000): ${pajak}`);
    console.log(`   Total (Sebelum Pembulatan): ${total}`);

    // 4. Hasil akhir (dibulatkan wajar).
    let hasilAkhir = Math.round(total);
    console.log(`4. Hasil Akhir (Dibulatkan): ${hasilAkhir}`);

    // return total
    return hasilAkhir;
}

// Eksekusi fungsi dan tampilkan hasilnya
const totalPembayaran = hitungTotal(totalHarga);

console.log(`TOTAL YANG HARUS DIBAYAR: ${totalPembayaran}`);

// NOMOR 2

let nilai= [95,85,75,65,55]
let nilaiArray = [95, 85, 75, 65, 55];
let hasilAkhir = []; 

for (let nilai of nilaiArray) {
    let grade;
    let deskripsi;

    if (nilai >= 95) {
        grade = "A";
        deskripsi = "Untuk nilai 90-100";
    } else if (nilai >= 85) {
        grade = "B";
        deskripsi = "Untuk nilai 80-89";
    } else if (nilai >= 75) {
        grade = "C";
        deskripsi = "Untuk nilai 70-79";
    } else if (nilai >= 65) {
        grade = "D";
        deskripsi = "Untuk nilai 60-69";
    } else {
        // Nilai kurang dari 60
        grade = "E";
        deskripsi = "Untuk nilai 1-59";
    }

    // Gabungkan hasilnya ke dalam objek dan masukkan ke array hasilAkhir
    hasilAkhir.push({
        nilai: nilai,
        grade: grade,
        keterangan: deskripsi
    });
}

console.log(hasilAkhir);
// console.table(hasilAkhir); 


// NOMOR 3
function kategoriSwitch(kode) {
  let kategori;

  switch (kode) {
    case "S":
      kategori = "Santri";
      break;
    case "M":
      kategori = "Mentor";
      break;
    case "A":
      kategori = "Admin";
      break;
    default:
      kategori = "Tamu";
      break;
  }

  return kategori;
}
console.log(kategoriSwitch("S")); 
console.log(kategoriSwitch("M")); 
console.log(kategoriSwitch("A")); 
console.log(kategoriSwitch("X")); 
console.log(kategoriSwitch("1")); 

// NOMOR 4
let angka = [1,2,3,4,5,6]
let angkaGenap = [2,4,6]
function jumlahGenap(...angkaGenap){
    let total = angkaGenap.reduce((a, b) => {
        return a+b
    });

    console.log(total)
    return total / angka.length

}
console.log(jumlahGenap(...angkaGenap));


// NOMOR 5
for (let i = 1; i <= 20; i++) {
    console.log(`${i}`);
}


// NOMOR 6
function luasPersegiPanjang(p, l) {
  return p * l;
}

const luasPersegi = function(s) {
  return s * s;
};


const inputP = 5;
const inputL = 3;
const inputS = 4;

const hasilLuasPersegiPanjang = luasPersegiPanjang(inputP, inputL);
const hasilLuasPersegi = luasPersegi(inputS);

console.log(`Expected: { luasPersegiPanjang: ${hasilLuasPersegiPanjang}, luasPersegi: ${hasilLuasPersegi} }`);

// NOMOR 7
// MENAMBAHKAN
let input = ["Ali"];
let Tambah = input.push("Zaid");
console.log(input)

// REMOVE
let input2 = ["Ali", "Zaid"];
let Hapus = input2.shift();
console.log(input2)


// NOMOR 8
const nilaiSantri = [
  { nama: "Ali", nilai: 70 },
  { nama: "Fatimah", nilai: 90 },
];

const nilaiSetelahBonus = nilaiSantri.map(santri => {
  const nilaiBaru = santri.nilai + 5;
  return {
    nama: santri.nama, 
    nilai: nilaiBaru    
  };
});

console.log("Daftar Nilai Setelah Bonus:");
console.log(nilaiSetelahBonus);

// NOMOR 9
const nilaiSiswa = [{ nama: "Ali", nilai: 80 }, { nama: "Zaid", nilai: 60 }];
const batas = 70;
const namaDicari = "Ali";
// Batas nilai
function analisisDataSiswa(data) {
    const daftarLulus = data
        .filter(santri => santri.nilai >= 70) 
        .map(santri => santri.nama);

    return { daftarNamaSantriLulus: daftarLulus };
}

const hasilAnalisis = analisisDataSiswa(nilaiSiswa);

console.log("Daftar Nama Santri Lulus (>= 70):", hasilAnalisis.daftarNamaSantriLulus);
// Mencari
const arr = [
  { nama: "Ali", nilai: 80 },
  { nama: "Zaid", nilai: 60 }
];
const namaYangDicari = "Ali";

// Langkah 1: Gunakan metode .find() untuk mencari objek
const santriAli = arr.find(santri => {
  // Langkah 2: Kondisi pencarian
  return santri.nama === namaDicari;
});

// Langkah 3: Cetak hasilnya ke konsol
console.log("Hasil Pencarian:");
console.log(santriAli);


// NOMOR 10
let iniAngka = [80,90,70,100]

// Melakukan penjumlahan
function hitung(...nilai) {
    return nilai.reduce((akumulator, nilaiSaatIni) => akumulator + nilaiSaatIni);
}

const totalNilai = hitung(...iniAngka);

const rataRataSeluruhSiswa = totalNilai / iniAngka.length;

console.log(`Total Nilai: ${totalNilai}`);
console.log(`Rata-rata: ${rataRataSeluruhSiswa.toFixed(2)}`);


// NOMOR 11
let iniData = {
    nama: "Ali",
    key: "kelas",
    value: "A",
};
function setGetDynamic(input) {
  
  const { nama, key, value } = input;
  
  const dataBaru = {
    nama: nama,
    [key]: value
  };

  return dataBaru;
}
const hasil = setGetDynamic(iniData);

console.log("Input Data Asli:", iniData);
console.log("Output Data Baru:");
console.log(hasil);


// NOMOR 12
function ambilDataSantri(s) {
  
  const { nama, profil } = s;

  const { usia, kontak } = profil;

  const { telp } = kontak;

  return `${nama} (${usia}) - ${telp}`;
}

const inputSantri = {
  nama: "Ali",
  profil: { usia: 17, kontak: { telp: "0812" } }
};

const hasil2 = ambilDataSantri(inputSantri);

console.log("Input:", inputSantri);
console.log("Hasil:");
console.log(hasil2);


// NOMOR 13
let dataFIT = {
    
    admin: { nama: "Ali" },
    asrama: { kamar: "B12" },
    nilaiTambahan: [10, 20, 30]
};

function gabungProfilDanJumlah(admin, asrama, ...nilaiTambahan) {
    const profilGabung = {
        ...admin,
        ...asrama
    };
    const totalTambahan = nilaiTambahan.reduce((akumulator, saatIni) => akumulator + saatIni, 0);

    return {
        profil: profilGabung,
        totalTambahan: totalTambahan
    };
}

const hasilAkhir3 = gabungProfilDanJumlah(
    dataFIT.admin,
    dataFIT.asrama,
    ...dataFIT.nilaiTambahan 
);
console.log(hasilAkhir3);