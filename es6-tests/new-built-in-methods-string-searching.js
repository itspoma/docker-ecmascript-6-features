"use strict"

console.assert(true === "hello".startsWith("ello", 1))
console.assert(true === "hello".endsWith("hell", 4))
console.assert(true === "hello".includes("ell"))
console.assert(true === "hello".includes("ell", 1))
console.assert(false === "hello".includes("ell", 2))
console.log('passed')