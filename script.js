const typed = new Typed("#typed", {
  strings: [
    "Pembahasan Soal Fungsi Rasional 💡",
    "Asimtot? Domain? Kami Jelaskan Semuanya!",
    "ATM Matematika: Interaktif dan Edukatif 🚀",
  ],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
});

function keluarkanPembahasan(nomor) {
  const id = `pembahasan${nomor}`;
  const el = document.getElementById(id);
  el.classList.add("show");
  const audio = new Audio("flip.mp3");
  audio.play();
}

function toggleFlip(nomor) {
  const card = document.getElementById(`card${nomor}`);
  card.classList.toggle("flipped");
  const audio = new Audio("flipp.mp3");
  audio.play();
}
