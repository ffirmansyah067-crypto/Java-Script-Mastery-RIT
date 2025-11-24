// NOMOR 1
document.body.style.backgroundColor = "pink" ;
document.querySelector("h1").innerText = "Hati saya sudah di-commit ke repositori kamu. Jangan di-revert ya."

// NOMOR 2
const semuaParagraf = document.querySelectorAll(".teks");
semuaParagraf.forEach((element)=>{
    element.style.backgroundColor = "white"
})
document.querySelector("h2").innerText = "INI TUGAS"
const elementStatus = document.getElementById("title")
elementStatus.innerText = "P"
const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    title.innerText = "PA PE PA PE, MINIMAL SALAM";
  });
const iklan = document.getElementById("iklan-mengganggu");
iklan.remove();
 
const input = document.getElementById("name-input");
  const preview = document.getElementById("name-preview");

  input.addEventListener("keyup", () => {
    const v = input.value.trim();
    preview.textContent = v === "" ? "( K O S O N G )" : v;
  });

const desc = document.getElementById("desc");
  const btnT = document.getElementById("toggle-btn");
  let visible = true;

  btnT.addEventListener("click", () => {
    visible = !visible;
    desc.style.display = visible ? "block" : "none";
    btnT.innerText = visible ? "Sembunyikan" : "Tampilkan";
  });

  const menu = document.getElementById("menu");

  menu.addEventListener("click", (e) => {
    if (!e.target.classList.contains("menu-item")) return;

    document
      .querySelectorAll(".menu-item")
      .forEach((item) => item.classList.remove("active"));

    e.target.classList.add("active");
  });

  const nama = document.getElementById("nama");
  const save = document.getElementById("save");
  const err = document.getElementById("error");
  const res = document.getElementById("result");

  save.addEventListener("click", () => {
    const value = nama.value.trim();
    if (!value) {
      err.textContent = "Nama tidak boleh kosong.";
      res.textContent = "";
      return;
    }
    err.textContent = "";
    res.textContent = "Hai, " + value + " Sayangku!";
  });

  const photo = document.getElementById("photo");
  const btn3 = document.getElementById("change-photo");
  let toggle = false;

  btn3.addEventListener("click", () => {
    toggle = !toggle;
    photo.src = toggle ? "ive wonyoung icon.jpg" : "ive wonyoung.jpg";
  });

  const cb = document.getElementById("ready");
  const status = document.getElementById("status");

  cb.addEventListener("change", () => {
    status.textContent = cb.checked
      ? "Aku siap, menuju lokasi🥰."
      : "Yuk niatkan dulu.";
  });

  const data = [
    { name: "Abdul", score: 80 },
    { name: "Jaki", score: 75 },
    { name: "Fira", score: 90 },
  ];

  const tbody = document.getElementById("tbody");

  data.forEach((item, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${item.name}</td>
      <td>${item.score}</td>
    `;
    tbody.appendChild(tr);
  });