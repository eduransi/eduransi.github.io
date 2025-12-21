// NAVBAR START
fetch("/navbar.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("navbar").innerHTML = html;

    // 🔥 INI KUNCI
    feather.replace();
    initNavbar();
  })
  .catch((err) => console.error(err));
//NAVBAR END

// ===== FUNGSI NAVBAR =====
function initNavbar() {
  const navbarNav = document.querySelector(".navbar-nav");
  const hamburger = document.querySelector("#hamburger-menu");

  if (!navbarNav || !hamburger) return;

  // Klik hamburger
  hamburger.onclick = (e) => {
    navbarNav.classList.toggle("active");
    e.preventDefault();
  };

  // Klik di luar navbar
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  });
}

// FOOTER START
fetch("/footer.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("footer").innerHTML = html;

    // 🔥 INI KUNCI
    feather.replace();
  })
  .catch((err) => console.error(err));
// FOOTER END

// DAFTAR ISI START
document.querySelectorAll(".chapter-header").forEach((header) => {
  header.addEventListener("click", () => {
    const chapter = header.parentElement;
    chapter.classList.toggle("open");
  });
});
// DAFTAR ISI END

// KUIS START
const checkBtn = document.getElementById("checkQuiz");
const modal = document.getElementById("modal");
const title = document.getElementById("modalTitle");
const text = document.getElementById("modalText");
const retry = document.getElementById("retry");

checkBtn.addEventListener("click", () => {
  const cards = document.querySelectorAll(".quiz-card");
  let correct = 0;

  cards.forEach((card) => {
    card.classList.remove("correct", "wrong");
    const answer = card.dataset.answer;
    const selected = card.querySelector("input:checked");

    if (selected && selected.value === answer) {
      correct++;
      card.classList.add("correct");
    } else {
      card.classList.add("wrong");
    }
  });

  title.textContent = correct === cards.length ? "Hebat! 🎉" : "Hasil Kuis";
  text.textContent = `Kamu menjawab benar ${correct} dari ${cards.length} soal.`;
  modal.style.display = "flex";
});

retry.addEventListener("click", () => {
  document
    .querySelectorAll("input[type=radio]")
    .forEach((r) => (r.checked = false));
  document
    .querySelectorAll(".quiz-card")
    .forEach((c) => c.classList.remove("correct", "wrong"));
  modal.style.display = "none";
});
// KUIS END
