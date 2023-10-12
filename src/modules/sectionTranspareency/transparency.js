import Swiper from "swiper"
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

import { addAttrTransparency } from "../addAttr"

export const transparency = () => {
  const popup = document.querySelector('.popup-transparency')
  const wrapperSwiper = document.querySelector('.transparency-slider-wrap')
  const wrapper = document.querySelector('.transparency-slider')
  const popupSlider = document.querySelector('.popup-transparency-slider')
  const popupSlides = popupSlider.querySelectorAll('.popup-transparency-slider__slide')
  const transparencyItem = document.querySelectorAll('.transparency-item')
  const counter = document.getElementById('transparency-popup-counter')
  const currentCounter = counter.querySelector('.slider-counter-content__current')
  const totalCounter = counter.querySelector('.slider-counter-content__total')
  const btnRightSlider = document.getElementById('transparency_right')
  const btnLeftSlider = document.getElementById('transparency_left')

  totalCounter.textContent = popupSlides.length
  addAttrTransparency(transparencyItem, popupSlides)

  const hiddenSlide = () => {
    popupSlides.forEach(el => {
      el.classList.add('dis-none')
      el.classList.remove('dis-block')
    })
  }

  const slideNext = () => {
    const activeSlide = document.querySelector('.popup-transparency-slider__slide.dis-block');
    console.dir(activeSlide);
    if (activeSlide) {
      const currentDataset = parseInt(activeSlide.dataset.sliderTransparency);
      const nextDataset = currentDataset + 1;
      const nextSlide = document.querySelector(`[data-slider-transparency="${nextDataset}"]`);
      console.log(nextSlide);
      if (nextSlide) {
        activeSlide.classList.remove('dis-block');
        activeSlide.classList.add('dis-none');
        nextSlide.classList.remove('dis-none');
        nextSlide.classList.add('dis-block');
      }
      if (nextDataset <= popupSlides.length) {
        currentCounter.textContent = nextDataset
      }

    }
  }

  const slidePrev = () => {
    const activeSlide = document.querySelector('.popup-transparency-slider__slide.dis-block');
    console.log(activeSlide);
    if (activeSlide) {
      const currentDataset = parseInt(activeSlide.dataset.sliderTransparency);
      const prevDataset = currentDataset - 1;
      const prevSlide = document.querySelector(`[data-slider-transparency="${prevDataset}"]`);
      console.log(prevSlide);
      if (prevSlide) {
        activeSlide.classList.remove('dis-block');
        activeSlide.classList.add('dis-none');
        prevSlide.classList.remove('dis-none');
        prevSlide.classList.add('dis-block');
      }
      if (prevDataset != 0) {
        currentCounter.textContent = prevDataset
      }

    }
  }

  wrapper.addEventListener('click', (e) => {
    const item = e.target.closest('.transparency-item')
    const itemData = item.dataset.tabTransparency
    const slide = document.querySelector(`[data-slider-transparency="${itemData}"]`)
    if (item) {
      slide.classList.add('dis-block')
      popup.classList.add('vis')
      currentCounter.textContent = itemData
    }
  })


  popup.addEventListener('click', (e) => {
    const wrapper = e.target.closest('.popup-dialog-transparency')
    const close = e.target.closest('.close')

    if (!wrapper || close) {
      popup.classList.remove('vis')
      hiddenSlide()
    }
  })

  btnRightSlider.addEventListener('click', slideNext)
  btnLeftSlider.addEventListener('click', slidePrev)


  if (window.innerWidth <= 1090) {
    wrapperSwiper.classList.add('swiper')
    wrapperSwiper.classList.add('transparency-swiper')
    wrapper.classList.remove('row')
    wrapper.classList.add('swiper-wrapper')

    transparencyItem.forEach(el => {
      el.classList.add('swiper-slide')
      el.style.display = 'flex'
    })

    const swiperTransparency = new Swiper('.transparency-swiper', {
      loop: true,
      slidesPerView: 1,
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '#transparency-arrow_left',
        prevEl: '#transparency-arrow_right',
      },
    })


  }
}
