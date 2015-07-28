'use strict'
var cheerio = require('cheerio')
var isPresent = require('is-present')

module.exports = function getInlineStyles(html) {
  if (typeof html !== 'string') {
    throw new TypeError('get-inline-styles expected a string')
  }

  var inlinedStyles = []
  cheerio.load(html)('*[style]').each(function(i, element) {
    if (isPresent(element.attribs.style)) {
      inlinedStyles.push({
        tag: element.name,
        style: element.attribs.style
      })
    }
  })

  return inlinedStyles
}
