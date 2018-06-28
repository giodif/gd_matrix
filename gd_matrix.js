// export const vsmultiply = (v, s) => v.map( n => n * s )
// export const vsdivide = (v, s) => v.map( n => n / s )
// const vmultiply = (m, v) => mmultiply( [v], m )[0]
// const similar = (m, w) => m.length === w.length && m[ 0 ].length === w[ 0 ].length

// how many cells in the matrix, irrespective of size

export const _2x2 = m => m[ 0 ][ 0 ] * m[ 1 ][ 1 ] - m[ 0 ][ 1 ] * m[ 1 ][ 0 ]
export const isNum = n => !Array.isArray(n) && !isNaN( parseFloat( n ) ) && isFinite( n )

// VECTOR OPERATIONS USED HERE
export const vvadd = (v, u) => v.map( (n, i) => n + u[i] )
export const vvsubtract = (v, u) => v.map( (n, i) => n - u[i] )
export const dot = (v, u) => v.map( (n, i) => n * u[i] ).reduce( (t, n) => t + n, 0 )

// USEFUL UTILITY
export const times = (c, f) => [...Array(c)].map((_, i) => f(i))

const size = m => m.reduce( (t, r) => t + r.length, 0 )
const square = m => m.reduce( (a, v) => a + m.length === v.length ? 0 : 1, 0) <= 0
const invertible = m => square(m) && determinant(m) !== 0

// Create a copy of the matrix
const clone = m => m.map( row => row.slice(0) )
// Create a square identity matrix of s degree
const identity = s => times( s, i => times( s, j => i === j ? 1 : 0 ) )

// traverse the whole matrix, taking some action on each cell
const each = (m, f) => m.map((r, i) => r.map((n, j) => f(n, i, j) ) )

// get matrix column
const col = (m, c) => m.map( r => r[c] )
// get matrix row
const row = (m, r) => m[r].slice(0)
// return transpose of matrix
const transpose = m => m[0].map( (n, i) => col(m, i) )

// Element wise add matrix w to matrix m
const madd = (m, w) => m.map( (v, i) => vvadd( v, w[ i ] ) )

// Element wise subtract matrix w form matrix m
const msubtract = (m, w) => m.map( (v, i) => vvsubtract( v, w[ i ] ) )

// Mattrix multiply m by w
const mmultiply = (m, w) => m.map( (v, i) => transpose(w).map( (v2, j) => dot( v, v2 ) ))

const smultiply = (m, s) => each( m, el => el * s )
const sdivide = (m, s) => each( m, el => el / s )

// determine the cofactor sign (+, -)
const sign = (p) => Math.pow( -1, p )

const minor = (m, r = 0, c = 0) => {    
    const w = clone(m)
    w.forEach(v => v.splice(c, 1))
    w.splice(r, 1)
    return determinant( w )
}

// use minors to construct the determinant
const determinant = m => {
    if( isNum(m) ){ return m}
    if( !square(m) ){ return false }
    const s = size(m)
    if( s === 4 ){ return _2x2(m) }
    if( s === 1 ){ return m[ 0 ][ 0 ] }
    return m.reduce( (det, row, i) => det + row[0] * sign(i) * determinant( minor(m, i, 0) ), 0)
}

const cofactor = (m, r, c) => minor( m, r, c ) * sign(r + c)

// These should be good because inverse works properly
/* nope */ const minorMatrix = m => each( m, (n, r, c) => minor( m, r, c ) )
/* nope */ const cofactorMatrix = m => each( m, (n, r, c) => minor( m, r, c ) * sign(r + c) )
/* nope */ const adjoint = m => transpose( cofactorMatrix( m ) )

const inverse = m => sdivide( adjoint( m ), determinant( m ) )

const M = { square, invertible, size, clone, col, row, each, transpose, adjoint, cofactor, minor, determinant, madd, msubtract, mmultiply, smultiply, sdivide, identity, minorMatrix, cofactorMatrix, inverse }

export default M
