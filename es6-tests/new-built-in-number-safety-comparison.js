"use strict"

console.assert(false === (0.1 + 0.2 === 0.3))
console.assert(true === Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON)
console.log('passed')