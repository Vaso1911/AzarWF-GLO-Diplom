// import { addAttrTypesRepair } from "../addAttr"

export const sliderRepair = () => {
  setTimeout(() => {
    const repairTypes = document.getElementById('repair-types')
    const repaireTypesSliders = document.querySelector('.repair-types-slider')
    const repaireTypesSlides = repaireTypesSliders.querySelectorAll('.repair-slider')
    const allSliders = repaireTypesSliders.querySelector('.slider-active')

    let currentSlide = 0

    const autoSlide = () => {

    }

    repaireTypesSlides.forEach(el => {
      const arrChildren = [...el.children]
      arrChildren[0].classList.add('slides-active')
    })

    // repairTypes.addEventListener('click', (e) => {
    //   const clickRight = e.target.closest('.repair-right')
    //   const clickLeft = e.target.closest('.repair-left')

    //   if (clickRight) {
    //     arrChildren.forEach((el, i) => {

    //       const slideWidth = el.clientWidth
    //       el.style.transform = `translateX(${slideWidth}px)`

    //     })
    //   }
    //   if (clickLeft) {
    //     console.log('left');
    //   }
    // })


  }, 30)


}