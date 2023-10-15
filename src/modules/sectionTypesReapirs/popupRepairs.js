export const popupRepairs = () => {
  const db = '../../../db/db.json';
  const tabs = document.querySelectorAll('.popup-repair-types-nav__item')
  const tableWrapper = document.querySelector('.popup-repair-types-content-table')
  const nav = document.querySelector('.nav-popup-repair-types')
  const arrowTabLeft = document.getElementById('nav-arrow-popup-repair_left')
  const arrowTabRight = document.getElementById('nav-arrow-popup-repair_right')



  const loadData = async () => {
    try {
      const response = await fetch(db);
      const jsonData = await response.json();
      const data = jsonData.works;

      tabs.forEach(tab => {

        tab.addEventListener('click', () => {
          const tabType = tab.textContent
          if (Array.isArray(data)) {
            const filterData = data.filter(item => item.type === tabType)

            let tableContent = '<table class="popup-repair-types-content-table__list"><tbody>'

            filterData.forEach(item => {
              tableContent += `
                <tr class="mobile-row showHide">
                  <td class="repair-types-name">${item.name}</td>
                  <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
                  <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
                  <td class="repair-types-value">${item.units}</td>
                  <td class="repair-types-value">${item.cost} руб.</td>
                </tr>
              `
            })

            tableContent += '</tbody></table>'
            tableWrapper.innerHTML = tableContent
          }


          tabs.forEach(el => {
            if (el === tab) {
              el.classList.add('active')
            } else {
              el.classList.remove('active')
            }
          })
        });
      });
      tabs[0].click()
    } catch (error) {
      console.error('Произошла ошибка при загрузке данных:', error);
    }
  }

  loadData()

  arrowTabRight.addEventListener('click', () => {
    nav.scrollLeft += 155
  })

  arrowTabLeft.addEventListener('click', () => {
    nav.scrollLeft -= 155
  })
};
