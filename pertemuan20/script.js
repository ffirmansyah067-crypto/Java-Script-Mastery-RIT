const input = document.getElementById("namaInput");
const teks = document.getElementById("tampilanNama");

// Event 'input' mendeteksi setiap perubahan karakter
input.addEventListener("input", function() {
  // Ambil nilai yang sedang diketik
  const isiKetik = input.value;
  
  // Masukkan ke dalam teks
  teks.textContent = isiKetik;
});



// 1. Tangkap elemennya dulu
const tombol = document.getElementById("tombolAjaib");

// 2. Pasang "telinga" (Event Listener)
tombol.addEventListener("click", function() {
  // 3. Tentukan aksinya
  document.body.style.backgroundColor = "pink";
  alert("Warna telah diubah!");
});


const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function() {
  alert('Anjay')
});


let count = 0;
const btn2 = document.getElementById('btn2');
const counter = document.getElementById('counter');

btn2.addEventListener('click', function() {
  count++;
  counter.textContent = `Count: ${count}`;
});


const btn3 = document.getElementById('btn3');
const box3 = document.getElementById('box3');

btn3.addEventListener('click', function() {
  box3.classList.toggle('dark');
});


const box4 = document.getElementById('box4');

box4.addEventListener('mouseenter', function() {
  this.textContent = 'Mouse Masuk!';
  this.style.backgroundColor = 'orange';
});

box4.addEventListener('mouseleave', function() {
  this.textContent = 'Hover Saya';
  this.style.backgroundColor = 'skyblue';
});


const form5 = document.getElementById('form5');
const result5 = document.getElementById('result5');

form5.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name5').value;
  result5.textContent = `Halo, ${name}!`;
  form5.reset();
});


const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
const search6 = document.getElementById('search6');
const results6 = document.getElementById('results6');

search6.addEventListener('input', function() {
  results6.innerHTML = '';
  const query = this.value.toLowerCase();
  
  fruits.forEach(fruit => {
    if (fruit.toLowerCase().includes(query)) {
      const li = document.createElement('li');
      li.textContent = fruit;
      results6.appendChild(li);
    }
  });
});


const list7 = document.getElementById('list7');

list7.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.textContent += ' ✓';
  }
});


const input9 = document.getElementById('input9');
const keyInfo9 = document.getElementById('key-info9');

input9.addEventListener('keydown', function(e) {
  keyInfo9.textContent = `Key: ${e.key} (Code: ${e.code})`;
});


const input10 = document.getElementById('input10');
const btn10 = document.getElementById('btn10');
const list10 = document.getElementById('list10');

function addItem() {
  if (input10.value.trim()) {
    const li = document.createElement('li');
    li.textContent = input10.value;
    list10.appendChild(li);
    input10.value = '';
  }
}

input10.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') addItem();
});

btn10.addEventListener('click', addItem);


const input11 = document.getElementById('input11');

input11.addEventListener('focus', function() {
  this.classList.add('focused');
  console.log('Input fokus');
});

input11.addEventListener('blur', function() {
  this.classList.remove('focused');
  console.log('Input blur');
});