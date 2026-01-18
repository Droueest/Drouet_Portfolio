
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-item");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const captionEl = document.getElementById("carousel-caption");

let index = 0;

const captions =
[
    {title: "Ado1", desc: "Ado1descr"},
    {title: "Ado2", desc: "Ado2descr"},
    {title: "L'histoire", desc: "Je possède une passion pour découvrir l'histoire d'à peu près chaque partie du monde et chaque période."}
];


function updateCaption() {
  if (!slides.length || !captionEl) return;
  const c = captions[index] || {};
  captionEl.innerHTML = `
    <h2>${c.title ?? ""}</h2>
    <p>${c.desc ?? ""}</p>
  `;
}


function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
  updateCaption();
}

if (track && slides.length && nextBtn && prevBtn) {
  nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateCarousel();
clearInterval(int)
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  setInterval(() => {
    index = (index + 1) % slides.length;
    updateCarousel();
  }, 5000);
}

updateCarousel();
