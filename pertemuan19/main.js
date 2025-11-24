let data1 = "ini string"
const data2 = 1234
let data3 = true
let data4 = false
let data5 = ['gurame', 'hiu', 'nila', 'gabus', 'paus']
console.log(data5)


function iwak(...datas) {
console.table(datas)
}
iwak(1,2,3,4,5,6,7)


function f1(...dataa){
    let object = {}
    if(dataa.length >1 || !dataa) {
        for (let i = 0; i < dataa.length; i++) {
            object[`data ${i+1}`] = dataa[i]
        }
    }
    return object
}
console.log(f1("nila", "lele", "gabus", "patin"))

function f2(...dataaa){
    let object = {}
    dataaa.forEach((v,i,a)=>{
        object[`${v}`] = v
    })
    return object
}
console.log(f2("f14","f15","f16"))