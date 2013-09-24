var test = require('tape')

test('Array.push() return value', function(t) {
  var arr = []
    , pushed = 'a'
    , ret = arr.push(pushed)

  t.equal(
      ret
    , arr.length
    , 'Array.push() returns the `length` property of the object upon which the method was called')

  t.end()
})
