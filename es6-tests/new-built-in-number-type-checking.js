"use strict"

console.assert(Number.isNaN(42) === false)
console.assert(Number.isNaN(NaN) === true)
console.log('passed')

console.assert(Number.isFinite(Infinity) === false)
console.assert(Number.isFinite(-Infinity) === false)
console.assert(Number.isFinite(NaN) === false)
console.assert(Number.isFinite(123) === true)
console.log('passed')