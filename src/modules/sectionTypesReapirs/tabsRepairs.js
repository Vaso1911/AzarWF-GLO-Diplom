import { addAttrTypesRepair } from "../addAttr"
import { Slider } from "../slider"

export const tabsRepairs = () => {
  const repairCounter = document.getElementById('repair-counter')
  const repairCounterCurrent = repairCounter.querySelector('.slider-counter-content__current')
  const repairCounterTotal = repairCounter.querySelector('.slider-counter-content__total')
  const tabs = document.querySelectorAll('[class*="repair-types-nav__item-"]')
  const sliderContainers = document.querySelectorAll('[class*="types-repair"]')
  const arrowLeft = document.getElementById('repair-types-arrow_left');
  const arrowRight = document.getElementById('repair-types-arrow_right');
  const arrowTabLeft = document.getElementById('nav-arrow-repair-left_base');
  const arrowTabRight = document.getElementById('nav-arrow-repair-right_base');
  const nav = document.querySelector('.repair-types-nav')

  addAttrTypesRepair(tabs, sliderContainers)

  const sliders = []

  sliderContainers.forEach(container => {
    const slider = new Slider(container, 'repair-types-slider__slide', 'slides-active')
    sliders.push(slider)
  })

  sliders.forEach(slider => {
    repairCounterTotal.textContent = slider.slides.length
  })

  tabs.forEach((elTab, index) => {
    elTab.addEventListener('click', () => {
      repairCounterCurrent.textContent = '1'
      tabs.forEach(el => {
        el.classList.remove('active')
      })
      elTab.classList.add('active')

      sliderContainers.forEach(elSlide => {
        elSlide.classList.add('dis-none')
      })

      const currentSlider = sliderContainers[index]
      currentSlider.classList.remove('dis-none')

      sliders.forEach((slider, sliderIndex) => {

        if (sliderIndex == index) {
          repairCounterTotal.textContent = slider.slides.length

          slider.startSlide((numberSlide) => {
            repairCounterCurrent.textContent = numberSlide
          })

        } else {
          slider.stopSlide()
        }
      })

    })

  })

  arrowLeft.addEventListener('click', () => {
    const activeSliderIndex = Array.from(tabs).findIndex(tab => tab.classList.contains('active'));
    if (activeSliderIndex >= 0) {
      sliders[activeSliderIndex].prevSlide((numberSlide) => {
        repairCounterCurrent.textContent = numberSlide
      });
    }
  });

  arrowRight.addEventListener('click', () => {
    const activeSliderIndex = Array.from(tabs).findIndex(tab => tab.classList.contains('active'));
    if (activeSliderIndex >= 0) {
      sliders[activeSliderIndex].nextSlide((numberSlide) => {
        repairCounterCurrent.textContent = numberSlide
      });
    }
  });

  sliders[0].startSlide((numberSlide) => {
    repairCounterCurrent.textContent = numberSlide
  })

  arrowTabRight.addEventListener('click', () => {
    nav.scrollLeft += 125
  })
  
  arrowTabLeft.addEventListener('click', () => {
    nav.scrollLeft -= 125
  })
}
