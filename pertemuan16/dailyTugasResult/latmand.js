// NOMOR 1

const login = new Promise(function(resolve){
    let user = true ;
    if (user) {
        resolve("Data Berhasil Disummit!");

    }
});


// NOMOR 2

function sambutan() {
    return new Promise(function(resolve){
        setTimeout(()=> resolve("Selamat Datang! "), 1000)
    });
}
function sambutan2(data) {
    return new Promise(function(resolve){
        setTimeout(()=> resolve(data + "Diberanda Login!"),1000)
    });
}
sambutan()
.then(sambutan2)
.then(function(hasilAkhir){
    console.log("Hasil:", hasilAkhir)
})



// NOMOR 3

function sambutan() {
    return new Promise(function(resolve){
        setTimeout(()=> resolve("Selamat Datang! "), 1000)
    });
}
function sambutan2(data) {
    return new Promise(function(resolve){
        setTimeout(()=> resolve(data + "Diberanda Login!"),1000)
    });
}
sambutan()
.then(sambutan2)
.then(function(hasilAkhir){
    console.log("Hasil:", hasilAkhir)
.catch(function(error){
    console.log("Error: ", error)
})
})