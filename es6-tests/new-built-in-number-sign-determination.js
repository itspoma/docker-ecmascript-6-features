"use strict"

console.assert(Math.sign(7) === 1)
console.log('passed')

console.assert(Math.sign(0) === 0)
console.log('passed')

console.assert(Math.sign(-0) === -0)
console.log('passed')

console.assert(Math.sign(-7) === -1)
console.log('passed')

// console.assert(Math.sign(NaN) === NaN)
// console.log('passed')