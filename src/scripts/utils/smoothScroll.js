import $ from 'jquery';
import { BREAK_POINT,  Header_Height } from './config.js'
import gws from './getWindowSize.js'

$(function () {
  console.log(BREAK_POINT)
  console.log(Header_Height)
  $('a[data-anc]').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
      if ($target.length) {
        if (gws().width > BREAK_POINT) {
          var topBlank = Header_Height.pc;
        } else {
          var topBlank = Header_Height.sp;
        }
        var targetOffset = $target.offset().top - topBlank;
        $('html,body').animate({ scrollTop: targetOffset },
          300);
        return false;
      }
    }
  });

})