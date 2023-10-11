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

  prevSlide(callback) {
    this.slides[this.currentSlide].classList.remove(this.activeSlideClass);
    this.currentSlide--;
    if (this.currentSlide < 0) {
      this.currentSlide = this.slides.length - 1;
    }
    this.slides[this.currentSlide].classList.add(this.activeSlideClass);
    const numberSlide = this.currentSlide + 1
        if (callback) {
      callback(numberSlide);
    }
  }

  nextSlide(callback) {
    this.slides[this.currentSlide].classList.remove(this.activeSlideClass);
    this.currentSlide++;
    if (this.currentSlide >= this.slides.length) {
      this.currentSlide = 0;
    }
    this.slides[this.currentSlide].classList.add(this.activeSlideClass);
    const numberSlide = this.currentSlide + 1
        if (callback) {
      callback(numberSlide);
    }
  }

  // numberSlides() {
  //   this.numberSlide = this.currentSlide + 1
  //   return this.numberSlide;
  // }

  autoSlide() {
    this.nextSlide();
  }

  // startSlide() {
  //   this.interval = setInterval(() => this.autoSlide(), this.timeInterval);
  // }
  startSlide(callback) {
    this.interval = setInterval(() => {
      this.autoSlide();
      const numberSlide = this.currentSlide + 1;
      if (callback) {
        callback(numberSlide);
      }
    }, this.timeInterval);
  }
  stopSlide() {
    clearInterval(this.interval);
  }

  init() {
    this.sliderBlock.children[0].classList.add(this.activeSlideClass);

  }
}

