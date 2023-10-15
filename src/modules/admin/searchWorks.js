import { debounce } from "./debounce";
import { render } from "./render";

export const searchWorks = () => {
  const searchInput = document.getElementById('search')

const debounceSearch =  debounce(() => {
  userService.getSearchWorks(searchInput.value).then(works => {
    render(works);
  })
})

  searchInput.addEventListener('input', debounceSearch)
}