const myform1 = document.getElementById('myform1')
const inputTeks = document.getElementById('input-teks')
const errMsgInputTeks = document.getElementById('err-msg-teks')

myform1.addEventListener('submit',function(e){
    e.preventDefault();

    let Teks = inputTeks.value.trim()
    errMsgInputTeks.textContent = Teks
    console.log(Teks);
    let teks = inputTeks.value.trim()
    if(!teks){
        errMsgInputTeks.textContent = 'From Nama Belum Diisi'
        errMsgInputTeks.style.color = 'red'
        inputTeks.style.borderColor = 'red'
    }else if(teks.length <4){
        errMsgInputTeks.textContent = 'Nama Kurang Dari 4 Karakter'
        errMsgInputTeks.style.color = 'red'
        inputTeks.style.borderColor = 'red'
    }else{
        errMsgInputTeks.textContent = 'Ok Nama Valid'
        errMsgInputTeks.style.color = 'green'
        inputTeks.style.borderColor = 'aqua'
    }

})

const inputEmail = document.getElementById('input-email')
const errMsgInputEmail = document.getElementById('err-msg-email')

myform1.addEventListener('submit',function(a){
    a.preventDefault();

    let Email = inputEmail.value.trim()
    errMsgInputEmail.textContent = Email
    console.log(Email);
    let email = inputEmail.value.trim()
    if(!email){
        errMsgInputEmail.textContent = 'Email Belum Diisi'
        errMsgInputEmail.style.color = 'red'
        inputEmail.style.borderColor = 'red'
    }else if(!email.includes('@')){
        errMsgInputEmail.textContent = 'Email Harus Menggunakan @'
        errMsgInputEmail.style.color = 'red'
        inputEmail.style.borderColor = 'red'
    }else{
        errMsgInputEmail.textContent = 'Email Telah Diisi'
        errMsgInputEmail.style.color = 'green'
        inputEmail.style.borderColor = 'aqua'
    }
    
})

const inputPw = document.getElementById('input-password')
const errMsgInputPw = document.getElementById('err-msg-pw') 

myform1.addEventListener('submit',function(b){
    b.preventDefault();

    let Password = inputPw.value.trim()
    errMsgInputPw.textContent = Password
    console.log(Password);
    
    let password = inputPw.value.trim()
    if(!password){
        errMsgInputPw.textContent = 'Password Harap Diisi'
        errMsgInputPw.style.color = 'red'
        inputPw.style.borderColor = 'red'
    } else if(password.length <8){
        errMsgInputPw.textContent = 'Password Minimal 8 Karakter'
        errMsgInputPw.style.color = 'red'
        errMsgInputPw.style.borderColor = 'red'
    } else{
        errMsgInputPw.textContent = 'Password Telah Diisi'
        errMsgInputPw.style.color = 'green'
        errMsgInputPw.style.borderColor = 'aqua'
    }
})

const inputDate = document.getElementById('input-tanggal')
const errMsgDate = document.getElementById('err-msg-tanggal')

myform1.addEventListener('submit',function(b){
    b.preventDefault();

    let Tanggal = inputDate.value.trim()
    errMsgDate.textContent = Tanggal
    console.log(Tanggal)

    let tanggal = inputDate.value.trim()
    if(!tanggal){
        errMsgDate.textContent = 'Tanggal Harap Diisi'
        errMsgDate.style.color = 'red'
        inputDate.style.borderColor = 'red'
    } else{
        errMsgDate.textContent = 'Tanggal Telah Diisi'
        errMsgDate.style.color = 'green'
        errMsgDate.style.borderColor = 'aqua'
    }
})

