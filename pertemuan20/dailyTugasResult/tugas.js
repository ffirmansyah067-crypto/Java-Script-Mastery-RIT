// CHALLENGE 1-5: Basic querySelector & Manipulation
// Challenge 1: Memahami querySelector - Select Elements
// Task 1.1: Select Element dengan ID

// ❌ KODE INI BELUM SEMPURNA - COBA DIPERBAIKI!

// const welcomeSection = querySelector('welcome-section');
// console.log(welcomeSection);

// const myButton = document.querySelector('action-button');
// console.log(myButton);

// 1. Yang pertama kurang document
// 2. Kurang #
// 3. Jadi perbaikannya
const welcomeSection = document.querySelector('#welcome-section');
console.log(welcomeSection);

const myButton = document.querySelector('#action-button');
console.log(myButton);


// Task 1.2: Select Element dengan Class

const firstParagraph = document.querySelector('.description');

const firstCard = document.querySelector('.card')// ← FILL THIS!
  
console.log(firstParagraph);
console.log(firstCard) // console.log(firstCard); ← UNCOMMENT & EDIT
// (.) Pada selector digunakan untuk class
// Sedangkan (#) Digunakan untuk id


// Task 1.3: Select SEMUA Element dengan querySelectorAll

const allParagraphs = document.querySelectorAll('.description')// ← SELECT SEMUA .description

console.log(allParagraphs); 
console.log(allParagraphs.length); // Berapa jumlahnya? "2"

console.log(allParagraphs[0]); // Paragraf pertama
console.log(allParagraphs[1]); // ← FIX THIS: Paragraf kedua
console.log(allParagraphs[2]); // Akses index ketiga undifine karena pada HTML hanya ada dua paragtaf

const allCards = document.querySelectorAll('.card');
console.log(allCards.length); // 3


// Task 1.4: Loop Semua Elements
const allCards2 = document.querySelectorAll('.card');
allCards2.forEach(function(card) {
  console.log(card.textContent); 
});

const allParagraphs2 = document.querySelectorAll('.description')
allParagraphs2.forEach(function(description){
    console.log(description.textContent)
});


//  Task 1.5: Kombinasi - Select dan Loop
