export const headerMenu = () => {
  const body = document.querySelector('.body')
  const menuDialogPopup = document.querySelector('.popup-dialog-menu')
  const computedStyles = window.getComputedStyle(menuDialogPopup)
  const transformValue = computedStyles.getPropertyValue('transform')
  const transformValueReg = transformValue.match(/(-?\d+(\.\d+)?)/g)
  const translateX = transformValueReg[4]
  const translateY = transformValueReg[5]
  const translateYPlus = Math.abs(translateY)

  body.addEventListener('click', (e) => {
    const clickEventMenu = e.target.closest('.menu__icon')
    const clickEventClose = e.target.closest('.close-menu')

    if (clickEventMenu) {

      if (translateX > 1) {
        menuDialogPopup.style.right = `${translateX}px`;

      } else {
        menuDialogPopup.style.top = `${translateYPlus}px`;
      }
    } if (clickEventClose) {

      if (menuDialogPopup.style.right == `${translateX}px`) {
        menuDialogPopup.style.right = '0px';

      } else {
        menuDialogPopup.style.top = `${translateY}px`;
      }
    }

  })


}