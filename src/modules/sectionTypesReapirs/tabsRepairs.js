import { addAttrTypesRepair } from "../addAttr"

export const tabsRepairs = () => {
  const repair = document.getElementById('repair-types')
  // const repairTabs = repair.querySelector('.repair-types-tab')
  const tabs = document.querySelectorAll('[class*="repair-types-nav__item-"]')
  const sliderType = document.querySelectorAll('[class*="types-repair"]')

  addAttrTypesRepair(tabs, sliderType)

  tabs.forEach(elTab => {

    elTab.addEventListener('click', (e) => {
      const tab = e.currentTarget.dataset.tab
      const slider = document.querySelector(`[data-slider="${tab}"]`)

      tabs.forEach(el => {
        el.classList.remove('active')
      })
      elTab.classList.add('active')

      sliderType.forEach(elSlide => {
        elSlide.classList.add('dis-none')
        elSlide.classList.remove('slider-active')
      })
      slider.classList.remove('dis-none')
      slider.classList.add('slider-active')

    })
  })


}