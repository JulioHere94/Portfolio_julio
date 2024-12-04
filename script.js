const container = document.querySelector('.projetos__container');
const items = document.querySelectorAll('.projetos__item'); // Seleciona os itens do carrossel
const prevButton = document.querySelector('.carousel__button--left');
const nextButton = document.querySelector('.carousel__button--right');

let currentIndex = 0;

// Função para atualizar a posição do carrossel
function updateCarousel() {
  const offset = -currentIndex * 100; // Cada item ocupa 100% da largura
  container.style.transform = `translateX(${offset}%)`;
}

// Botões de navegação
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

// Inicializar o carrossel na posição inicial
updateCarousel();

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".menu__toggle");
  const menuList = document.querySelector(".menu__list");

  toggleButton.addEventListener("click", () => {
    menuList.classList.toggle("active");
  });
});

