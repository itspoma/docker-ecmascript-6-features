"use strict"

let depth = 2
let s1 = " ".repeat(4 * depth)
let s2 = "foo".repeat(3)

console.assert(s1.length === 4*depth)
console.assert(s2.length === 3*3)
console.log('passed')