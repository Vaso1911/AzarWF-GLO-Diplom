import { Slider } from "../slider";

export const sliderPorfolio = () => {
  const sliderBlock = document.querySelector('.portfolio-slider');
  const slider = new Slider(sliderBlock, 'portfolio-slider__slide')
  const arrowLeft = document.getElementById('portfolio-arrow_left');
  const arrowRight = document.getElementById('portfolio-arrow_right');
  const popup = document.querySelector('.popup-portfolio')
  const btnSlide = document.querySelectorAll('.portfolio-slider__slide-frame')
  const imgPopupSlide = document.querySelectorAll('.popup-portfolio-slider__slide')
  const arrowPopupRight = document.getElementById('popup_portfolio_right')
  const arrowPopupLeft = document.getElementById('popup_portfolio_left')
  const counter = document?.getElementById('popup-portfolio-counter')
  const currentCounter = counter.querySelector('.slider-counter-content__current')
  const totalCounter = counter.querySelector('.slider-counter-content__total')
  const sliders = document?.querySelectorAll('.popup-portfolio-slider__slide')
  totalCounter.textContent = sliders.length

  let visibleSlides = 3;
  let currentIndex = 0;

  arrowLeft.style.display = 'none';

  imgPopupSlide.forEach((el, i) => {
    el.setAttribute('data-popup-img', `${i + 1}`)
    el.classList.add('dis-none')
  })

  btnSlide.forEach((el, i) => {
    let num = i
    if (i >= 10) {
      num = i % 10
    }
    el.setAttribute('data-portfolio-btn', `${num + 1}`)
    el.addEventListener('click', (e) => {
      popup.classList.add('vis')
      showPopupSlider(e)
    })
  })

  const updateArrows = () => {
    arrowLeft.style.display = currentIndex === 0 ? 'none' : 'flex';
    arrowRight.style.display =
      currentIndex + visibleSlides >= slider.slides.length ? 'none' : 'flex';
    if ((window.innerWidth <= 575)) {
      arrowRight.style.display = 'none'
    }
  };


  const hiddenSlides = () => {
    slider.slides.forEach((slide, index) => {
      if (index < currentIndex || index >= currentIndex + visibleSlides) {
        slide.classList.add('dis-none');
      } else {
        slide.classList.remove('dis-none');
      }
    });
  };

  const showPopupSlider = (e) => {
    const click = e.currentTarget.dataset.portfolioBtn
    const popupImg = document.querySelector(`[data-popup-img="${click}"]`)
    const popupText = document.querySelector(`[data-portfolio-text="${click}"]`)
    popupImg.classList.add('dis-block')
    popupText.classList.add('dis-block')
  }

  const hiddenPopupSlider = () => {
    const popupImg = document.querySelectorAll(`[data-popup-img]`)
    const popupText = document.querySelectorAll(`[data-portfolio-text]`)
    popupImg.forEach(el => {
      el.classList.remove('dis-block')
    })
    popupText.forEach(el => {
      el.classList.remove('dis-block')
    })
  }

  const nextPopupSlide = () => {
    const activePopupImg = document.querySelector('.popup-portfolio-slider__slide.dis-block');
    if (activePopupImg) {
      const currentDataset = parseInt(activePopupImg.dataset.popupImg);
      const nextDataset = currentDataset + 1;
      const activePopupText = document.querySelector(`[data-portfolio-text="${currentDataset}"]`);
      const nextPopupImg = document.querySelector(`[data-popup-img="${nextDataset}"]`);
      const nextPopupText = document.querySelector(`[data-portfolio-text="${nextDataset}"]`);

      if (nextPopupImg && nextPopupText) {
        activePopupImg.classList.remove('dis-block');
        activePopupText.classList.remove('dis-block');
        nextPopupImg.classList.add('dis-block');
        nextPopupText.classList.add('dis-block');
      }
      if (nextDataset <= sliders.length) {
        currentCounter.textContent = nextDataset
      }
    }
  }
  const prevPopupSlide = () => {
    const activePopupImg = document.querySelector('.popup-portfolio-slider__slide.dis-block');
    if (activePopupImg) {
      const currentDataset = parseInt(activePopupImg.dataset.popupImg);
      const prevDataset = currentDataset - 1;
      const activePopupText = document.querySelector(`[data-portfolio-text="${currentDataset}"]`);
      const prevPopupImg = document.querySelector(`[data-popup-img="${prevDataset}"]`);
      const prevPopupText = document.querySelector(`[data-portfolio-text="${prevDataset}"]`);

      if (prevPopupImg && prevPopupText) {
        activePopupImg.classList.remove('dis-block');
        activePopupText.classList.remove('dis-block');
        prevPopupImg.classList.add('dis-block');
        prevPopupText.classList.add('dis-block');
      }
      if(prevDataset != 0 ) {
        currentCounter.textContent = prevDataset
      }
    }
  }

  arrowRight.addEventListener('click', () => {
    if (currentIndex + visibleSlides < slider.slides.length) {
      currentIndex++;
      hiddenSlides();
      updateArrows();
    }
  });

  arrowLeft.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      hiddenSlides();
      updateArrows();
    }
  });

  popup.addEventListener('click', (e) => {
    const popupDialog = e.target.closest('.popup-dialog-portfolio')
    const close = e.target.closest('.close')

    if (!popupDialog || close) {
      popup.classList.remove('vis')
      hiddenPopupSlider()
    }
  })

  arrowPopupRight.addEventListener('click', nextPopupSlide)

  arrowPopupLeft.addEventListener('click', prevPopupSlide)

  updateArrows();
  hiddenSlides();

  if (window.innerWidth <= 575) {
    const counter = document.getElementById('portfolio-counter')
    const currentCounter = counter.querySelector('.slider-counter-content__current')
    const totalCounter = counter.querySelector('.slider-counter-content__total')
    const sliderMobile = document.querySelector('.portfolio-slider-mobile')
    const slides = sliderMobile.querySelectorAll('.portfolio-slider__slide-frame')
    const btnRightSlider = document.getElementById('portfolio-arrow-mobile_right')
    const btnLeftSlider = document.getElementById('portfolio-arrow-mobile_left')
    currentCounter.textContent = '1'
    totalCounter.textContent = slides.length
    slides.forEach(el => {
      el.classList.add('dis-none')
    })

    slides[0].classList.remove('dis-none')
    slides[0].classList.add('dis-block')

    const slideNext = () => {
      const activeSlide = document.querySelector('.portfolio-slider__slide-frame.dis-block');
      if (activeSlide) {
        const currentDataset = parseInt(activeSlide.dataset.portfolioBtn);
        const nextDataset = currentDataset + 1;
        const nextSlide = document.querySelector(`[data-portfolio-btn="${nextDataset}"]`);

        if (nextSlide) {
          activeSlide.classList.remove('dis-block');
          activeSlide.classList.add('dis-none');
          nextSlide.classList.remove('dis-none');
          nextSlide.classList.add('dis-block');
        }
        if (nextDataset <= slides.length) {
          currentCounter.textContent = nextDataset
        }

      }
    }

    const slidePrev = () => {
      const activeSlide = document.querySelector('.portfolio-slider__slide-frame.dis-block');
      if (activeSlide) {
        const currentDataset = parseInt(activeSlide.dataset.portfolioBtn);
        const prevDataset = currentDataset - 1;
        const prevSlide = document.querySelector(`[data-portfolio-btn="${prevDataset}"]`);

        if (prevSlide) {
          activeSlide.classList.remove('dis-block');
          activeSlide.classList.add('dis-none');
          prevSlide.classList.remove('dis-none');
          prevSlide.classList.add('dis-block');
        }
        if(prevDataset != 0 ) {
          currentCounter.textContent = prevDataset
        }

      }
    }

    btnRightSlider.addEventListener('click', slideNext)
    btnLeftSlider.addEventListener('click', slidePrev)
  }

}