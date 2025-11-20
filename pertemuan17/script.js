function ambilDataSimulasi(id) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(id > 0){
                resolve(`Data untuk ID: ${id}`);
            } else {
                reject("ID tidak valid")
            }
        }, 2000);
    });
}

async function prosesData () {
    console.log("1. Memulai proses... ")
    console.log("3. Proses selesai")
}

async function prosesData() {
    console.log("1. Memulai proses...");
    
    try {
        const hasil = await ambilDataSimulasi(123); 
        
        console.log("2. Data berhasil didapatkan:");
        console.log(`   -> ${hasil}`);
        
    } catch (error) {
        console.error("2. Terjadi kesalahan:");
        console.error(`   -> ${error}`);
    }

    console.log("3. Proses selesai.");
}

prosesData(); 

console.log("Program utama terus berjalan tanpa terblokir.");

function getUser(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve("Manzz Cruiserr");
        }, 1000);
    });
}

async function showUser() {
    const user = await getUser();
    console.log("User:" , user)
}
showUser();


async function getSemuaSurat() {
    try {
        const response = await fetch("https://api.myquran.com/v2/quran/surat/semua")
        const SemuaSurat = await response.json()
        document.getElementById('id1').innerHTML = `<h1>Audio URL: ${SemuaSurat.data[0].audio_url}</h1>`
        return SemuaSurat.data[0].audio_url
    } catch (e) {
        document.getElementById('id1').innerHTML = `<p>Ini Custom Info dari Hasil Error: ${e.message}</p>`
    }
}

// call the function so the result appears in the HTML page
getSemuaSurat()