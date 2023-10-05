export const fullPricePopup = () => {
  const allLinks = [...document.querySelectorAll('a')]
  const popup = document.querySelector('.popup.popup-repair-types')
  popup.classList.add('anim-vis')
  console.log(popup);
  const fullPriceLinks = allLinks.filter(link => link.textContent.trim() == 'Полный список услуг и цен')

  fullPriceLinks.forEach(link => {
    link.addEventListener('click', () => {
      popup.classList.add('vis')

    })
  })

}