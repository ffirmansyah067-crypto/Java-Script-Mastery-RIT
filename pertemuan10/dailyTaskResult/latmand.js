// NOMOR SATU
let nilai = [1,2,3,4,5,6,7,8,9,10] ;
let [a, b, c, d, e, f, g, h, i, j] = nilai ;

console.log(a,b,c,d)


// NOMOR DUA
let mobil = {
    merk: "Kijang Super",
    tahun: 1990
};
let {merk,tahun} = mobil;

console.log(merk) 

// NOMOR TIGA
let handphone1 = ["Samsung","Iphone","Google Pixel"];
let handphone2 = ["Xiaomi","Huawei", ...handphone1];

console.log(handphone2);

// NOMOR EMPAT
function hitung(...nilai){
    return nilai.reduce((a,b) => a+b);
}

console.log(hitung(1,2,3,4,5,6,7,8,9,10));