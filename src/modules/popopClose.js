export const popupClose = () => {
  const popup = document.querySelectorAll('.popup')
  const hiddenSlide = () => {
    const popupSlider = document.querySelector('.popup-transparency-slider')
    const popupSlides = popupSlider.querySelectorAll('.popup-transparency-slider__slide')
    popupSlides.forEach(el => {
      el.classList.add('dis-none')
      el.classList.remove('dis-block')
    })
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

  popup.forEach(el => {
    el.addEventListener('click', (e) => {
      const popupPortfolio = e.target.closest('.popup-dialog-portfolio')
      const close = e.target.closest('.close')
      const popupFeedback = e.target.closest('.feedback-wrap')
      const popupTransparency = e.target.closest('.popup-dialog-transparency')
      const popupRepairTypes = e.target.closest('.popup-dialog-repair-types')
      const arr = [popupPortfolio, popupFeedback, popupTransparency, popupRepairTypes]
      const allFalse = arr.every(el => !el)
      if (allFalse || close) {
        el.classList.remove('vis')
        hiddenPopupSlider()
        hiddenSlide()

      }
    })
  })
}