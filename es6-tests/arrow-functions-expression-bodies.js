"use strict"

let evens = [1, 2, 3, 4, 5]

let odds = evens.map(v => v + 1)
 console.assert(odds[0] === 2)
 console.assert(odds[4] === 6)
 console.log('passed')

let pairs = evens.map(v => ({ even: v, odd: v + 1 }))
 console.assert(pairs[0].even === 1)
 console.assert(pairs[0].odd === 2)
 console.assert(pairs[4].even === 5)
 console.assert(pairs[4].odd === 6)
 console.log('passed')

let nums = evens.map((v, i) => v + i)
 console.assert(nums[0] === 1)
 console.assert(nums[4] === 9)
 console.log('passed')