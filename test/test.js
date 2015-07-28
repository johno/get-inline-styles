var assert = require('assert')
var getInlineStyles = require('..')

describe('get-inline-styles', function() {

  it('return an array of styled tags', function() {
    assert.deepEqual(
      getInlineStyles('<h2 style="color:blue;">Hello, world!</h2>'),
      [{ tag: 'h2', style: 'color:blue;' }]
    )
  })

  it('returns an empty array if there are no inlined styles', function() {
    assert.deepEqual(getInlineStyles('<h2 style=" ">Hello, world!</h2>'), [])
  })
})
