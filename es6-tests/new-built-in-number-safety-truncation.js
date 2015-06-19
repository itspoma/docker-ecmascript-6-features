"use strict"

console.assert(42 === Math.trunc(42.7))
console.assert(0 === Math.trunc(0.1))
console.assert(0 === Math.trunc(-0.1))
console.log('passed')