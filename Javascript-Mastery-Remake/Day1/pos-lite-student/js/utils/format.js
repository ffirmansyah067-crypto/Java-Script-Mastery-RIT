/**
 * FUNGSI: formatKeRupiah
 * Tugas: Mengubah angka polosan 15000 jadi string cantik "Rp 15.000"
 */
export function formatKeRupiah(angka) {
    // Intl adalah fitur bawaan browser yang canggih untuk format bahasa
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',  // Gaya mata uang
        currency: 'IDR',    // Mata uang Rupiah
        minimumFractionDigits: 0 // Tidak usah pakau ,00 di belakang (ribet)
    }).format(angka);
}