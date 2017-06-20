/**
 * Created by Jincheng on 2017/6/20.
 */
import {addClass, removeClass} from '../common/dom'

class Transition {
  beforeEnter (el) {
    addClass(el, 'scollapse-transition')
    if (!el.dataset) {
      el.dataset = {}
    }
    el.dataset.lastPaddingTop = el.style.paddingTop
    el.dataset.lastPaddingBottom = el.style.paddingBottom
    el.style.height = 0
    el.style.paddingTop = 0
    el.style.paddingBottom = 0
  }

  enter (el) {
    el.dataset.lastOverflow = el.style.overflow
    if (el.scrollHeight !== 0) {
      el.style.height = el.scrollHeight + 'px'
      el.style.paddingTop = el.dataset.lastPaddingTop
      el.style.paddingBottom = el.dataset.lastPaddingBottom
    } else {
      el.style.height = ''
      el.style.paddingTop = el.dataset.lastPaddingTop
      el.style.paddingBottom = el.dataset.lastPaddingBottom
    }
    el.style.overflow = 'hidden'
  }

  afterEnter (el) {
    removeClass(el, 'scollapse-transition')
    el.style.height = ''
    el.style.overflow = el.dataset.lastOverflow
  }

  beforeLeave (el) {
    if (!el.dataset) {
      el.dataset = {}
    }
    el.dataset.lastPaddingTop = el.style.paddingTop
    el.dataset.lastPaddingBottom = el.style.paddingBottom
    el.dataset.lastOverflow = el.style.overflow

    el.style.height = el.scrollHeight + 'px'
    el.style.overflow = 'hidden'
  }

  leave (el) {
    if (el.scrollHeight !== 0) {
      addClass(el, 'scollapse-transition')
      el.style.height = 0
      el.style.paddingTop = 0
      el.style.paddingBottom = 0
    }
  }

  afterLeave (el) {
    removeClass(el, 'scollapse-transition')
    el.style.height = ''
    el.style.overflow = el.dataset.lastOverflow
    el.style.paddingTop = el.dataset.lastPaddingTop
    el.style.paddingBottom = el.dataset.lastPaddingBottom
  }
}
export default {
  name: 'CardTransition',
  functional: true,
  render (h, {children}) {
    const data = {
      on: new Transition()
    }
    return h('transition', data, children)
  }
}
