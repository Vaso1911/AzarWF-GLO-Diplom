export const addAttrMenu = () => {
  const allLinks = [...document.querySelectorAll('a')]
  const popupRepair = document.querySelector('.popup.popup-repair-types')
  const popupClose = popupRepair.querySelectorAll('.close')
  const popupPrivacy = document.querySelector('.popup-privacy')
  const btnPortfolioDis = document.getElementById('portfolio-arrow-mobile_right')
  const fullPriceLinks = allLinks.filter(link => link.textContent.trim() == 'Полный список услуг и цен')

  popupPrivacy.classList.add('anim-vis')
  btnPortfolioDis.removeAttribute('disabled')
  
  fullPriceLinks.forEach(el => {
    el.classList.add('price-link')
  })
  popupClose.forEach(el => {
    el.classList.add('price-close')
  })
}

export const addAttrTypesRepair = (tabs, slider) => {
  const leftBtn = document.getElementById('repair-types-arrow_left')
  const rightBtn = document.getElementById('repair-types-arrow_right')

  leftBtn.classList.add('repair-arrow')
  rightBtn.classList.add('repair-arrow')

  tabs.forEach((el, i) => {
    el.setAttribute('data-tab', `data-repair${i + 1}`)
    el.classList.add('repair-tab')
  })
  slider.forEach((el, i) => {
    const arrChildren = [...el.children]
    arrChildren[0].classList.add('slides-active')
    el.setAttribute('data-slider', `data-repair${i + 1}`)
    el.classList.add('repair-slider')
    // el.classList.add('dis-none')

  })
  slider[0].classList.remove('dis-none')
  slider[0].classList.add('slider-active')

}













































// export const sliderRepair = () => {

//   setTimeout(() => {
//     const repairTypes = document.getElementById('repair-types')
//     const repaireTypesSliders = document.querySelector('.repair-types-slider')
//     const repaireTypesSlides = repaireTypesSliders.querySelectorAll('.repair-slider')
//     const allSliders = repaireTypesSliders.querySelector('.slider-active')
//     const typesRepair1 = document.querySelector('.types-repair1')
//     const typesRepair1Slides = typesRepair1.querySelectorAll('.repair-types-slider__slide')
//     const typesRepair2 = document.querySelector('.types-repair2')
//     const typesRepair2Slides = typesRepair2.querySelectorAll('.repair-types-slider__slide')
//     const typesRepair3 = document.querySelector('.types-repair3')
//     const typesRepair3Slides = typesRepair3.querySelectorAll('.repair-types-slider__slide')
//     const typesRepair4 = document.querySelector('.types-repair4')
//     const typesRepair4Slides = typesRepair4.querySelectorAll('.repair-types-slider__slide')
//     const typesRepair5 = document.querySelector('.types-repair5')
//     const typesRepair5Slides = typesRepair5.querySelectorAll('.repair-types-slider__slide')
//     const typesRepair1SlideData = document.querySelector('[data-slider="data-repair1"]')
//     const typesRepair2SlideData = document.querySelector('[data-slider="data-repair2"]')
//     const typesRepair3SlideData = document.querySelector('[data-slider="data-repair3"]')
//     const typesRepair4SlideData = document.querySelector('[data-slider="data-repair4"]')
//     const typesRepair5SlideData = document.querySelector('[data-slider="data-repair5"]')

//     repaireTypesSlides.forEach(el => {
//       const arrChildren = [...el.children]
//       arrChildren[0].classList.add('slides-active')

//     })



//     let currentSlide = 0
//     let interval

//     const autoSlide = (slider) => {
//       slider[currentSlide].classList.remove('slides-active')
//       currentSlide++

//       if (currentSlide >= slider.length) {
//         currentSlide = 0
//       }
//       slider[currentSlide].classList.add('slides-active')
//     }

//     const startSlide = (slider) => {
//     interval =  setInterval(() => {
//         autoSlide(slider)
//       }, 2000)
//     }

// const stopSlide = () => [
//   clearInterval(interval)
// ]

//     repaireTypesSlides.forEach(el => {
// const activeSlider = el.closest('.slider-active')

//       if (activeSlider && typesRepair1SlideData) {
//         startSlide(typesRepair1Slides)
//       }else if(el.closest('.dis-none')) {
//         stopSlide()
//       }
//     })


//   }, 30)


// }