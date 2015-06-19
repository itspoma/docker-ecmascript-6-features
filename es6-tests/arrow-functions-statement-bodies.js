"use strict"

let nums = [1, 3, 5, 7, 10, 13, 15, 50]
  , fives = []

nums.forEach(v => {
    if (v % 5 === 0)
        fives.push(v)
})

console.assert(fives.length === 4)
console.log('passed')