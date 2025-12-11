import * as dom from "./dom.js"
import * as format from "./format.js"

const f1 = () => `
DOM: ${dom.f1()}
FORMAT: ${format.f1()}
`

function masak(menuUtama, ...pelengkap) {
    return `
Menu Utama: ${menuUtama}
Pelengkap: ${pelengkap}`
}


const colors = ["Red", "Green", "Blue"]
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor);
console.log(thirdColor);

const user = {
  id: 101,
  name: "Budi",
  email: "budi@mail.com"
};

const {id, name, email} = user;
console.log(id);
console.log(name);
console.log(email);

const product = {
  id: 'A123',
  productName: 'Laptop X',
  price: 7500000
};

const {productName : namaProduk} = product;
console.log(namaProduk);

const settings = {
    theme : 'Dark', 
};

const {theme, language = 'id' } = settings

console.log(theme);
console.log(language);


const employee = {
  name: "Siti",
  job: {
    title: "Software Engineer",
    department: "Tech"
  },
  address: "Jakarta"
};

const { job: { title, department } } = employee;

console.log(title);      
console.log(department);


function goreng(menuAwal, ...tersisa) {
    console.log(menuAwal)
    console.log(...tersisa)
}
goreng ("Nasi Uduk", "Kerupuk", "Telur Dadar", "Oreg Tempe")

export {f1,masak}


const locations = [
  { name: 'Bandung', population: 2.5, region: 'West Java' },
  { name: 'Surabaya', population: 2.9, region: 'East Java' }
];

const [, {name: kotaKedua}] = locations;
console.log(kotaKedua);


const userProfile = {
  id: 404,
  info: {
    username: 'js_master',
    level: 5 
  }
};

const {
    info: {username, lastInfo = 'Never'}
} = userProfile;

console.log(username);
console.log(lastInfo);