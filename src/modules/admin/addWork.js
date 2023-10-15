import { render } from "./render"

export const addWork = () => {
  const form = document.querySelector('form')
  const typeInput = form.querySelector('#type')
  const nameInput = form.querySelector('#name')
  const unitsInput = form.querySelector('#units')
  const costInput = form.querySelector('#cost')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!form.dataset.method) {
      const work = {
        type: typeInput.value,
        name: nameInput.value,
        units: unitsInput.value,
        cost: costInput.value,
      }

      userService.addWork(work).then(() => {
        userService.getUsers().then(works => {
          render(works)
          form.reset()
        })
      })
    }

  })

}