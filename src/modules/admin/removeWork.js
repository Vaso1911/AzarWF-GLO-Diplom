import { render } from "./render"

export const removeWork = () => {
  const tbody = document.getElementById('table')

  tbody.addEventListener('click', (e) => {
    if (e.target.closest('.action-remove')) {
      const tr = e.target.closest('tr')
      const id = tr.dataset.key

      userService.removeWork(id).then(res => {
        userService.getWorks().then(works => {
          render(works)
        })
      })
    }
  })
}