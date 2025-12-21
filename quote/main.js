let btn = document.getElementById("btn");
let output = document.getElementById("output");
let tokoh = document.getElementById("tokoh");
let quotes = [
  '"Kita tidak pernah tahu apa yang akan terjadi di masa depan, namun dengan asuransi, kita dapat memastikan masa depan tidak sepenuhnya dikuasai oleh risiko."<br/><span>EduRansi</span>',

  '"Asuransi mengajarkan bahwa kehati-hatian hari ini adalah bentuk kebijaksanaan untuk melindungi kehidupan esok hari."<br/><span>Benjamin Franklin</span>',

  '"Risiko adalah bagian dari hidup, tetapi keputusan untuk mengelolanya melalui asuransi adalah tanda kedewasaan dalam berpikir."<br/><span>Peter Drucker</span>',

  '"Asuransi tidak menghilangkan masalah, namun memberi ruang bagi manusia untuk bangkit tanpa kehilangan segalanya."<br/><span>EduRansi</span>',

  '"Orang bijak tidak menunggu musibah datang untuk belajar pentingnya perlindungan dan perencanaan finansial."<br/><span>EduRansi</span>',

  '"Asuransi adalah bentuk tanggung jawab, bukan hanya untuk diri sendiri, tetapi juga untuk orang-orang yang kita cintai."<br/><span>Dave Ramsey</span>',

  '"Ketika ketidakpastian menjadi bagian dari kehidupan, asuransi hadir sebagai penopang agar hidup tetap berjalan."<br/><span>EduRansi</span>',

  '"Perlindungan yang baik bukan berasal dari keberuntungan, melainkan dari keputusan sadar untuk mempersiapkan diri."<br/><span>Stephen R. Covey</span>',

  '"Asuransi adalah bukti bahwa manusia belajar dari risiko dan memilih untuk tidak menyerahkan masa depan pada nasib semata."<br/><span>EduRansi</span>',

  '"Lebih baik bersiap menghadapi sesuatu yang mungkin tidak terjadi, daripada menyesal saat sesuatu itu benar-benar datang."<br/><span>EduRansi</span>',

  '"Asuransi mengubah ketidakpastian menjadi perencanaan, dan kecemasan menjadi ketenangan pikiran."<br/><span>Warren Buffett</span>',

  '"Hidup selalu mengandung risiko, tetapi ketenangan hidup datang dari kesiapan menghadapinya."<br/><span>EduRansi</span>',

  '"Asuransi bukan tentang seberapa besar ketakutan kita, melainkan seberapa besar kepedulian kita terhadap masa depan."<br/><span>EduRansi</span>',

  '"Perencanaan finansial yang baik selalu menyertakan perlindungan, karena risiko tidak pernah meminta izin untuk datang."<br/><span>EduRansi</span>',

  '"Asuransi membantu manusia tetap berdiri tegak bahkan ketika keadaan berusaha menjatuhkannya."<br/><span>EduRansi</span>',

  '"Dengan asuransi, kita tidak membeli rasa takut, tetapi membeli rasa aman dan harapan untuk tetap melangkah."<br/><span>EduRansi</span>',

  '"Ketika risiko datang tanpa peringatan, asuransi menjadi penyangga yang menjaga hidup tetap seimbang."<br/><span>EduRansi</span>',

  '"Asuransi mengajarkan bahwa kesiapan adalah bentuk kecerdasan, bukan tanda pesimisme."<br/><span>EduRansi</span>',

  '"Melindungi diri sejak dini adalah keputusan kecil yang dapat menyelamatkan masa depan yang besar."<br/><span>EduRansi</span>',
];

let author = ["<style>.quote-box #tokoh::before {content:none;}</style>"];

btn.addEventListener("click", function () {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  output.innerHTML = randomQuote;
  tokoh.innerHTML = author;
});
