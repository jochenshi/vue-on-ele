/**
 * Created by Jincheng on 2017/6/20.
 */
const trim = function (string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}
export function hasClass (el, classes) {
  if (!el || !classes) {
    return false
  }
  if (classes.indexOf(' ') !== -1) {
    throw new Error('Class name should not contain space')
  }
  if (el.classList > 0) {
    return el.classList.contains(classes)
  } else {
    return false
  }
}

export function addClass (el, cls) {
  if (!el) {
    return
  }
  var curClass = el.className
  var classes = (cls || '').split(' ')

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) {
      continue
    }
    if (el.classList) {
      el.classList.add(clsName)
    } else {
      if (!hasClass(el, clsName)) {
        curClass += ' ' + clsName
      }
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
}

export function removeClass (el, cls) {
  if (!el || !cls) {
    return
  }
  var classes = cls.split(' ')
  var curClass = ' ' + el.className + ' '
  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) {
      continue
    }
    if (el.classList) {
      el.classList.remove(clsName)
    } else {
      if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ')
      }
    }
  }
  if (!el.classList) {
    el.className = trim(curClass)
  }
}
