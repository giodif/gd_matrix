# Imaginary.js

Complex number calculations:

* addition
* subtraction
* multiplication
* division
* absolute value
* conjugate
* complex conjugate
* reciprocal
* normalization

This object offers two versions of each function. Functions that begin with an `_` prefix are mutators, they will alter the existing Complex Number. Functions without an `_` prefix will return a new Complex number or a scalar number.

**Create a new Complex number** - The real component of the number is passed first, the imaginary component of the number is passed second. Both values default to 0.

```js
    var num = new I( 2, 3 );

    // num.r = 2 Real component
    // num.i = 3 Imaginary component
```

```js

    var n1 = new I( 2, 3 );

    n1._sadd( 3 );
    // notice the underscore
    // n1 has been altered in place
    // n1.r = 5 Real component
    // n1.i = 3 Imaginary component

    var n2 = new I( 7, 2 );

    n2.sadd( 3 );
    // no underscore
    // n2 isn't altered
    // n2.r = 7 Real component
    // n2.i = 2 Imaginary component

    var n3 = n2.sadd( 3 );
    // no underscore
    // n2 isn't altered
    // n3.r = 10 Real component
    // n3.i = 2 Imaginary component
```