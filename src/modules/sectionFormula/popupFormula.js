export const popupFormula = () => {
  const section = document.getElementById('formula')
  const wrapper = section.querySelector('.mobile-hide')
  const icons = document.querySelectorAll('.formula-item__icon')

  wrapper.addEventListener('mouseover', (e) => {
    const icon = e.target.closest('.formula-item__icon')
    if (icon) {
      icon.children[0].classList.add('vis')
    }
  })
  wrapper.addEventListener('mouseout', (e) => {
    const icon = e.target.closest('.formula-item__icon')
    if (icon) {
      icon.children[0].classList.remove('vis')
    }
  })

}