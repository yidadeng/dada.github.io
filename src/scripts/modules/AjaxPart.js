// import YTPlayer from 'yt-player';
import $ from 'jquery';
import {scrollToTargetWithoutAnchorLink} from '../utils/scrollToTarget.js'

export default class AjaxPart {
  constructor(elem) {
    this.elem = elem
    this.init();
  }
  init() {
    this.elem.querySelector('.c-location-contents').addEventListener('click', () => {
      this.loadingTxt()
      this.getLocationXY()
      this.scrollFun()
    })
  }


  loadingTxt() {
    this.elem.querySelector('.c-location-contents').innerText = 'Loading....'
  }

  getLocationXY() {
    var This = this
    if (!navigator.geolocation) {
      error()
      return
    }

    function error() {
      let errorTxt = '地理位置取れない'
      This.elem.querySelector('.c-location-contents').innerText = errorTxt
    }

    function success(position) {
      console.log('Time02', new Date().getTime())
      let x = position.coords.latitude
      let y = position.coords.longitude
      if (window.localStorage.locationX) {
        if (parseInt(x) == parseInt(window.localStorage.locationX) && parseInt(y) == parseInt(window.localStorage.locationY)) {
          console.log('你没变啊')
          let template = window.localStorage.getItem('locationTemplate')
          This.elem.querySelector('.c-location-contents').innerText = 'OK'
          This.elem.querySelector('.c-location-result').innerHTML = template

        } else {
          console.log('你变了阿')
          setFunc()
        }
      } else {
        console.log('第一次啊')
        setFunc()
      }

      function setFunc() {
        console.log('setFunc')
        window.localStorage.setItem('locationX', x);
        window.localStorage.setItem('locationY', y);
        This.getAddressData(x, y)
      }
    }
    console.log('Time01', new Date().getTime())
    navigator.geolocation.getCurrentPosition(success, error)
  }

  getAddressData(x, y) {
    var This = this
    x = x || 36
    y = y || 139
    $.ajax({
      url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${x},${y}&key=AIzaSyBmj6Tx0frKLBmQs2xd8UMAdX3GGG4AA7o`,
      type: 'GET'
    }).done((response) => {
      console.log('Time03', new Date().getTime())
      console.log(response)
      This.renderHtml(response)
    }).fail((xhr, textStatus, errorThrown) => {
      console.log('error')
    });
  }

  renderHtml(response) {
    let data = response.results[0].address_components
    let length = data.length
    let addressCode = data[length - 1].long_name,
      country = data[length - 2].long_name,
      region01 = data[length - 3].long_name,
      region02 = data[length - 4].long_name,
      region03 = data[length - 5].long_name
    let template = `<div class="c-location-result-inner"><p>Your location infomation</p><table><tr><th>国</th><td>${country}</td></tr><tr><th>郵便</th><td>${addressCode}</td></tr><tr><th>地域2</th><td>${region01}</td></tr><tr><th>地域2</th><td>${region02}</td></tr><tr><th>地域3</th><td>${region03}</td></tr></table></div>`
    window.localStorage.setItem('locationTemplate', template);
    this.elem.querySelector('.c-location-contents').innerText = 'OK'
    this.elem.querySelector('.c-location-result').innerHTML = template
  }

  scrollFun() {
    scrollToTargetWithoutAnchorLink('#c-location-zone' , 200)
  }
}