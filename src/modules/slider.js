// export const slider = (repairTypes, sliderClass, slidesClass, btnClass, activeSlideClass) => {
//   const slidersSection = document.getElementById(`${repairTypes}`)
//   const sliderBlock = document.querySelector(`.${sliderClass}`)
//   const slides = sliderBlock.querySelectorAll(`.${slidesClass}`)

//   if (!sliderBlock || !slides.length) {
//     return
//   }

//   sliderBlock.children[0].classList.add(`${activeSlideClass}`)

//   let currentSlide = 0
//   let interval
//   let timeInterval = 3000

//   const prevSlide = (el, i, strClass) => {
//     el[i].classList.remove(strClass)
//   }

//   const nextSlide = (el, i, strClass) => {
//     el[i].classList.add(strClass)
//   }

//   const autoSlide = () => {
//     prevSlide(slides, currentSlide, activeSlideClass)
//     currentSlide++
//     if (currentSlide >= slides.length) {
//       currentSlide = 0
//     }
//     nextSlide(slides, currentSlide, activeSlideClass)
//   }
//   const startSlide = (timer = 1500) => {
//     interval = setInterval(autoSlide, timer)
//   }
//   const stopSlide = () => {
//     clearInterval(interval)
//   }

//   slidersSection.addEventListener('click', (e) => {
//     e.preventDefault()

//     if (!e.target.matches(`.${btnClass}`)) {
//       return

//     }

//     prevSlide(slides, currentSlide, activeSlideClass)

//     if (e.target.matches('#repair-types-arrow_right')) {
//       currentSlide++

//     } else if (e.target.matches('#repair-types-arrow_left')) {
//       currentSlide--
//     }

//     if (currentSlide >= slides.length) {
//       currentSlide = 0
//     }

//     if (currentSlide < 0) {
//       currentSlide = slides.length - 1
//     }

//     nextSlide(slides, currentSlide, activeSlideClass)

//   })


//   slidersSection.addEventListener('mouseenter', (e) => {
//     if (e.target.matches(`.${btnClass}`)) {
//       stopSlide()
//     }
//   }, true)

//   slidersSection.addEventListener('mouseleave', (e) => {
//     if (e.target.matches(`.${btnClass}`)) {
//       startSlide(timeInterval)
//     }
//   }, true)

//   startSlide(timeInterval)
//   if (sliderBlock.style.display === 'none') {
//     stopSlide()
//   }
// }

export class Slider {
  constructor(sliderBlock, slidesClass, activeSlideClass) {
    this.sliderBlock = sliderBlock;
    this.slides = this.sliderBlock.querySelectorAll(`.${slidesClass}`);
    this.currentSlide = 0;
    this.interval = null;
    this.timeInterval = 3000;
    this.activeSlideClass = activeSlideClass;
    this.init();
  }

  prevSlide() {
    this.slides[this.currentSlide].classList.remove(this.activeSlideClass);
    this.currentSlide--;
    if (this.currentSlide < 0) {
      this.currentSlide = this.slides.length - 1;
    }
    this.slides[this.currentSlide].classList.add(this.activeSlideClass);
  }

  nextSlide() {
    this.slides[this.currentSlide].classList.remove(this.activeSlideClass);
    this.currentSlide++;
    if (this.currentSlide >= this.slides.length) {
      this.currentSlide = 0;
    }
    this.slides[this.currentSlide].classList.add(this.activeSlideClass);
  }

  autoSlide() {
    this.nextSlide();
  }

  startSlide() {
    this.interval = setInterval(() => this.autoSlide(), this.timeInterval);
  }

  stopSlide() {
    clearInterval(this.interval);
  }

  init() {
    this.sliderBlock.children[0].classList.add(this.activeSlideClass);

    // this.sliderBlock.addEventListener('click', (e) => {
    //   if (e.target.classList.contains(this.btnClass)) {
    //     this.stopSlide();
    //     this.prevSlide();
    //     this.startSlide();
    //   }
    // });
  }
}

