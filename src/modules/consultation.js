export const consultation = () => {
  const btns = document.querySelectorAll('.button_wide')
  const popup = document.querySelector('.popup-consultation')

  btns.forEach(el => {
    el.addEventListener('click', () => {
      popup.classList.add('vis')
    })
  })

  popup.addEventListener('click', (e) => {
    const  close = e.target.closest('.close')
    const  wrapper = e.target.closest('.feedback-wrap')
    if(close || !wrapper) {
      popup.classList.remove('vis')
    }
  })
}