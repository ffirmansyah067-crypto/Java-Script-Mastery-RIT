// NOMOR 1


function loadUserProfile(username) {
  console.log("⏳ Status: PENDING... mengambil data user...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!username) {
        reject("Username tidak boleh kosong!");
      } else {
        resolve({
          username,
          name: "Santri Programmer",
          level: "Beginner"
        });
      }
    }, 2000);
  });
}
console.log("1. Start: Kode Sinkron berjalan.")
loadUserProfile("ghifari")
  .then((user) => {
    console.log("✅ Status: SUCCESS");
    console.log("Data user:", user);
  })

  .catch((err) => {
    console.log("❌ Status: REJECT");
    console.error("Error:", err);
  });
  localStorage.setItem("lastUser", JSON.stringify("ghifari"));
  console.log("💾 Data user berhasil disimpan ke localStorage ('lastUser').");



// NOMOR 2


function checkConnection() {
  console.log("🔍 Mengecek koneksi... (PENDING)");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isOnline = Math.random() > 0.3; // 70% online
      if (isOnline) {
        resolve("Koneksi stabil. ✅");
      } else {
        reject("Tidak ada koneksi internet. ❌");
      }
    }, 1000);
  });
}
function getLastConnectionStatus() {
    const status = localStorage.getItem("connection_status");
    if (status) {
        console.log(`\n💾 Status terakhir di localStorage: ${status.toUpperCase()}`);
        return status;
    } else {
        console.log("\n💾 Belum ada status koneksi tersimpan di localStorage.");
        return null;
    }
}


checkConnection() 
  .then((message) => {
    console.log("SUCCESS:", message);
    localStorage.setItem("connection_status", "online");
  })
  .catch((error) => {
    console.log("REJECT:", error);
    localStorage.setItem("connection_status", "offline");
  })
  .finally(() => {
    getLastConnectionStatus();
  });
