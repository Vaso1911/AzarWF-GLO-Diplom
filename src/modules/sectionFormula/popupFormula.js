import Swiper from "swiper"
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

export const popupFormula = () => {
  const section = document.getElementById('formula')
  const wrapper = section.querySelector('.mobile-hide')

  const showPopup = (e) => {
    const icon = e.target.closest('.formula-item__icon')

    if (icon) {
      const rect = icon.children[0].getBoundingClientRect()
      icon.children[0].classList.add('vis')

      const elHeight = icon.parentElement.clientHeight
      if (rect.y < 0) {
        icon.children[0].classList.add('formula-item-popup--down')
        icon.children[0].style.top = `${elHeight + 20}px`
      } else {
        icon.children[0].classList.remove('formula-item-popup--down')
        icon.children[0].style.top = `inherit`
      }
    }
  }

  const hiddenPopup = (e) => {
    const icon = e.target.closest('.formula-item__icon')
    if (icon) {
      icon.children[0].style.top = `inherit`
      icon.children[0].classList.remove('vis')
    }
  }

  wrapper.addEventListener('mouseover', showPopup)
  wrapper.addEventListener('mouseout', hiddenPopup)


  if (window.innerWidth <= 1024) {
    const swiperFormula = new Swiper('.formula-slider-wrap', {
      loop: true,
      slidesPerView: 1,
      breakpoints: {
        630: {
          slidesPerView: 3,
          centeredSlides: true,
          spaceBetween: -10,
        },
      },

      slideActiveClass: 'formula-slider__slide--active',
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '#formula-arrow_left',
        prevEl: '#formula-arrow_right',
      },
    })
    swiperFormula.on('slideChange', function () {
      const activeSlideIndex = swiperFormula.activeIndex;
      const activeSlide = swiperFormula.slides[activeSlideIndex];
      showPopupOnSlide(activeSlide);
    });
  }


  const showPopupOnSlide = (slide) => {
    const allIcons = document.querySelectorAll('.formula-item__icon');
    allIcons.forEach(icon => {
      icon.children[0].classList.remove('vis');
    });
    const icon = slide.querySelector('.formula-item__icon');
    if (icon) {
      icon.children[0].classList.add('vis');
    }
  }

}

