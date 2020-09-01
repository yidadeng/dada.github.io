export default class MenuSp {
  constructor(elem) {
    this.elem = elem
    this.elemBtn = this.elem.querySelector("[data-menu-role='btn']")
    this.elemContents = this.elem.querySelector("[data-menu-role='contents']")
    this.init()
  }
  init() {
    this.elemBtn.addEventListener('click', () => {
      if(this.elem.classList.contains('active')){
        this.elem.classList.remove('active')
      }else{
        this.elem.classList.add('active')
      }
    });
  }
}