import { render } from "./render"

export const editWork = () => {
  const tbody = document.getElementById('table')
  const form = document.querySelector('form')
  const typeInput = form.querySelector('#type')
  const nameInput = form.querySelector('#name')
  const unitsInput = form.querySelector('#units')
  const costInput = form.querySelector('#cost')

  tbody.addEventListener('click', (e) => {
    if (e.target.closest('.action-change')) {
      const tr = e.target.closest('tr')
      const id = tr.dataset.key

      userService.getWorks(id).then(works => {
        works.forEach(work => {
          typeInput.value = work.type
          nameInput.value = work.name
          unitsInput.value = work.units
          costInput.value = work.cost
        });
        form.dataset.method = id
      })
    }

    if (e.target.closest('.cancel-button')) {
      form.reset()
    }
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (form.dataset.method) {
      const id = form.dataset.method
      const work = {
        type: typeInput.value,
        name: nameInput.value,
        units: unitsInput.value,
        cost: costInput.value,
      }

      userService.editWork(id, work).then(() => {
        userService.getWorks().then(works => {
          render(works)
        })
      })

    }

  })

}