import test from 'ava'
import getInlineStyles from './'

test('returns an array of styled tags', t => {
  t.plan(1)

  t.same(
    getInlineStyles('<h2 style="color:blue;">Hello, world!</h2>'),
    [{ tag: 'h2', style: 'color:blue;' }]
  )
})

test('returns an empty array if there are no inlined styles', t => {
  t.plan(1)

  t.same(getInlineStyles('<h2 style=" ">Hello, world!</h2>'), [])
})
