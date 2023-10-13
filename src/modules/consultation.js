export const consultation = () => {
  const btns = document.querySelectorAll('.button_wide')
  const popup = document.querySelector('.popup-consultation')

  btns.forEach(el => {
    el.addEventListener('click', () => {
      popup.classList.add('vis')
    })
  })

}