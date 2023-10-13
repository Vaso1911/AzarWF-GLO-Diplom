import Swiper from "swiper"
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

export const reviews = () => {
  const section = document.getElementById('reviews')
  const swiperWrapper = section.querySelector('.reviews-slider')
  const sliders = section.querySelectorAll('.reviews-slider__slide')
  const paginations = section.querySelector('.slider-dots-reviews')


  swiperWrapper.classList.add('swiper-wrapper')
  paginations.classList.add('swiper-pagination')
  sliders.forEach(el => {
    el.classList.add('swiper-slide')
    el.style.display = 'flex'
  })


  const swiperReviews= new Swiper('.reviews-swiper', {
    loop: true,
    slidesPerView: 1,

    modules: [Navigation, Pagination],
    navigation: {
      nextEl: '#reviews-arrow_left',
      prevEl: '#reviews-arrow_right',
    },
  })
}