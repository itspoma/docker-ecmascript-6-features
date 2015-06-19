"use strict"

let get = (a,b,c,d) => [a,b,c,d]
let bar = 1
  , baz = 5
  , quux = 12

let v = get`test${bar + baz}&quux=${quux}`

console.assert(v[0][0] === 'test')
console.assert(v[0][1] === '&quux=')
console.assert(v[1] === (bar + baz))
console.assert(v[2] === quux)
console.log('passed')