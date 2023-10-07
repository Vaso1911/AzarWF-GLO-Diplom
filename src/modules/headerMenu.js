export const headerMenu = () => {
  const body = document.querySelector('.body')
  const menuDialogPopup = document.querySelector('.popup-dialog-menu')
  const menuPopupTable = document.querySelector('.popup-repair-types-content-table')
  const popup = document.querySelector('.popup.popup-repair-types')
  const menuPopupNav = popup.querySelectorAll('.nav-wrap-repair')
  const computedStyles = window.getComputedStyle(menuDialogPopup)
  const transformValue = computedStyles.getPropertyValue('transform')
  const transformValueReg = transformValue.match(/(-?\d+(\.\d+)?)/g)
  const translateX = transformValueReg[4]
  const translateY = transformValueReg[5]
  const translateYPlus = Math.abs(translateY)

  body.addEventListener('click', (e) => {
    const clickEventMenu = e.target.closest('.menu__icon')
    const clickEventClose = e.target.closest('.close-menu')
    const clickEventPriceLink = e.target.closest('.price-link')
    const clickEventPriceClose = e.target.closest('.price-close')
    const popupDialog = e.target.closest('.popup-dialog')
    if (clickEventMenu) {

      if (translateX > 1) {
        menuDialogPopup.style.right = `${translateX}px`;

      } else {
        menuDialogPopup.style.top = `${translateYPlus}px`;
      }
    } else if (clickEventClose) {

      if (menuDialogPopup.style.right == `${translateX}px`) {
        menuDialogPopup.style.right = '0px';

      } else {
        menuDialogPopup.style.top = `${translateY}px`;
      }
    } else if (clickEventPriceLink) {

      if (menuDialogPopup.style.right == `${translateX}px`) {
        menuDialogPopup.style.right = '0px';
        popup.classList.add('vis')
        menuPopupTable.classList.remove('hidden')
        menuPopupNav.forEach(el => {
          el.classList.remove('hidden')
        })

      } else {
        menuDialogPopup.style.top = `${translateY}px`;
        popup.classList.add('vis')
        menuPopupTable.classList.remove('hidden')
        menuPopupNav.forEach(el => {
          el.classList.remove('hidden')
        })
      }
    } else if (clickEventPriceClose || !popupDialog) {
      popup.classList.remove('vis')
      menuPopupTable.classList.add('hidden')
      menuPopupNav.forEach(el => {
        el.classList.add('hidden')
      })
    }

  })

}