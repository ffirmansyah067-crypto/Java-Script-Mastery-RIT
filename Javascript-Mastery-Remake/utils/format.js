const f1 = () => "Ini dari format.js"



function masak(menuUtama, ...pelengkap) {
    return `
Menu Utama: ${menuUtama}
Pelengkap: ${pelengkap}
    `
}

export{f1, masak}