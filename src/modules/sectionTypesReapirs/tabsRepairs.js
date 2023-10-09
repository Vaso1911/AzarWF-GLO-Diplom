

import { addAttrTypesRepair } from "../addAttr"
import { Slider } from "../slider"

export const tabsRepairs = () => {
  const repairTypes = document.getElementById('repair-types')
  const tabs = document.querySelectorAll('[class*="repair-types-nav__item-"]')
  const sliderContainers = document.querySelectorAll('[class*="types-repair"]')
  const arrowLeft = document.getElementById('repair-types-arrow_left');
  const arrowRight = document.getElementById('repair-types-arrow_right');
  addAttrTypesRepair(tabs, sliderContainers)

  const sliders = []

  sliderContainers.forEach(container => {
    const slider = new Slider(container, 'repair-types-slider__slide', 'slides-active')
    sliders.push(slider)
  })

  tabs.forEach((elTab, index) => {
    elTab.addEventListener('click', () => {
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
          slider.startSlide()
        } else {
          slider.stopSlide()
        }
      })

    })

  })


  arrowLeft.addEventListener('click', () => {
    const activeSliderIndex = Array.from(tabs).findIndex(tab => tab.classList.contains('active'));
    if (activeSliderIndex >= 0) {
      sliders[activeSliderIndex].prevSlide();
    }
  });

  arrowRight.addEventListener('click', () => {
    const activeSliderIndex = Array.from(tabs).findIndex(tab => tab.classList.contains('active'));
    if (activeSliderIndex >= 0) {
      sliders[activeSliderIndex].nextSlide();
    }
  });

  sliders[0].startSlide();
}
