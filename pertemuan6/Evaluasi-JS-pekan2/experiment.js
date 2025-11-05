/**
 * Fungsi untuk merekomendasikan genre musik berdasarkan suasana hati (mood).
 */
function rekomendasiMusik() {
    // Meminta input dari pengguna tentang suasana hati mereka
    let mood = prompt("Bagaimana suasana hati Anda saat ini? (contoh: senang, sedih, santai, energik)").toLowerCase();

    // --- Struktur Percabangan IF ELSE IF ELSE ---

    if (mood === "senang" || mood === "energik") {
        // Blok IF pertama: Diperiksa jika mood adalah "senang" ATAU "energik"
        console.log(`🎶 Mood Anda ${mood}! Saya rekomendasikan musik **Pop Ceria** atau **EDM** untuk meningkatkan semangat!`);
    } else if (mood === "sedih" || mood === "galau") {
        // Blok ELSE IF pertama: Diperiksa jika kondisi IF sebelumnya salah, dan mood adalah "sedih" ATAU "galau"
        console.log(`😔 Mood Anda ${mood}. Dengarkan **Musik Klasik** atau **Ballad Akustik** yang menenangkan.`);
    } else if (mood === "santai" || mood === "tenang") {
        // Blok ELSE IF kedua: Diperiksa jika semua kondisi ELSE IF sebelumnya salah, dan mood adalah "santai" ATAU "tenang"
        console.log(`🧘 Mood ${mood} cocok dengan **Jazz Instrumental** atau **Lo-Fi** untuk relaksasi.`);
    } else {
        // Blok ELSE (Jalur default): Dijalankan jika semua kondisi IF dan ELSE IF di atas salah
        console.log("🤔 Suasana hati tidak dikenal. Coba dengarkan **musik pilihan editor** di playlist acak!");
    }
}

function rekomendasiMusik() {
    // Meminta input dari pengguna tentang suasana hati mereka
    let mood = prompt("Bagaimana suasana hati Anda saat ini? (contoh: senang, sedih, santai, energik)").toLowerCase();

    // --- Struktur Percabangan IF ELSE IF ELSE ---

    if (mood === "senang" || mood === "energik") {
        // Blok IF pertama: Diperiksa jika mood adalah "senang" ATAU "energik"
        console.log(`🎶 Mood Anda ${mood}! Saya rekomendasikan musik **Pop Ceria** atau **EDM** untuk meningkatkan semangat!`);
        alert("saya rekomendasikan musik Pop Ceria atau EDM untuk meningkatkan semangat!");
    } else if (mood === "sedih" || mood === "galau") {
        // Blok ELSE IF pertama: Diperiksa jika kondisi IF sebelumnya salah, dan mood adalah "sedih" ATAU "galau"
        console.log(`😔 Mood Anda ${mood}. Dengarkan **Musik Klasik** atau **Ballad Akustik** yang menenangkan.`);
        alert("saya rekomendasikan Musik Klasik atau Ballad Akustik yang menenangkan.");
    } else if (mood === "santai" || mood === "tenang") {
        // Blok ELSE IF kedua: Diperiksa jika semua kondisi ELSE IF sebelumnya salah, dan mood adalah "santai" ATAU "tenang"
        console.log(`🧘 Mood ${mood} cocok dengan **Jazz Instrumental** atau **Lo-Fi** untuk relaksasi.`);
        alert("saya rekomendasikan Jazz Instrumental atau Lo-Fi untuk relaksasi.");
    } else {
        // Blok ELSE (Jalur default): Dijalankan jika semua kondisi IF dan ELSE IF di atas salah
        console.log("🤔 Suasana hati tidak dikenal. Coba dengarkan **musik pilihan editor** di playlist acak!");
        alert("suasana hati tidak dikenal. Coba dengarkan musik pilihan editor di playlist acak!");
    }
    alert("Terima kasih telah menggunakan layanan rekomendasi musik kami!");
}