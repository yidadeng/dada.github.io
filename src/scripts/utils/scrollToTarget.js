import $ from 'jquery';
import { BREAK_POINT, Header_Height } from './config.js'
import gws from './getWindowSize.js'


export function scrollToTargetWithoutAnchorLink(e, duration) {
  console.log(e)
  let $target = $(e)
  if (gws().width > BREAK_POINT) {
    var topBlank = Header_Height.pc;
  } else {
    var topBlank = Header_Height.sp;
  }
  var targetOffset = $target.offset().top - topBlank;
  $('html,body').animate({
      scrollTop: targetOffset
    },
    duration);
  return false;
}