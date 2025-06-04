const movies = [
  {
    title: "Agak Laen",
    genre: "horor",
    rating: 7.6,
    poster: "images/agak_laen.jpg",
    synopsis: "Empat sahabat mengelola rumah hantu yang berubah menjadi viral setelah kejadian tak terduga.",
    platform: "Netflix"
  },
  {
    title: "Vina: Sebelum 7 Hari",
    genre: "horor",
    rating: 5.3,
    poster: "images/vina_sebelum_7_hari.jpg",
    synopsis: "Kisah nyata tentang seorang gadis yang mengalami teror setelah kematiannya.",
    platform: "Bioskop"
  },
  {
    title: "Sewu Dino",
    genre: "horor",
    rating: 6.7,
    poster: "images/sewu_dino.jpg",
    synopsis: "Seorang wanita muda terlibat dalam ritual pembersihan untuk menghilangkan kutukan seribu hari.",
    platform: "Bioskop"
  },
  {
    title: "Dancing Village: The Curse Begins",
    genre: "horor",
    rating: 6.5,
    poster: "images/dancing_village.jpg",
    synopsis: "Prekuel dari 'KKN di Desa Penari' yang mengungkap asal-usul teror Badarawuhi.",
    platform: "Bioskop"
  },
  {
    title: "Lampir",
    genre: "horor",
    rating: 6.0,
    poster: "images/lampir.jpg",
    synopsis: "Adaptasi legenda Mak Lampir yang mengisahkan wanita yang menginginkan keabadian.",
    platform: "Bioskop"
  },
  {
    title: "Sekawan Limo",
    genre: "komedi",
    rating: 7.0,
    poster: "images/sekawan_limo.jpg",
    synopsis: "Lima sahabat menghadapi kejadian lucu dan menegangkan di desa mereka.",
    platform: "Bioskop"
  },
  {
    title: "Rumah Dinas Bapak",
    genre: "komedi",
    rating: 6.8,
    poster: "images/rumah_dinas_bapak.jpg",
    synopsis: "Kisah lucu tentang keluarga yang pindah ke rumah dinas dengan kejadian aneh.",
    platform: "Bioskop"
  },
  {
    title: "Kang Mak from Pee Mak",
    genre: "komedi",
    rating: 6.5,
    poster: "images/kang_mak.jpg",
    synopsis: "Adaptasi dari film Thailand 'Pee Mak' dengan sentuhan budaya lokal.",
    platform: "Bioskop"
  },
  {
    title: "Dul Muluk Dul Malik",
    genre: "komedi",
    rating: 6.7,
    poster: "images/dul_muluk_dul_malik.jpg",
    synopsis: "Cerita rakyat Sumatra Selatan yang diangkat dengan nuansa komedi.",
    platform: "Bioskop"
  },
  {
    title: "Konco-Konco Edan",
    genre: "komedi",
    rating: 6.9,
    poster: "images/konco_konco_edan.jpg",
    synopsis: "Sekelompok teman menghadapi kejadian konyol saat liburan bersama.",
    platform: "Bioskop"
  },
  {
    title: "Seni Memahami Kekasih",
    genre: "romantis",
    rating: 7.2,
    poster: "images/seni_memahami_kekasih.jpg",
    synopsis: "Sepasang kekasih belajar memahami satu sama lain dalam hubungan mereka.",
    platform: "Bioskop"
  },
  {
    title: "Guna-guna Istri Muda",
    genre: "horor",
    rating: 6.4,
    poster: "images/guna_guna_istri_muda.jpg",
    synopsis: "Seorang istri muda menggunakan ilmu hitam untuk merebut suami orang.",
    platform: "Bioskop"
  },
  {
    title: "Kemah Terlarang: Kesurupan Massal",
    genre: "horor",
    rating: 6.3,
    poster: "images/kemah_terlarang.jpg",
    synopsis: "Perkemahan siswa yang berubah menjadi mimpi buruk karena kesurupan massal.",
    platform: "Bioskop"
  },
  {
    title: "Tebusan Dosa",
    genre: "horor",
    rating: 6.1,
    poster: "images/tebusan_dosa.jpg",
    synopsis: "Seorang pria menghadapi konsekuensi dari dosa masa lalunya.",
    platform: "Bioskop"
  },
  {
    title: "Kuasa Gelap",
    genre: "horor",
    rating: 6.0,
    poster: "images/kuasa_gelap.jpg",
    synopsis: "Kisah tentang kekuatan gelap yang mengancam sebuah keluarga.",
    platform: "Bioskop"
  },
  {
    title: "Perewangan",
    genre: "horor",
    rating: 6.2,
    poster: "images/perewangan.jpg",
    synopsis: "Praktik pesugihan yang membawa malapetaka bagi sebuah keluarga.",
    platform: "Bioskop"
  },
  {
    title: "Modal Nekad",
    genre: "komedi",
    rating: 6.8,
    poster: "images/modal_nekad.jpg",
    synopsis: "Seorang pria nekat mengejar mimpinya meski tanpa modal.",
    platform: "Bioskop"
  },
  {
    title: "Setengah Hati",
    genre: "romantis",
    rating: 7.0,
    poster: "images/setengah_hati.jpg",
    synopsis: "Perjalanan cinta yang penuh liku antara dua insan.",
    platform: "Bioskop"
  },
  {
    title: "Ancika: Dia yang Bersamaku 1995",
    genre: "romantis",
    rating: 7.3,
    poster: "images/ancika.jpg",
    synopsis: "Kisah cinta remaja yang manis dan mengharukan di tahun 1995.",
    platform: "Bioskop"
  },
  {
    title: "Suami yang Lain",
    genre: "romantis",
    rating: 6.5,
    poster: "images/suami_yang_lain.jpg",
    synopsis: "Seorang wanita menghadapi dilema cinta dan pernikahan.",
    platform: "Bioskop"
  },
  {
    title: "Sehidup Semati",
    genre: "horor",
    rating: 6.9,
    poster: "images/sehidup_semati.jpg",
    synopsis: "Pernikahan yang berubah menjadi mimpi buruk karena rahasia kelam.",
    platform: "Bioskop"
  },
  {
    title: "Kereta Berdarah",
    genre: "horor",
    rating: 6.6,
    poster: "images/kereta_berdarah.jpg",
    synopsis: "Perjalanan kereta yang berubah menjadi teror mencekam.",
    platform: "Bioskop"
  },
  {
    title: "Hello Ghost",
    genre: "komedi",
    rating: 6.8,
    poster: "images/hello_ghost.jpg",
    synopsis: "Seorang pria yang bisa melihat hantu-hantu lucu setelah mencoba bunuh diri.",
    platform: "Netflix"
  },
  {
    title: "Ghost Writer 2",
    genre: "komedi",
    rating: 6.7,
    poster: "images/ghost_writer_2.jpg",
    synopsis: "Penulis yang kembali berurusan dengan hantu-hantu dalam kehidupannya.",
    platform: "Bioskop"
  },
  {
    title: "Modal Nekad",
    genre: "komedi",
    rating: 6.8,
    poster: "images/modal_nekad.jpg",
    synopsis: "Seorang pria nekat mengejar mimpinya meski tanpa modal.",
    platform: "Bioskop"
  }
];


function displayMovies(filterGenre = "all") {
  const container = document.getElementById("movie-container");
  container.innerHTML = "";

  const filtered = filterGenre === "all" ? movies : movies.filter(m => m.genre === filterGenre);

  filtered.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">
      <h4>${movie.title}</h4>
      <p><strong>Rating:</strong> ⭐ ${movie.rating}</p>
      <p><strong>Sinopsis:</strong> ${movie.synopsis}</p>
      <p><strong>Tayang di:</strong> ${movie.platform}</p>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  if (path.includes("semua-film.html")) {
    displayMovies("all");
  } else if (path.includes("horor.html")) {
    displayMovies("horor");
  } else if (path.includes("romantis.html")) {
    displayMovies("romantis");
  } else if (path.includes("komedi.html")) {
    displayMovies("komedi");
  }
});
