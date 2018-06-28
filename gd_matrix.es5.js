"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// export const vsmultiply = (v, s) => v.map( n => n * s )
// export const vsdivide = (v, s) => v.map( n => n / s )
// const vmultiply = (m, v) => mmultiply( [v], m )[0]
// const similar = (m, w) => m.length === w.length && m[ 0 ].length === w[ 0 ].length

// how many cells in the matrix, irrespective of size

var _2x2 = exports._2x2 = function _2x2(m) {
    return m[0][0] * m[1][1] - m[0][1] * m[1][0];
};
var isNum = exports.isNum = function isNum(n) {
    return !Array.isArray(n) && !isNaN(parseFloat(n)) && isFinite(n);
};

// VECTOR OPERATIONS USED HERE
var vvadd = exports.vvadd = function vvadd(v, u) {
    return v.map(function (n, i) {
        return n + u[i];
    });
};
var vvsubtract = exports.vvsubtract = function vvsubtract(v, u) {
    return v.map(function (n, i) {
        return n - u[i];
    });
};
var dot = exports.dot = function dot(v, u) {
    return v.map(function (n, i) {
        return n * u[i];
    }).reduce(function (t, n) {
        return t + n;
    }, 0);
};

// USEFUL UTILITY
var times = exports.times = function times(c, f) {
    return [].concat(_toConsumableArray(Array(c))).map(function (_, i) {
        return f(i);
    });
};

var size = function size(m) {
    return m.reduce(function (t, r) {
        return t + r.length;
    }, 0);
};
var square = function square(m) {
    return m.reduce(function (a, v) {
        return a + m.length === v.length ? 0 : 1;
    }, 0) <= 0;
};
var invertible = function invertible(m) {
    return square(m) && determinant(m) !== 0;
};

// Create a copy of the matrix
var clone = function clone(m) {
    return m.map(function (row) {
        return row.slice(0);
    });
};
// Create a square identity matrix of s degree
var identity = function identity(s) {
    return times(s, function (i) {
        return times(s, function (j) {
            return i === j ? 1 : 0;
        });
    });
};

// traverse the whole matrix, taking some action on each cell
var each = function each(m, f) {
    return m.map(function (r, i) {
        return r.map(function (n, j) {
            return f(n, i, j);
        });
    });
};

// get matrix column
var col = function col(m, c) {
    return m.map(function (r) {
        return r[c];
    });
};
// get matrix row
var row = function row(m, r) {
    return m[r].slice(0);
};
// return transpose of matrix
var transpose = function transpose(m) {
    return m[0].map(function (n, i) {
        return col(m, i);
    });
};

// Element wise add matrix w to matrix m
var madd = function madd(m, w) {
    return m.map(function (v, i) {
        return vvadd(v, w[i]);
    });
};

// Element wise subtract matrix w form matrix m
var msubtract = function msubtract(m, w) {
    return m.map(function (v, i) {
        return vvsubtract(v, w[i]);
    });
};

// Mattrix multiply m by w
var mmultiply = function mmultiply(m, w) {
    return m.map(function (v, i) {
        return transpose(w).map(function (v2, j) {
            return dot(v, v2);
        });
    });
};

var smultiply = function smultiply(m, s) {
    return each(m, function (el) {
        return el * s;
    });
};
var sdivide = function sdivide(m, s) {
    return each(m, function (el) {
        return el / s;
    });
};

// determine the cofactor sign (+, -)
var sign = function sign(p) {
    return Math.pow(-1, p);
};

var minor = function minor(m) {
    var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    var w = clone(m);
    w.forEach(function (v) {
        return v.splice(c, 1);
    });
    w.splice(r, 1);
    return determinant(w);
};

// use minors to construct the determinant
var determinant = function determinant(m) {
    if (isNum(m)) {
        return m;
    }
    if (!square(m)) {
        return false;
    }
    var s = size(m);
    if (s === 4) {
        return _2x2(m);
    }
    if (s === 1) {
        return m[0][0];
    }
    return m.reduce(function (det, row, i) {
        return det + row[0] * sign(i) * determinant(minor(m, i, 0));
    }, 0);
};

var cofactor = function cofactor(m, r, c) {
    return minor(m, r, c) * sign(r + c);
};

// These should be good because inverse works properly
/* nope */var minorMatrix = function minorMatrix(m) {
    return each(m, function (n, r, c) {
        return minor(m, r, c);
    });
};
/* nope */var cofactorMatrix = function cofactorMatrix(m) {
    return each(m, function (n, r, c) {
        return minor(m, r, c) * sign(r + c);
    });
};
/* nope */var adjoint = function adjoint(m) {
    return transpose(cofactorMatrix(m));
};

var inverse = function inverse(m) {
    return sdivide(adjoint(m), determinant(m));
};

var M = { square: square, invertible: invertible, size: size, clone: clone, col: col, row: row, each: each, transpose: transpose, adjoint: adjoint, cofactor: cofactor, minor: minor, determinant: determinant, madd: madd, msubtract: msubtract, mmultiply: mmultiply, smultiply: smultiply, sdivide: sdivide, identity: identity, minorMatrix: minorMatrix, cofactorMatrix: cofactorMatrix, inverse: inverse };

exports.default = M;
