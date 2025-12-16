// 1. Import alat yang sudah kita buat dari 'Lobby' (index.js)
// Perhatikan kita pakai relative path './'
import * as utils from './utils/index.js';
import * as db from './db/index.js';


console.log("Mesin POS Lite dinyalakan..."); // Cek di Console Browser (F12)

//========================== NOMER 1 ========>
console.log(db.myProduct);
//===========================================>


// 2. Ambil wadah dari index.html
const wadahAplikasi = document.getElementById('aplikasi');

// Style yang lebih rapi
const styleContainer = 'display: flex; align-items: start; flex-wrap: wrap; gap: 20px; padding:10px';
wadahAplikasi.setAttribute('style',styleContainer)


utils.renderBanyakKartu(wadahAplikasi,db.myProduct)

console.log(utils.diskonPersen1(10000, 10))



// // 2. Ambil wadah dari index.html
// const wadahAplikasi = document.getElementById('aplikasi');

// // 3. Data Bohongan (Dummy) untuk tes
// const produkTest = {
//     nama: "Kopi Susu Gula Aren",
//     harga: 18000,
//     kategori: "Minuman"
// };

// // 4. Bikin Tampilan pakai fungsi sakti 'buatElemen'
// // Perhatikan betapa bersihnya kode ini dibanding document.createElement biasa!
// const kartu = buatElemen('div', { className: 'kartu-produk', style: 'border: 1px solid black; padding: 20px; max-width: 300px; border-radius: 8px;' },
    
//     // Header Kartu
//     buatElemen('h2', { style: 'color: brown; margin-top: 0;' }, produkTest.nama),
    
//     // Badge Kategori
//     buatElemen('span', { style: 'background: #eee; padding: 4px 8px; border-radius: 4px; font-size: 12px;' }, produkTest.kategori),
    
//     // Harga (p) - kita pakai fungsi formatKeRupiah
//     buatElemen('h3', { style: 'color: green;' }, formatKeRupiah(produkTest.harga)),
    
//     // Tombol (button) dengan Event Listener onClick
//     buatElemen('button', {
//         className: 'tombol-beli',
//         style: 'background: blue; color: white; border: none; padding: 10px 20px; cursor: pointer; border-radius: 4px; width: 100%;',
//         // Event Listener (Klik)
//         onClick: () => {
//             alert(`Kamu membeli ${produkTest.nama} seharga ${formatKeRupiah(produkTest.harga)}`);
//         }
//     }, "Beli Sekarang")
// );

// // 5. Tempelkan kartu ke wadah agar muncul di layar
// wadahAplikasi.appendChild(kartu);

// // MANZ's COBA

// const produk2 = {
//     nama: "Kopi Liong",
//     harga: "5000",
//     kategori: "Minuman"
// }

// const kartu2 = buatElemen('div', { className: 'kartu-produk', style: 'border: 1px solid black; padding: 20px; max-width: 300px; border-radius: 8px;' },
    
//     // Header Kartu
//     buatElemen('h2', { style: 'color: brown; margin-top: 0;' }, produk2.nama),
    
//     // Badge Kategori
//     buatElemen('span', { style: 'background: #eee; padding: 4px 8px; border-radius: 4px; font-size: 12px;' }, produk2.kategori),
    
//     // Harga (p) - kita pakai fungsi formatKeRupiah
//     buatElemen('h3', { style: 'color: green;' }, formatKeRupiah(produk2.harga)),
    
//     // Tombol (button) dengan Event Listener onClick
//     buatElemen('button', {
//         className: 'tombol-beli',
//         style: 'background: blue; color: white; border: none; padding: 10px 20px; cursor: pointer; border-radius: 4px; width: 100%;',
//         // Event Listener (Klik)
//         onClick: () => {
//             alert(`Kamu membeli ${produk2.nama} seharga ${formatKeRupiah(produk2.harga)}`);
//         }
//     }, "Beli Sekarang")
// );

// // 5. Tempelkan kartu ke wadah agar muncul di layar
// wadahAplikasi.appendChild(kartu2);

// const produk3 = {
//     nama: "Americano 4 Shoot",
//     harga: "30000",
//     kategori: "Minuman"
// }

// const kartu3 = buatElemen('div', { className: 'kartu-produk', style: 'border: 1px solid black; padding: 20px; max-width: 300px; border-radius: 8px;' },
    
//     // Header Kartu
//     buatElemen('h2', { style: 'color: brown; margin-top: 0;' }, produk3.nama),
    
//     // Badge Kategori
//     buatElemen('span', { style: 'background: #eee; padding: 4px 8px; border-radius: 4px; font-size: 12px;' }, produk3.kategori),
    
//     // Harga (p) - kita pakai fungsi formatKeRupiah
//     buatElemen('h3', { style: 'color: green;' }, formatKeRupiah(produk3.harga)),
    
//     // Tombol (button) dengan Event Listener onClick
//     buatElemen('button', {
//         className: 'tombol-beli',
//         style: 'background: blue; color: white; border: none; padding: 10px 20px; cursor: pointer; border-radius: 4px; width: 100%;',
//         // Event Listener (Klik)
//         onClick: () => {
//             alert(`Kamu membeli ${produk3.nama} seharga ${formatKeRupiah(produk3.harga)}`);
//         }
//     }, "Beli Sekarang")
// );

// // 5. Tempelkan kartu ke wadah agar muncul di layar
// wadahAplikasi.appendChild(kartu3);