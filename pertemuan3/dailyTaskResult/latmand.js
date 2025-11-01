
// nomer 1
function inputUsiaDanCek() {
    // Memunculkan popup untuk meminta input usia
    let inputUsia = prompt("Masukkan usia Anda:"); 

    // Periksa jika input dibatalkan atau kosong
    if (inputUsia === null || inputUsia.trim() === "") {
        alert("Input usia dibatalkan atau kosong.");
        return; // Hentikan fungsi
    }

    let usia = parseInt(inputUsia);

    // Lanjutkan dengan logika percabangan
    let pesan;
    if (usia < 5) {
        pesan = "Anda adalah balita";
    } else if (usia >= 5 && usia < 12) {
        pesan = "Anda adalah anak-anak";
    } else if (usia >= 12 && usia < 20) {
        pesan = "Anda adalah remaja";
    } else if (usia >= 20 && usia < 60) {
        pesan = "Anda adalah dewasa";
    } else {
        pesan = "Anda adalah lansia";
    }

    // Memunculkan hasil akhir
    alert(`Usia Anda adalah ${usia}.\nKategori: ${pesan}`);
}

// looping for (nomer 2)
for (let i = 1; i <= 10; i++) {
    console.log(`Perulangan ke-${i}`);
}

// nomer 3

function dapatkanNamaHari(angkaHari) {
    let namaHari= prompt("Masukkan angka hari (1-7):");
    angkaHari = parseInt(namaHari);

    switch (angkaHari) {
        case 1:
            namaHari = "Minggu";
            break;
        case 2:
            namaHari = "Senin";
            break;
        case 3:
            namaHari = "Selasa";
            break;
        case 4:
            namaHari = "Rabu";
            break;
        case 5:
            namaHari = "Kamis";
            break;
        case 6:
            namaHari = "Jumat";
            break;
        case 7:
            namaHari = "Sabtu";
            break;
        default:
            namaHari = "Angka tidak valid (Harus antara 1 sampai 7)";
    }

    // Tampilkan hasil di console
    alert(`Angka ${angkaHari} adalah hari: ${namaHari}`);
}

