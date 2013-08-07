var test = require('tape')

test('A regular expression produced with the regular expression literal syntax is an instance of `RegExp`', function(t) {
  t.ok(/someregexp/ instanceof RegExp, 'Yes')

  t.end()
})
