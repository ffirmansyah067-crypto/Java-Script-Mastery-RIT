const BASE_URL = 'https://api.myquran.com/v2/';

export async function searchCity(keyword) {const res = await fetch(`${BASE_URL}sholat/kota/cari/${keyword}`);
  if (!res.ok) throw new Error('Gagal mencari kota');
  return res.json();}
export async function getCityById(id) {const res = await fetch(`${BASE_URL}sholat/kota/:id/${id}`);
 if (!res.ok) throw new Error('Gagal mencari id');
return res.json();}
export async function getDailySchedule(cityId, dateString) {const res = await fetch(`${BASE_URL}sholat/jadwal/:kota/:date/${cityId, dateString}`);
if (!res.ok) throw new Error('Gagal memuat jadwal harian');
return res.json();}
export async function getMonthlySchedule(cityId, year, month) {const res = await fetch(`${BASE_URL}sholat/jadwal/:kota/:tahun/:bulan/${cityId, year, month}`);
if (!res.ok) throw new Error('Gagal memuat jawal bulanan');
return res.json();}
export async function getRandomAyat() {const res = await fetch (`${BASE_URL}quran/ayat/acak/`);
if (!res.ok) throw new Error('Gagal memuat ayat');
return res.json();}
export async function getRandomHaditsArbain() {const res = await fetch(`${BASE_URL}hadits/arbain/acak/`);
if (!res.ok) throw new Error('Gagal memuat hadist');
return res.json();}
export async function getRandomDoa() {const res = await fetch(`${BASE_URL}doa/acak/`);
if (!res.ok) throw new Error('Gagal memuat doa');
return res.json();}
export async function getRandomAsmaulHusna() {const res = await fetch(`${BASE_URL}husna/acak/`);
if (!res.ok) throw new Error('Gagal memuat Asmaul Husna');
return res.json();}

