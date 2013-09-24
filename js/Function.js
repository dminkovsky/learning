var test = require('tape')

test('A function is an instance of `Function`', function(t) {
  t.ok(function() {} instanceof Function, 'Yes')

  t.end()
})
