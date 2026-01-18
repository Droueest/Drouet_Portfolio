
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-item");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const captionEl = document.getElementById("carousel-caption");

let index = 0;
let slideWidth = 0;
let autoPlayInterval;

const captions =
[
    {title: "Jeux vidéos", desc: "Depuis tout petit, j'ai toujours aimé jouer aux jeux vidéo, que ce soit sur console ou sur PC. Mes styles de jeux préférés sont les FPS/TPS, les jeux de stratégie et les jeux d'horreur."},
    {title: "Musique", desc: "J'aime tout style de musique en ayant tout de même une préférence pour la pop et un grand écœurement pour le rap français. La photo se trouvant juste au-dessus représente ma chanteuse préférée se prénommant Ado."},
    {title: "L'histoire", desc: "Je possède une passion pour découvrir l'histoire d'à peu près chaque partie du monde et chaque période. Mes périodes préférées sont les deux premières guerres mondiales, les guerres napoléoniennes et les mythologies grecques et égyptiennes."},
    {title: "Animations/Films/Manga", desc: "J'apprécie énormément tous ces médias, mais je préfère tout de même du contenu fait en animation 2D/3D, comme par exemple les films Dragon, Hazbin Hotel, etc."},
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
  track.style.transform = `translateX(-${index * slideWidth}%)`;
  updateCaption();
}

function startAutoPlay() {
  clearInterval(autoPlayInterval);
  autoPlayInterval = setInterval(() => {
    index = (index + 1) % slides.length;
    updateCarousel();
  }, 7000);
}

if (track && slides.length && nextBtn && prevBtn) {
  // Définir la largeur du track et de chaque slide
  slideWidth = 100 / slides.length;
  track.style.width = `${slides.length * 100}%`;
  
  slides.forEach(slide => {
    slide.style.width = `${slideWidth}%`;
  });
  
  nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateCarousel();
    startAutoPlay();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
    startAutoPlay();
  });

  startAutoPlay();
}

updateCarousel();