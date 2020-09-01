export default class HandleBody {
  constructor(elem) {
    this.elem = elem
    this.init()
    this.html = document.querySelector('html')
    this.body = document.querySelector('body')
  }

  init() {
    this.elem.addEventListener('click', () => {
      this.bodyHandle()
      this.clickHandle()
    });
  }



  bodyHandle() {
    if (this.body.classList.contains('fixed')) {
      this.html.style.position = ''
      this.html.style.overflow = ''
      this.html.style.width = ''
      this.html.style.top = this.body.dataset.scvalue + 'px'
      window.scrollTo(0, this.body.dataset.scvalue)
      this.body.classList.remove('fixed')
    } else {
      this.body.dataset.scvalue = window.pageYOffset
      this.html.style.position = 'fixed'
      this.html.style.overflow = 'hidden'
      this.html.style.width = '100%'
      this.html.style.top = -1 * this.body.dataset.scvalue + 'px'
      this.body.classList.add('fixed')
    }
  }

  clickHandle() {
    console.log('HandleBody' , this.elem)
  }

}