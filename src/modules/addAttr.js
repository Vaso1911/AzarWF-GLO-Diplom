export const addAttr = () => {

  // header
  const allLinks = [...document.querySelectorAll('a')]
  const popup = document.querySelector('.popup.popup-repair-types')
  const fullPriceLinks = allLinks.filter(link => link.textContent.trim() == 'Полный список услуг и цен')
  const popupClose = popup.querySelectorAll('.close')
  popup.classList.add('anim-vis')

  fullPriceLinks.forEach(el => {
    el.classList.add('price-link')
  })
  popupClose.forEach(el => {
    el.classList.add('price-close')
  })

}