// NOMOR 1

async function getUser() {
  try {
    const res = await fetch("https://dummyjson.com/users/1");
    if (!res.ok) {
        throw new Error(`Status HTTP: ${res.status}`);
    }
    const rawData = await res.json();
    const userData = {
      firstName: rawData.firstName,
      lastName: rawData.lastName,
      age: rawData.age
    };
    console.log("Data Pengguna yang Diminta:");
    console.log(userData);
    localStorage.setItem("user_1", JSON.stringify(userData));
    console.log(`Data berhasil disimpan ke localStorage dengan key "user_1".`);

  } catch(error) {
    console.error("Gagal mengambil data atau memproses:", error);
  }
}

getUser();


// NOMOR 2

async function loadErrorExample() {
  try {
    const res = await fetch("https://dummyjson.com/halaman-yang-tidak-ada");

    if (!res.ok) {
      throw new Error("Halaman tidak ditemukan (404)");
    }

    const data = await res.json();
   console.log(data)
  } catch (error) {
    console.error(error.message);
  }
}
localStorage.setItem("last_error", JSON.stringify(loadErrorExample));
    console.log(`Data error tersimpan di "last_error." `);
    alert("Halaman tidak ditemukan (404)")
loadErrorExample()


// NOMOR 3

async function getProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    
    if (!res.ok) {
        throw new Error(`Gagal mengambil data: Status ${res.status}`);
    }

    const { products } = await res.json();
    const expensiveProducts = products.filter(p => p.price > 100);
    
    const titles = expensiveProducts.map(p => p.title);
    const prices = expensiveProducts.map(p => p.price);

    console.log("Daftar Judul Produk dengan Harga > 100:");
    console.log(titles);

    localStorage.setItem("expensive_prices", JSON.stringify(prices));
    console.log(`\n Daftar ${prices.length} harga berhasil disimpan ke localStorage dengan key "expensive_prices".`);
    
  } catch(error) {
    console.error("Gagal menjalankan fungsi:", error);
  }
}

getProducts();


// NOMOR 4
function loadDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const berhasil = Math.random() > 0.5;
      
      if (berhasil) {
        resolve("Data siap dan berhasil dimuat!");
      } else {
        reject(new Error("Gagal memuat data: Terjadi kesalahan koneksi."));
      }
    }, 1000);
  });
}

async function run() {
  console.log("Mencoba memuat data...");
  try {
    const hasil = await loadDataPromise();
    console.log("✅ Sukses:");
    console.log(hasil);
  } catch (error) {
    console.log("❌ Error ditangkap:");
    console.error(error.message); 
  } finally {
    console.log("--- Proses pemuatan selesai ---");
  }
}

run();


// NOMOR 5
/**
 * Fungsi utilitas untuk membuat penundaan menggunakan Promise.
 * @param {number} ms - Milidetik untuk ditunda.
 */
function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

/**
 * Fungsi utama untuk menjalankan 3 langkah berurutan.
 */
async function runSteps() {
  const hasilWaktu = {}; // Objek untuk menyimpan waktu penyelesaian

  console.log("🚀 Proses Berurutan Dimulai...");

  // --- Langkah 1: Penundaan 500ms ---
  const waktuMulai1 = Date.now();
  console.log(`[Step 1] Mulai: ${waktuMulai1}`);
  await delay(500);
  const waktuSelesai1 = Date.now();
  const durasi1 = waktuSelesai1 - waktuMulai1;
  console.log(`[Step 1] Selesai: ${waktuSelesai1} (Durasi: ${durasi1}ms)`);
  hasilWaktu['step1_selesai'] = waktuSelesai1;

  // --- Langkah 2: Penundaan 1500ms ---
  const waktuMulai2 = Date.now();
  console.log(`[Step 2] Mulai: ${waktuMulai2}`);
  await delay(1500);
  const waktuSelesai2 = Date.now();
  const durasi2 = waktuSelesai2 - waktuMulai2;
  console.log(`[Step 2] Selesai: ${waktuSelesai2} (Durasi: ${durasi2}ms)`);
  hasilWaktu['step2_selesai'] = waktuSelesai2;

  // --- Langkah 3: Penundaan 2000ms ---
  const waktuMulai3 = Date.now();
  console.log(`[Step 3] Mulai: ${waktuMulai3}`);
  await delay(2000);
  const waktuSelesai3 = Date.now();
  const durasi3 = waktuSelesai3 - waktuMulai3;
  console.log(`[Step 3] Selesai: ${waktuSelesai3} (Durasi: ${durasi3}ms)`);
  hasilWaktu['step3_selesai'] = waktuSelesai3;

  console.log("\n✅ Semua Langkah Selesai.");
  console.log("Data waktu penyelesaian:");
  console.log(hasilWaktu);
  
  // --- Tantangan: Simpan waktu selesai ke localStorage ---
  try {
    const dataJSON = JSON.stringify(hasilWaktu);
    localStorage.setItem('waktuPenyelesaianAsync', dataJSON);
    console.log("\n💾 Data berhasil disimpan ke localStorage di bawah kunci 'waktuPenyelesaianAsync'.");
    console.log("Lihat di Console: localStorage.getItem('waktuPenyelesaianAsync')");
  } catch (e) {
    console.error("Gagal mengakses atau menyimpan ke localStorage:", e);
  }
}

runSteps();