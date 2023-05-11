const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-button-prev');
const nextButton = document.querySelector('.carousel-button-next');
let currentIndex = 0;
let startX = 0;
const sensitivity = 50; // Sensibilidade do deslize, valor maior é mais sensível
const interval = 6000; // Intervalo em milissegundos (6 segundos)

// Função para avançar o slide
const nextSlide = () => {
    if (currentIndex < carouselItems.length - 1) {
        currentIndex++;
      } else {
        // Se estiver na última imagem, volta para a primeira imagem
        currentIndex = 0;
      }
      carousel.style.transition = 'transform 0.5s ease-in-out'; // Adiciona transição suave
      carousel.style.transform = `translateX(-${currentIndex * carouselItems[0].offsetWidth}px)`;
    }

// Função para retroceder o slide
const prevSlide = () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = carouselItems.length - 1;
  }
  carousel.style.transform = `translateX(-${currentIndex * carouselItems[0].offsetWidth}px)`;
};

// Adicionar evento de toque (touch) no carrossel
carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener('touchmove', (e) => {
  const diffX = e.touches[0].clientX - startX;
  const translateX = -(currentIndex * carouselItems[0].offsetWidth) + diffX;
  if (translateX <= 0 && translateX >= -(carouselItems.length - 1) * carouselItems[0].offsetWidth) {
    carousel.style.transform = `translateX(${translateX}px)`;
  }
});

carousel.addEventListener('touchend', (e) => {
  const diffX = e.changedTouches[0].clientX - startX;
  if (Math.abs(diffX) > sensitivity) {
    if (diffX > 0 && currentIndex > 0) {
      prevSlide();
    } else if (diffX < 0 && currentIndex < carouselItems.length - 1) {
      nextSlide();
    }
  }
  carousel.style.transform = `translateX(-${currentIndex * carouselItems[0].offsetWidth}px)`;
});

// Adicionar evento de clique nos botões de navegação (prev e next)
prevButton.addEventListener('click', prevSlide);

nextButton.addEventListener('click', nextSlide);

// Função para iniciar o slide automático
const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, interval);
};

// Função para parar o slide automático
const stopAutoSlide = () => {
  clearInterval(autoSlideInterval);
};

let autoSlideInterval = setInterval(() => {
  nextSlide();
}, interval); // Iniciar o slide automático

// Adicionar eventos de mouse (hover) para parar e reiniciar o slide automático
carousel.addEventListener('mouseenter', stopAutoSlide);
carousel.addEventListener('mouseleave', startAutoSlide);