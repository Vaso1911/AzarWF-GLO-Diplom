export const modal = () => {
  const body = document.querySelector('.body-table')
  const modal = document.getElementById('modal')

  body.addEventListener('click', (e) => {
    const close = e.target.closest('.button__close')
    const btnAdd = e.target.closest('.btn-addItem')
    const btnEdit = e.target.closest('.action-change')


    if (close) {
      modal.style.display = 'none'
    }    if (btnAdd || btnEdit) {
      modal.style.display = 'flex'
    }
  })


}