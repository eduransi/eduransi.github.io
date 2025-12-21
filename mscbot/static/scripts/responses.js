function getBotResponse(input) {
  //rock paper scissors
  input = input.trim().toLowerCase();

  if (input == "batu") {
    return "kertas";
  } else if (input == "kertas") {
    return "gunting";
  } else if (input == "gunting") {
    return "batu";
  }

  if (input == "mulai") {
    return "Halo! 🙌<br/>Aku <b>EduBot</b>, bot pemandu di website <b>EduRansi</b>.<br/><br/>EduRansi adalah website edukasi asuransi yang bertujuan meningkatkan literasi dan pemahaman asuransi bagi remaja dan masyarakat umum dengan cara yang sederhana, interaktif, dan mudah dipahami.<br/><br/>Kalau kamu bingung mau mulai dari mana, ketik <b>'kata kunci'</b> ya 😊";
  } else if (input.indexOf("eduransi") >= 0) {
    return "EduRansi adalah platform edukasi asuransi yang membantu kamu memahami konsep dasar, manfaat, jenis-jenis asuransi, serta pentingnya perlindungan finansial sejak dini.";
  } else if (input.indexOf("tujuan") >= 0) {
    return "Tujuan EduRansi adalah meningkatkan literasi asuransi, menumbuhkan kesadaran akan pentingnya perlindungan finansial, serta membentuk generasi muda yang cerdas dan siap menghadapi risiko.";
  } else if (input.indexOf("alasan") >= 0 || input.indexOf("latar") >= 0) {
    return "Rendahnya literasi asuransi di Indonesia membuat banyak orang belum memahami pentingnya perlindungan risiko. EduRansi hadir sebagai solusi edukatif yang mudah diakses oleh generasi muda.";
  } else if (input.indexOf("asuransi") >= 0) {
    return "Asuransi adalah mekanisme perlindungan finansial untuk mengurangi risiko kerugian akibat kejadian tidak terduga, seperti sakit, kecelakaan, kebakaran, atau kematian.";
  } else if (input.indexOf("manfaat") >= 0) {
    return "Manfaat asuransi antara lain:<br/>1. Perlindungan finansial<br/>2. Mengurangi risiko kerugian besar<br/>3. Memberikan rasa aman<br/>4. Membantu perencanaan keuangan jangka panjang";
  } else if (input.indexOf("jenis") >= 0) {
    return "Beberapa jenis asuransi yang umum dikenal:<br/>1. Asuransi kesehatan<br/>2. Asuransi jiwa<br/>3. Asuransi kendaraan<br/>4. Asuransi pendidikan<br/>5. Asuransi properti";
  } else if (input.indexOf("remaja") >= 0) {
    return "Remaja juga perlu memahami asuransi agar memiliki kesadaran finansial sejak dini dan siap menghadapi risiko di masa depan.";
  } else if (input.indexOf("fitur") >= 0) {
    return "Fitur yang tersedia di EduRansi antara lain:<br/>1. Materi edukasi asuransi<br/>2. Kuis interaktif<br/>3. Pojok baca<br/>4. Bot EduBot<br/>5. Konten edukatif ringan";
  } else if (input.indexOf("kuis") >= 0) {
    return "Kuis EduRansi dirancang untuk menguji pemahaman kamu tentang asuransi dengan cara yang seru dan menantang 🎯";
  } else if (input.indexOf("pembuat") >= 0 || input.indexOf("pencipta") >= 0) {
    return "EduBot dibuat oleh tim EduRansi sebagai bagian dari inovasi edukasi asuransi untuk generasi muda.";
  } else if (input.indexOf("kata kunci") >= 0 || input.indexOf("kunci") >= 0) {
    return "Kamu bisa coba ketik kata kunci berikut:<br/><br/>• mulai<br/>• eduransi<br/>• tujuan<br/>• alasan<br/>• asuransi<br/>• manfaat<br/>• jenis asuransi<br/>• fitur<br/>• kuis<br/>• remaja<br/><br/>Tips:<br>1. Hindari typo<br/>2. Coba kata lain jika belum sesuai 😊";
  } else if (input.indexOf("pagi") >= 0) {
    return "Selamat pagi ☀️ Semoga harimu menyenangkan! Ada yang bisa EduBot bantu?";
  } else if (input.indexOf("siang") >= 0) {
    return "Selamat siang 🌤️ Ada yang ingin kamu tanyakan tentang asuransi?";
  } else if (input.indexOf("sore") >= 0) {
    return "Selamat sore 🌇 Yuk tambah wawasan asuransi bareng EduBot!";
  } else if (input.indexOf("malam") >= 0) {
    return "Selamat malam 🌙 Jangan lupa belajar asuransi walau sebentar ya 😊";
  } else {
    return "Maaf, EduBot belum memahami pertanyaanmu karena kata tersebut belum ada di database 😅<br/><br/>Coba:<br/>1. Gunakan kata kunci lain<br/>2. Periksa ejaan <br/><br/>EduBot masih dalam tahap pengembangan";
  }
}
