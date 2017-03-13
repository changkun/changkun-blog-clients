'use strict'

document.addEventListener('DOMNodeInserted', (event) => {
  if (!!window && !(window.$)) {
    window.$ = window.jQuery = require('../utils/jquery.min')
  }
})
