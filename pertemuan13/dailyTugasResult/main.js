// LATIHAN MANDIRI

import { add } from './utils/aritmatika.js'
import { multiply } from './utils/aritmatika.js'
import { min } from './utils/aritmatika.js'
import { pembagian } from './utils/aritmatika.js'

const tagDiv76 = document.getElementById ('tagDiv76')

console.log(add);
console.log(multiply);
console.log(min);
console.log(pembagian);

function iniIsi(a,b) {
    let isi = '' 


    let resultAdd = add(a,b);
    let resultmultiply = multiply(a,b);
    let resultMin = min(a,b);
    let resultPembagian = pembagian(a,b);


    isi += `<h3>hasil: ${a} + ${b} = ${resultAdd}</h3>`
    isi += `<h3>hasil: ${a} x ${b} = ${resultmultiply}</h3>`
    isi += `<h3>hasil: ${a} - ${b} = ${resultMin}</h3>`
    isi += `<h3>hasil: ${a} / ${b} = ${resultPembagian}</h3>`
    isi += `<h3>====================</h3>`

    return isi
}

tagDiv76.innerHTML +=  iniIsi(1000,900)
tagDiv76.innerHTML +=  iniIsi(1000,800)
tagDiv76.innerHTML +=  iniIsi(1000,700)
tagDiv76.innerHTML +=  iniIsi(1000,600)
tagDiv76.innerHTML +=  iniIsi(1000,500)