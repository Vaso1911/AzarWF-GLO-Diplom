import { Slider } from "../slider";

export const sliderPorfolio = () => {
  const sliderBlock = document.querySelector('.portfolio-slider');
  const slider = new Slider(sliderBlock, 'portfolio-slider__slide')
  const arrowLeft = document.getElementById('portfolio-arrow_left');
  const arrowRight = document.getElementById('portfolio-arrow_right');

  let visibleSlides = 3;
  let currentIndex = 0;

  arrowLeft.style.display = 'none';

  const updateArrows = () => {
    arrowLeft.style.display = currentIndex === 0 ? 'none' : 'flex';
    arrowRight.style.display =
      currentIndex + visibleSlides >= slider.slides.length ? 'none' : 'flex';
  };


  const hideSlides = () => {
    slider.slides.forEach((slide, index) => {
      if (index < currentIndex || index >= currentIndex + visibleSlides) {
        slide.classList.add('dis-none');
      } else {
        slide.classList.remove('dis-none');
      }
    });
  };

  arrowRight.addEventListener('click', () => {
    if (currentIndex + visibleSlides < slider.slides.length) {
      currentIndex++;
      hideSlides();
      updateArrows();
    }
  });

  arrowLeft.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      hideSlides();
      updateArrows();
    }
  });

  updateArrows();
  hideSlides();


  const popup = document.querySelector('.popup-portfolio')
  const popupText = document.querySelectorAll('.popup-portfolio-text')
  const btnSlide = document.querySelectorAll('.portfolio-slider__slide-frame')

  btnSlide.forEach((el, i) => {
    el.addEventListener('click', (e) => {
      const click = e.target
      console.dir(click);
      console.log(popupText);

popup.classList.add('vis')
    })
  })
}