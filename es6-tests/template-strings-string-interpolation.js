"use strict"

var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }

console.assert(`Hello ${customer.name}` === "Hello Foo")
console.assert(`a ${card.amount * card.unitprice} b` === "a 294 b")
console.log('passed')