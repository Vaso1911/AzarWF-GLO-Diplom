import { render } from "./render"

export const sortWorks = () => {
  const headerSort = document.querySelector('thead')
  console.log(headerSort);
  let isSort = false
  headerSort.addEventListener('click', (e) => {
    const headerId = e.target.closest('.th-id')
    const headerType = e.target.closest('.th-type')
    const headerName = e.target.closest('.th-name')
    const headerUnits = e.target.closest('.th-units')
    const headerCost = e.target.closest('.th-cost')

    const sortType = (idName) => {
      userService.getSortWorks({
        id: idName,
        value: isSort ? 'asc' : 'desc'
      }).then(users => {
        render(users);
      })
    }
    if (headerId) {
      sortType('id')
      isSort = !isSort
    }

    if (headerType) {
      sortType('type')
      isSort = !isSort
    }

    if (headerName) {
      sortType('name')
      isSort = !isSort
    }

    if (headerUnits) {
      sortType('units')
      isSort = !isSort
    }

    if (headerCost) {
      sortType('cost')
      isSort = !isSort
    }
  })

}