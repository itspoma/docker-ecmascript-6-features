"use strict"

// console.assert("𠮷".length === 2)
// console.log('passed')

// console.assert("𠮷".match(/./u)[0].length === 2)
// console.log('passed')

// console.assert("\u{20BB7}" === "𠮷" === "\uD842\uDFB7")
// console.log('passed')

console.assert("𠮷".codePointAt(0) == 0x20BB7)
console.log('passed')

for (let codepoint of "𠮷") {
    console.assert(codepoint.length === 2)
    console.log('passed')
}