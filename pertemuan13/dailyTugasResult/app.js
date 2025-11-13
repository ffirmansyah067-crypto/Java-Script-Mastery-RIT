// EVALUASI HARIAN

import { keRupiah } from './modules/konversi.js'
import { judul } from './modules/format.js'

const tagDiv86 = document.getElementById ('tagDiv86')

console.log(keRupiah);
console.log(judul);


function iniJawaban (angka, teks) {
    let jawaban = ''


    let resultKeRupiah = keRupiah (angka)
    let resultJudul = judul (teks)


    jawaban += `<h3> ${angka}</h3>`
    jawaban += `<h3>hasil: ${teks} </h3>`


    return jawaban
}

tagDiv86.innerHTML +=  iniJawaban("RP 1.500.000")
tagDiv86.innerHTML +=  iniJawaban("Belajar Modular Javascript")