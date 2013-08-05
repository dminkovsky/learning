var test = require('tape')

test("Importing a module that doesn't exist", function(t) {
  try {
    var mod = require('something_totally_fake!!!')
  }
  catch (e) {
    t.assert(
        e instanceof Error
      , 'Throws an error that is an `Error`')
    t.equal(
        e.code
      , 'MODULE_NOT_FOUND'
      , "The `Error` has a property `code` with value `'MODULE_NOT_FOUND'`"
    )
  }

  t.end()
})
