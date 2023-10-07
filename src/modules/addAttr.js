export const addAttrMenu = () => {
  const allLinks = [...document.querySelectorAll('a')]
  const popupRepair = document.querySelector('.popup.popup-repair-types')
  const popupClose = popupRepair.querySelectorAll('.close')
  const popupPrivacy = document.querySelector('.popup-privacy')
  const fullPriceLinks = allLinks.filter(link => link.textContent.trim() == 'Полный список услуг и цен')

  popupPrivacy.classList.add('anim-vis')

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
  leftBtn.classList.add('repair-left')
  rightBtn.classList.add('repair-right')
  tabs.forEach((el, i) => {
    el.setAttribute('data-tab', `data-repair${i + 1}`)
    el.classList.add('repair-tab')
  })
  slider.forEach((el, i) => {
    el.setAttribute('data-slider', `data-repair${i + 1}`)
    el.classList.add('repair-slider')
    el.classList.add('dis-none')
  })
  slider[0].classList.remove('dis-none')
  slider[0].classList.add('slider-active')

}

