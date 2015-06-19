"use strict"

{
    function foo () { return 1 }
    console.assert(foo() === 1);
    console.log('passed');
    
    {
        function foo () { return 2 }
        console.assert(foo() === 2);
        console.log('passed');
    }

    console.assert(foo() === 1);
    console.log('passed');
}