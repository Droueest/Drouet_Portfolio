const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-item");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;

function updateCarousel()
{
    track.computedStyleMap.transform = 'translateX(-${index * 100}%)';
}

nextBtn.addEventListener("click", () => 
    {
        index = (index+1) % slides.length; 
        updateCarousel();       
    });

prevBtn.addEventListener("click", () => 
    {
        index = (index - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    setInterval(() =>
        {
            index = (index+1)% slides.length;
            updateCarousel();
        }, 5000);