import { render } from "./render";

export const filter = () => {
  const typeSelect = document.getElementById('typeItem')
  typeSelect.addEventListener('change', function () {
    const selectedType = this.value;
    if (selectedType === 'Все услуги') {
      fetch('http://localhost:1001/works')
        .then(response => response.json())
        .then(data => {
          render(data)
        })
        .catch(error => {
          console.error('Произошла ошибка при получении данных:', error);
        });
    } else {
      fetch('http://localhost:1001/works')
        .then(response => response.json())
        .then(data => {
          const filteredData = data.filter(work => work.type === selectedType);
          render(filteredData)
        })
        .catch(error => {
          console.error('Произошла ошибка при получении данных:', error);
        })
    }
  })
}



