const btn = document.createElement('button')

const div = document.createElement('h1')
const h1 = document.createTextNode('INI TESTI')

div.appendChild(h1)
document.body.appendChild(div)


const buatElemen = (tag, isi) => {
    const elemen = document.createElement(tag)
    elemen.textContent = isi
    document.body.appendChild(elemen)
}

buatElemen('h1', 'ISI UNTUK H1')
buatElemen('p', 'Ini paragraf')
buatElemen('h4', 'INI H4')


