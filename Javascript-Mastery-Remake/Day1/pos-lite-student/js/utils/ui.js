import * as utils from './index.js';
import * as products from './../db/index.js'


// 4. Bikin Tampilan pakai fungsi sakti 'buatElemen'
// Perhatikan betapa bersihnya kode ini dibanding document.createElement biasa!
export const renderSingleKartu = (db = {}) => {
    const kartu = utils.buatElemen('div', { className: 'kartu-produk', style: 'border: 1px solid black; padding: 20px; max-width: 300px; border-radius: 8px;' },

        // Badge Kategori
        utils.buatElemen('span', { style: 'background: #eee; padding: 8px 8px; border-radius: 4px; font-size: 12px;' }, db.kategori),
        
        // Header Kartu
        utils.buatElemen('h2', { style: 'color: brown; margin-top: 3;' }, db.nama),

        // Harga (h3) - kita pakai fungsi formatKeRupiah
        utils.buatElemen('h3', { style: `color: ${db.harga > 20000 ? 'red' : 'green'}; text-decoration: line-through;`}, utils.ubahMataUang(db.harga)),

        // Stok (p)
        utils.buatElemen('p', { style: 'color: black;' }, utils.formatStok(db.stok)),

        // Diskon (h3)
        utils.buatElemen('h3', { style: 'color: green' }, utils.diskonPersen1(db.harga,db.diskon)),

        // Tombol (button) dengan Event Listener onClick
        utils.buatElemen('button', {
            className: 'tombol-beli',
            style: 'background: blue; color: white; border: none; padding: 10px 20px; cursor: pointer; border-radius: 4px; width: 100%;',
            // Event Listener (Klik)
            onClick: () => {
                alert(`Kamu membeli ${db.nama} seharga ${utils.diskonPersen1(db.harga,db.diskon)}`);
            }
        }, `${db.stok > 1 ? 'Beli' : 'Habis'}`)
    );
    return kartu
}

export const renderBanyakKartu = (elemen, products) => products.forEach(v => elemen.appendChild(renderSingleKartu(v)))





// export const renderBanyakKartu = (products) => products.forEach(v => console.table(v.nama))
// const aplikasi = document.querySelector('#aplikasi')


// renderBanyakKartu(products.myProduct)

// let obj = {
//     nama: "Jaki",
//     kelas: 12 ,
//     umur: 17,
// }

// console.log(obj.umur)