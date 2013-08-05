var test = require('tape')

test('String.replace', function(t) {
  var str = 'ab1cdab2cdab3cd'
    , reg = /ab(\d)cd/g
    , matches = []
    , submatches = []
    , offsets = []
    , strings = []

  str.replace(reg, function(match, submatch, offset, string) {
    matches.push(match)
    submatches.push(submatch)
    offsets.push(offset)
    strings.push(string)
  })

  t.deepEqual(
      matches
    , ['ab1cd', 'ab2cd', 'ab3cd']
    , '')

  t.deepEqual(
      submatches
    , ['1', '2', '3']
    , '')

  t.deepEqual(
      offsets
    , [0, 5, 10]
    , ''
  )

  t.deepEqual(
      strings
    , [str, str, str]
    , ''
  )

  t.end()
})
