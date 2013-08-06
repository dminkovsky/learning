var test = require('tape')

test('`typeof` a string', function(t) {
  t.equal(
      typeof 'asdas'
    , 'string'
    , "The `typeof` a String is `'string'`")
  t.end()
})
