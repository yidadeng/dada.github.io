export default class ScrollEle {
  constructor(elem) {
    this.elem = elem
    this.reachBottomFlag = false
    this.init()
  }
  init() {
    window.addEventListener('scroll', () => {
      // 滚动距离
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      // 文档总高度
      const documentHeight = document.body.scrollHeight || document.documentElement.scrollHeight
      // 浏览器视口的高度
      const windowHeight = document.body.clientHeight || document.documentElement.clientHeight

      const r = 0.5
      const windowH = window.innerHeight

      const fazhi = windowH * r

      if(scrollTop + windowHeight  >= documentHeight && !this.reachBottomFlag){
        this.reachBottomFuc()
      }
      this.scrollHandle(scrollTop , fazhi)
    })
  }
  scrollHandle(scrollTop , fazhi) {
    let topValue = this.elem.offsetTop
    if(scrollTop + fazhi > topValue){
      this.elem.classList.add('show')
    }
  }
  reachBottomFuc(){
    this.reachBottomFlag = true
    if(!this.elem.classList.contains("show")){
      this.elem.classList.add('show')
    }
  }
}