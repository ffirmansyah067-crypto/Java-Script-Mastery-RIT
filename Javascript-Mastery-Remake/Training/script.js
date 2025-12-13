// BY MANZ-CRYPTO

const bikinTag = (tag) => document.createElement(tag)

const bikinNode = (node) => document.createTextNode(node)

const bikinAttribute = (tag, att = {}) => Object.entries(att).forEach(([k, v]) => tag.setAttribute(k, v))

const addToBody = (tag) => document.body.appendChild(tag)

const bikinElemen = (tag, node, attributs = {}) => {
    let elemen = bikinTag(tag)
    let text = bikinNode(node)
    elemen.appendChild(text)
    bikinAttribute(elemen, attributs)
    addToBody(elemen)
}
bikinElemen('h1', 'Hi, how r u?', { id: '1', class: 'class1', style: 'font-size: 50px' })
bikinElemen('h2', 'Hi, Morning Person!', { id: "1", class: 'class4', style: 'font-size:60px' })
bikinElemen('img', 'wonyoung ive', { id: 'img1', src: 'ive wonyoung icon.jpg', style: 'width:100px' })

//====================================================================================>


// TESTI

const tanyaNama = () => {
    const nama = prompt('SIAPA KAU?').trim();

    if (!nama) {
        alert('Kamu tidak memasukkan nama...');
        return;
    }

    if (nama.length < 2) {
        alert('Nama terlalu pendek, masukkan yang bener dong!');
        return;
    }

    alert(`Ouh Anda adalah si ${nama}`);
};


function bikinElemen2(tag, text, attrs) {
    const el = document.createElement(tag)
    el.textContent = text

    for (let key in attrs) {
        if (key.startsWith('on') && typeof attrs[key] === 'function') {
            el[key.toLowerCase()] = attrs[key]   // pasang event listener
        } else {
            el.setAttribute(key, attrs[key])
        }
    }

    document.body.appendChild(el)
    return el
}



bikinElemen2('button', 'KLIK SAYA', { id: "1", class: 'neon-glow-btn', style: 'margin:5px', onClick: () => tanyaMauBikinButtonBerapa() })
const tanyaMauBikinButtonBerapa = () => {
    const total = prompt('Mau Bikin Button Berapa cuy?')

    if (total >= 1) {
        for (let i = 0; i < total; i++) {
            bikinElemen2('button', `Button ${i + 1}`, {
                id: `${i}`,
                class: 'neon-glow-btn',
                style: 'margin:5px'
            })
        }
    }
}

bikinElemen2('button', 'klik here!', { id: '1', class: 'class4', style: 'font-size: 30px', onClick: () => sapaNama() })
const sapaNama = () => {
    const nama = prompt('Intro mas').trim();

    if (!nama) {
        alert('Matane picek, lebokno jenengmu su!');
        return;
    }

    if (nama.length < 3) {
        alert('Sing waras mas, mosok jenengmu gor ngono!');
        return;
    }

    alert(`Salken nggih ${nama}`);
}



//================================================================================>

// Buat tombol lewat JS
const tombol = document.createElement('button');
tombol.textContent = 'Ini kan My Kisah';
tombol.style.padding = '10px 20px';
tombol.style.margin = '10px';
tombol.style.cursor = 'pointer';


// Buat elemen gambar lewat JS
const img = document.createElement('img');
img.style.width = '250px';
img.style.display = 'none'; // awalnya disembunyikan

// Masukkan tombol & gambar ke body
document.body.appendChild(tombol);
document.body.appendChild(img);

// Event ketika tombol diklik
tombol.addEventListener('click', () => {
    img.src = 'ive wonyoung icon.jpg'; // ganti URL sesuai kebutuhan
    img.style.display = 'block';
});

//==============================================================================>


const f1 = (nama) => nama ? `Nama: ${nama}` : 'Nama: kosong'
const f2 = (alamat) => alamat ? `Alamat: ${alamat}` : 'Alamat: kosong'
const f3 = (umur) => umur ? `Usia: ${umur}` : 'Umur: kosong'

const dataSiswa = (nama = '', alamat = '', umur = '') => {
    let a = f1(nama)
    let b = f2(alamat)
    let c = f3(umur)

    return `${a} | ${b} | ${c}`
}

console.log(dataSiswa('Kanaya', 'Bogor',))

//==============================================================================>


// function bikinElemen2(tag, text, options = {}) {
//   const el = document.createElement(tag);
//   if (text) el.textContent = text;

//   for (const key in options) {
//     if (key === "onClick") {
//       el.addEventListener("click", options[key]);
//     } else {
//       el.setAttribute(key, options[key]);
//     }
//   }

//   return el;
// }

function darkMode() {
  document.body.classList.toggle("dark");
}
// Wrapper
const wrapper = bikinElemen2("div", "", { class: "toggle-wrapper" });

// Ikon matahari
const sunIcon = bikinElemen2("span", "☀️", { class: "icon sun" });

// Switch
const switchBtn = bikinElemen2("div", "", {
  class: "switch",
  onClick: () => darkMode()
});

// Ikon bulan
const moonIcon = bikinElemen2("span", "🌙", { class: "icon moon" });

// Susun
wrapper.appendChild(sunIcon);
wrapper.appendChild(switchBtn);
wrapper.appendChild(moonIcon);

document.body.appendChild(wrapper);


