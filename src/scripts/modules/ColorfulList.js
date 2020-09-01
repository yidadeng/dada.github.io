
export default class ColorfulList {
  constructor(elem) {
    this.elem = elem
    this.item = elem.querySelectorAll("li")
    this.totalNum = this.item.length
    this.init();
  }

  init() {
    this.pickOneLikeSB()
  }

  pickOneLikeSB(){


    this.item.forEach(ele => {
      var eleSpan = document.createElement("span");
      eleSpan.className = 'color'
      ele.append(eleSpan)
    });

    const timer = setInterval(() => {
      let pickupIndex = (Math.round(Math.random() * 10) % this.totalNum)
      this.item.forEach(ele => {
        ele.classList.remove('is-colorful')
      });
      this.item[pickupIndex].classList.add('is-colorful')
    }, 5000);
  }

}
