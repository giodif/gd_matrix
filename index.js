const M = require("./gd_matrix.es5").default;

const vvadd = require("./gd_matrix.es5").vvadd;
const vvsubtract = require("./gd_matrix.es5").vvsubtract;
const dot = require("./gd_matrix.es5").dot;
const vsmultiply = require("./gd_matrix.es5").vsmultiply;
const vsdivide = require("./gd_matrix.es5").vsdivide;
const times = require("./gd_matrix.es5").times;

const v  = [7,4,5,3,6,3]
const u  = [8,1,2,4,5,2]
const vv = [2,4,6,3,7,3]
const uu = [4,1,2,5,3,7]
const vvv = [4,2,7]

const m = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
const mm = [
    [4, 7, 2],
    [5, 1, 9],
    [1, 6, 2]
]

const mmm = [
    [1, 1, 0, 1],
    [2, 5, 4, 2],
    [3, 6, 1, 4],
    [4, 7, 2, 9]
]

const mmmm = [
    [1, 1, 0, 1, 5],
    [2, 5, 4, 2, 2],
    [3, 6, 1, 4, 7],
    [4, 7, 2, 9, 12],
    [4, 1, 2, 5, 3]
]



const n = [
    [1, 2, 3, 5, 7],
    [4, 5, 6, 2, 9],
    [7, 8, 9, 1, 2]
]
const nn = [
    [3, 3, 12, 6, 1],
    [7, 2, 10, 0, 6],
    [9, 6, 73, 1, 2]
]
const nnn = [
    [2, 5, 3],
    [8, 4, 1],
    [5, 2, 0],
    [3, 8, 4],
    [1, 1, 1]
]

console.log( "VVADD" )
// console.log( vvadd( v, u ) )
// console.log( vvadd( vv, uu ) )

console.log( "VVSUBTRACT" )
// console.log( vvsubtract( v, u ) )
// console.log( vvsubtract( vv, uu ) )

console.log( "DOT" )
// console.log( dot( v, u ) )
// console.log( dot( vv, uu ) )

console.log( "VSMULTIPLY" )
// console.log( vsmultiply( v, 3 ) )
// console.log( vsmultiply( u, 3 ) )

console.log( "VSDIVIDE" )
// console.log( vsdivide( v, 3 ) )
// console.log( vsdivide( u, 3 ) )

console.log( "TIMES" )
// console.log( times( 3, i => i ) )
// console.log( times( 10, i => "a" ) )

console.log( "SQUARE" )
// console.log( M.square( m ) )
// console.log( M.square( n ) )

console.log( "INVERTIBLE" )
// console.log( M.invertible( m ))
// console.log( M.invertible( n ))

console.log( "CLONE" )
// console.log( M.clone( m ) )
// console.log( M.clone( n ) )

console.log( "COL" )
// console.log( M.col( m, 2 ) )
// console.log( M.col( n, 4 ) )

console.log( "ROW" )
// console.log( M.row( m, 1 ) )
// console.log( M.row( n, 1 ) )

console.log( "EACH" )
// console.log( M.each( m, (n, r, c) => n + r * c ) )
// console.log( M.each( n, (n, r, c) => n + r * c ) )

console.log( "TRANSPOSE" )
// console.log( M.transpose( m ) )
// console.log( M.transpose( n ) )

console.log( "IDENTITY" )
// console.log( M.identity( 4 ) )

console.log( "SIMILAR" )
// console.log( M.similar( m, mm ) )
// console.log( M.similar( n, nn ) )
// console.log( M.similar( m, n ) )
// console.log( M.similar( mm, nn ) )

console.log( "MADD" )
// console.log( M.madd( m, mm ) )
// console.log( M.madd( n, nn ) )

console.log( "MSUBTRACT" )
// console.log( M.msubtract( m, mm ) )
// console.log( M.msubtract( n, nn ) )

console.log( "MMULTIPLY" )
// console.log( M.mmultiply( m, mm ) )
// console.log( M.mmultiply( n, nnn ) )

console.log( "VMULTIPLY" )
// console.log( M.vmultiply( m, vvv ) )
// console.log( M.vmultiply( mm, vvv ) )

console.log( "SMULTIPLY" )
// console.log( M.smultiply( m, 4 ) )
// console.log( M.smultiply( mm, 3 ) )

console.log( "SDIVIDE" )
// console.log( M.sdivide( m, 4 ) )
// console.log( M.sdivide( mm, 3 ) )

console.log( "DETERMINANT" )
// console.log( M.determinant( m ) )
// console.log( M.determinant( mm ) )
// console.log( M.determinant( mmm ) )
// console.log( M.determinant( mmmm ) )
// console.log( M.determinant( [[4]] ) )
// console.log( M.determinant( [[4, 3], [7, 9]] ) )

// console.log( "INVERTIBLE" )
// console.log( M.invertible( m ) )
// console.log( M.invertible( mm ) )
// console.log( M.invertible( mmm ) )
// console.log( M.invertible( mmmm ) )
// console.log( M.invertible( [[4]] ) )
// console.log( M.invertible( [[4, 3], [7, 9]] ) )

console.log( "INVERSE" )
// console.log( M.inverse( mm ) )
// console.log( M.inverse( mmm ) )
// console.log( M.inverse( mmmm ) )

console.log( "MINOR" )
// console.log( M.minor( m, 1, 1 ) )
// console.log( M.minor( mm, 1, 1 ) )


















