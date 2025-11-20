export function prayerSchedul ()
{getTodayForApi, getTodayForDisplay, searchCity, getDailySchedule, handlePilihLokasi}


function getTodayForApi() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getTodayForDisplay() {
    const options = { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date().toLocaleDateString('id-ID', options);
}


function updateNextSholatUI(jadwal) {
    const now = new Date();

    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const sholatList = [
        { name: "Subuh", time: jadwal.subuh },
        { name: "Dzuhur", time: jadwal.dzuhur },
        { name: "Ashar", time: jadwal.ashar },
        { name: "Maghrib", time: jadwal.maghrib },
        { name: "Isya", time: jadwal.isya }
    ];

    let nextPrayer = null;

    for (let item of sholatList) {
        const [jam, menit] = item.time.split(':').map(Number);
        const sholatMinutes = jam * 60 + menit;

        if (sholatMinutes > currentMinutes) {
            nextPrayer = item;
            break; 
        }
    }

 
    if (!nextPrayer) {
        nextPrayer = { name: "Subuh", time: jadwal.subuh }; 
    }

    document.getElementById("next-name").innerText = nextPrayer.name;
    document.getElementById("next-time").innerText = nextPrayer.time;
}


async function searchCity(keyword) {
    const url = `https://api.myquran.com/v2/sholat/kota/cari/${keyword}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.data; 
}

async function getDailySchedule(cityId, dateApi) {
    const url = `https://api.myquran.com/v2/sholat/jadwal/${cityId}/${dateApi}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.data; 
}


async function handlePilihLokasi() {
    const inputElement = document.getElementById("input-kota");
    const btnElement = document.querySelector("button");
    const statusElement = document.getElementById("status-text");
    
    const keyword = inputElement.value;

   
    if (!keyword) {
        statusElement.innerText = "⚠️ Mohon isi nama kota terlebih dahulu.";
        statusElement.className = "status-error";
        return;
    }

   
    btnElement.innerText = "Loading...";
    btnElement.disabled = true; 
    statusElement.innerText = "🔍 Mencari kota...";
    statusElement.className = "status-loading";

    try {
        
        const hasilPencarian = await searchCity(keyword);

        
        if (!hasilPencarian || hasilPencarian.length === 0) {
            throw new Error("Kota tidak ditemukan. Coba ejaan lain.");
        }

        
        const kotaPertama = hasilPencarian[0];
        const cityId = kotaPertama.id;
        
        
        statusElement.innerText = `✅ Kota ditemukan: ${kotaPertama.lokasi}. Mengambil jadwal...`;

      
        const tanggalApi = getTodayForApi();
        const dataJadwal = await getDailySchedule(cityId, tanggalApi);

       
        if (dataJadwal && dataJadwal.jadwal) {
            const jadwal = dataJadwal.jadwal;

           
            document.getElementById("display-tanggal").innerText = getTodayForDisplay();
            document.getElementById("display-lokasi").innerText = `${kotaPertama.lokasi} - ${dataJadwal.daerah}`;

            
            document.getElementById("jam-imsak").innerText = jadwal.imsak;
            document.getElementById("jam-subuh").innerText = jadwal.subuh;
            document.getElementById("jam-terbit").innerText = jadwal.terbit;
            document.getElementById("jam-dhuha").innerText = jadwal.dhuha;
            document.getElementById("jam-dzuhur").innerText = jadwal.dzuhur;
            document.getElementById("jam-ashar").innerText = jadwal.ashar;
            document.getElementById("jam-maghrib").innerText = jadwal.maghrib;
            document.getElementById("jam-isya").innerText = jadwal.isya;

            updateNextSholatUI(jadwal);

            statusElement.innerText = "";
            statusElement.className = "status-idle";
        }

    } catch (error) {
        console.error(error);
        statusElement.innerText = `❌ Error: ${error.message}`;
        statusElement.className = "status-error";
    } finally {
        btnElement.innerText = "Pilih Lokasi";
        btnElement.disabled = false;
    }
}