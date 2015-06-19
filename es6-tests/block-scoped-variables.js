"use strict"

let callbacks = [];
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2 }
}

console.assert(callbacks[0]() === 0)
console.assert(callbacks[1]() === 2)
console.assert(callbacks[2]() === 4)
console.log('passed')