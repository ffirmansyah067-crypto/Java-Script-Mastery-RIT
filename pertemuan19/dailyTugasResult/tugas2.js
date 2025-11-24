// NOMOR 1
const countEl = document.getElementById("count");
  const btn = document.getElementById("btn-plus");
  const msg = document.getElementById("msg");
  let count = 0;

  btn.addEventListener("click", () => {
    count++;
    countEl.textContent = count;
    if (count >= 30) {
    msg.textContent = "MENYALA KINGGG🥵👑";
    msg.style.color = "red";
    } else if (count >= 10) {
    msg.textContent = "LUAR BIASA! Jari petir! ⚡😱";
    msg.style.color = "blue";
    } else if (count >= 5) { 
    msg.textContent = "Wah, rajin juga! 🔥";
    msg.style.color = "green";
    } else msg.textContent = "";
  });

// NOMOR 2
const input = document.getElementById("todo-input");
  const addBtn = document.getElementById("todo-add");
  const list = document.getElementById("todo-list");
  addBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;

    const li = document.createElement("li");
    li.textContent = text;

    // 1. Kita ganti nama variabelnya biar sesuai (opsional, tapi rapi)
    // dari delBtn (delete) jadi doneBtn (done/selesai)
    const doneBtn = document.createElement("button");
    
    // 2. Ganti tulisan di tombolnya
    doneBtn.textContent = "Selesai"; 

    // 3. UBAH LOGIKANYA DI SINI
    // Dulu: li.remove()
    // Sekarang: Ubah style textDecoration
    doneBtn.addEventListener("click", () => {
        if (li.style.textDecoration === "line-through") {
            // Kalau sudah dicoret, hilangkan coretannya (batal selesai)
            li.style.textDecoration = "none";
            doneBtn.textContent = "Selesai"; // Balikin teks tombol
        } else {
            // Kalau belum, coret teksnya
            li.style.textDecoration = "line-through";
            doneBtn.textContent = "Batal"; // Ubah teks tombol jadi 'Batal'
        }
    });

    li.appendChild(doneBtn);
    list.appendChild(li);
    input.value = "";
});


  // NOMOR 3
  search.addEventListener("keyup", () => {
  const q = search.value.toLowerCase();
  let countShown = 0;

  list.querySelectorAll("li").forEach((li) => {
    // 1. Selalu ambil teks bersih (tanpa tag <mark> sisa pencarian sebelumnya)
    const originalText = li.textContent;
    const name = originalText.toLowerCase();
    const match = name.includes(q);

    // 2. Atur visibility
    li.style.display = match ? "list-item" : "none";

    if (match) {
      countShown++;

      // 3. Logic Highlight
      if (q !== "") {
        // Buat RegExp dinamis: 
        // - (${q}) adalah capturing group (teks yang dicari)
        // - 'g' = global (cari semua kejadian)
        // - 'i' = insensitive (abaikan huruf besar/kecil)
        const regex = new RegExp(`(${q})`, "gi");

        // Replace teks asli dengan versi yang di-mark
        // $1 artinya: "Gunakan teks asli yang ditemukan oleh regex tadi"
        // Ini penting agar jika cari "bud", teks "Budi" tetap "Budi" (B besar), bukan "budi".
        li.innerHTML = originalText.replace(regex, "<mark>$1</mark>");
      } else {
        // Jika input kosong, kembalikan ke teks polos
        li.innerHTML = originalText;
      }
    } else {
      // Reset elemen yang disembunyikan agar bersih saat muncul lagi nanti
      li.innerHTML = originalText;
    }
  });

  info.textContent =
    countShown === 0 ? "Tidak ada santri ditemukan" : `Ditemukan ${countShown} santri`;
});