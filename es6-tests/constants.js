"use strict"

const PI = 3.14

try {
    PI = 5
}
catch (e) {}

console.assert(PI == 3.14)
console.log('passed')