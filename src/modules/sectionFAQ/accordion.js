export const accordion = () => {
  const title_block = document.querySelectorAll('.title_block')

  title_block.forEach(el => {
    el.addEventListener('click', () => {
      el.classList.toggle('msg-active')
    })
  })
}