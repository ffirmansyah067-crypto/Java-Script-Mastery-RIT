// BY MANZ-CRYPTO

const bikinTag = (tag) => document.createElement(tag)

const bikinNode = (node) => document.createTextNode(node)

const bikinAttribute = (tag, att = {} ) => Object.entries(att).forEach(([k,v])=> tag.setAttribute(k,v)) 

const addToBody = (tag) => document.body.appendChild(tag)

const bikinElemen = (tag,node,attributs= {}) => {
    let elemen = bikinTag(tag)
    let text = bikinNode(node)
    elemen.appendChild(text)
    bikinAttribute(elemen, attributs)
    addToBody(elemen)
}
bikinElemen('h1', 'Hi, how r u?', {id:'1',class:'class1',style:'font-size: 50px'})
bikinElemen('h2', 'Hi, Morning Person!', {id:"1",class:'class4',style:'font-size:60px'})

//====================================================================================>


// TESTI

bikinElemen('button', 'KLIK SAYA', { id: "1", class:'neon-glow-btn',style:'margin:5px', onClick: () => tanyaMauBikinButtonBerapa() })
const tanyaMauBikinButtonBerapa = () => {
    const total = prompt('Mau Bikin Button Berapa cuy?')

    if (total >= 1) {
        for (let i = 0; i < total; i++) {
            bikinElemen('button', `Button ${i}`, {
                id: `${i}`,
                class: 'neon-glow-btn',
                style: 'margin:5px'
            })
        }
    }
}

const tanyaNama = () => {
    const nama = prompt('SIAPA  KAU?')
    if(nama){
        alert(`Ouh Anda Adalah si ${nama}`)
    }
}