export const popupSliderPortfolio = () => {
  const arr = [
    {
      area: '64',
      duration: '51',
      repairType: 'Косметический',
      workCost: '111 000',
      materialCost: '129 000',
      totalCost: '240 000',
      foreman: 'Петренко А.В.',
      projectLeader: 'Тюленев Э.Н.'
    },
    {
      area: '97',
      duration: '98',
      repairType: 'Евроремонт',
      workCost: '200 500',
      materialCost: '135 900',
      totalCost: '346 400',
      foreman: 'Петренко А.В.',
      projectLeader: 'Тюленев Э.Н.'
    },
    {
      area: '56',
      duration: '54',
      repairType: 'Косметический',
      workCost: '120 000',
      materialCost: '180 000',
      totalCost: '300 000',
      foreman: 'Петренко А.В.',
      projectLeader: 'Тюленев Э.Н.'
    },
    {
      area: '102',
      duration: '99',
      repairType: 'Евроремонт',
      workCost: '200 500',
      materialCost: '185 900',
      totalCost: '386 400',
      foreman: 'Петренко А.В.',
      projectLeader: 'Тюленев Э.Н.'
    },
    {
      area: '82',
      duration: '90',
      repairType: 'Индивидуальный',
      workCost: '200 500',
      materialCost: '185 900',
      totalCost: '386 400',
      foreman: 'Петренко А.В.',
      projectLeader: 'Тюленев Э.Н.'
    },    {
      area: '64',
      duration: '51',
      repairType: 'Косметический',
      workCost: '111 000',
      materialCost: '129 000',
      totalCost: '240 000',
      foreman: 'Петренко А.В.',
      projectLeader: 'Тюленев Э.Н.'
    },
    {
      area: '97',
      duration: '98',
      repairType: 'Евроремонт',
      workCost: '200 500',
      materialCost: '135 900',
      totalCost: '346 400',
      foreman: 'Петренко А.В.',
      projectLeader: 'Тюленев Э.Н.'
    },
    {
      area: '56',
      duration: '54',
      repairType: 'Косметический',
      workCost: '120 000',
      materialCost: '180 000',
      totalCost: '300 000',
      foreman: 'Петренко А.В.',
      projectLeader: 'Тюленев Э.Н.'
    },
    {
      area: '102',
      duration: '99',
      repairType: 'Евроремонт',
      workCost: '200 500',
      materialCost: '185 900',
      totalCost: '386 400',
      foreman: 'Петренко А.В.',
      projectLeader: 'Тюленев Э.Н.'
    },
    {
      area: '82',
      duration: '90',
      repairType: 'Индивидуальный',
      workCost: '200 500',
      materialCost: '185 900',
      totalCost: '386 400',
      foreman: 'Петренко А.В.',
      projectLeader: 'Тюленев Э.Н.'
    }
  ]

  let htmlText = ''
  let count = 1
  const popup = document.querySelector('.popup-portfolio')
  const popupRow = popup.querySelector('.row')

arr.forEach(({area, duration, repairType, workCost, materialCost, totalCost, foreman, projectLeader})=> {
  htmlText += `<div class="popup-portfolio-text" data-portfolio-text="${count++}">
                  <div class="popup-portfolio-text-important">
                    <div class="popup-portfolio-text-wrap">
                      <div class="popup-portfolio-text__title">Площадь квартиры</div>
                      <div class="popup-portfolio-text__value_big">${area}<span> м<sup>2</sup></span></div>
                    </div>
                    <div class="popup-portfolio-text-wrap">
                      <div class="popup-portfolio-text__title">Срок<br>ремонта</div>
                      <div class="popup-portfolio-text__value_big">${duration}<span> дней</span></div>
                    </div>
                  </div>
                  <div class="popup-portfolio-text-price">
                    <div>
                      <div class="popup-portfolio-text__title">Вид ремонта</div>
                      <div class="popup-portfolio-text__value">${repairType}</div>
                    </div>
                    <div>
                      <div class="popup-portfolio-text__title">Стоимость работ</div>
                      <div class="popup-portfolio-text__value">${workCost} &#8381;</div>
                    </div>
                    <div>
                      <div class="popup-portfolio-text__title">Стоимость материалов</div>
                      <div class="popup-portfolio-text__value">${materialCost} &#8381;</div>
                    </div>
                  </div>
                  <div class="popup-portfolio-text-authors">
                    <div>
                      <div class="popup-portfolio-text__title">Общая стоимость ремонта</div>
                      <div class="popup-portfolio-text__value">${totalCost} &#8381;</div>
                    </div>
                    <div class="popup-portfolio-text__title">Прораб: <strong>${foreman}</strong></div>
                    <div class="popup-portfolio-text__title">Руководитель проекта:</div>
                    <div class="popup-portfolio-text__title"><strong>${projectLeader}</strong></div>
                  </div>
                </div>`
})
popupRow.insertAdjacentHTML('beforeend', htmlText);

}