
// burger menu start
const menu = document.querySelector('.menu__body')
const menuBtn = document.querySelector('.menu__icon')

const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
	})

	menu.addEventListener('click', e => {
		if (e.target.classList.contains('menu__body')) {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		}
	})

	menu.querySelectorAll('.menu__link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		})
	})
}

/*===========================================*/

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
		event.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
})

//burger menu end


/*===========================================*/
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();