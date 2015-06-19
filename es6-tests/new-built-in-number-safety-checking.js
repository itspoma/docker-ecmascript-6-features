"use strict"

console.assert(Number.isSafeInteger(42) === true)
console.assert(Number.isSafeInteger(9007199254740992) === false)
console.log('passed')