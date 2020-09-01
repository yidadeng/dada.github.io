import $ from 'jquery';
import 'slick-carousel';


export default class SliderEle {
  constructor(elem) {
    this.$elem = $(elem)
    this.init()
  }

  init() {
    this.setSlider()
    // this.eventBind()
  }
  // eventBind() {
  //   window.addEventListener('resize', () => {
  //     this.setSlider()
  //   })
  // }
  setSlider() {
    const width = window.innerWidth

    const options = {
      autoplay: true,
      dots: true,
      slideshowSpeed: 4000,
      fade: true,
    }
    this.$elem.not('.slick-initialized').slick(options);
    // if(width <= 768){
    //   this.$elem.not('.slick-initialized').slick(options);
    // }
  }
}



