/**
 * dummy class
 */
export default class Legacy {
  constructor(elem, opts) {
    this.elem = elem
    this.opts = opts
    this.targetClass = "active"
    this.delayTime = Number(opts['legacy']['delayTimeOp'] || elem.dataset.delayTime)
    this.bindEvents()
  }

  bindEvents() {
    console.log(this.opts['legacy'])
    console.log(this.delayTime)
    this.elem.addEventListener('click', () => {
      console.log(new Date())
      setTimeout(() => {
        console.log(new Date())
        console.log(this.getInnerHtml(this.elem))
      }, 1000);
    })
    this.addClassHandle(this.elem, this.delayTime)
    this.checkClass(this.elem)
  }


  getInnerHtml = elem => elem.innerHTML


  addClassHandle(e , t){
    setTimeout(() => {
      e.classList.add(this.targetClass)
    }, t);
  }



  checkClass(e) {
    const yt = setInterval(() => {
      if (e.classList.contains(this.targetClass)) {
        console.log('终于等到你' , this.elem)
        e.classList.add('red')
        e.style.color = 'red'
        clearInterval(yt)
      }
    }, 500);
  }
}