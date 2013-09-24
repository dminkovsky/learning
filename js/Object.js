var test = require('tape')

test('Object.create()', function(t) {
  var HttpServerProto = require('http').Server.prototype
  var server = Object.create(HttpServerProto)

  t.ok(
      server instanceof require('http').Server
    , 'Creates an object such that `instanceof` works as expected')

  t.end()
})
