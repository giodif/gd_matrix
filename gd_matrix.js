// export const vsmultiply = (v, s) => v.map( n => n * s )
// export const vsdivide = (v, s) => v.map( n => n / s )
// const vmultiply = (m, v) => mmultiply( [v], m )[0]
// const similar = (m, w) => m.length === w.length && m[ 0 ].length === w[ 0 ].length


// VECTOR OPERATIONS USED HERE
export const vvadd = (v, u) => v.map( (n, i) => n + u[i] )
export const vvsubtract = (v, u) => v.map( (n, i) => n - u[i] )
export const dot = (v, u) => v.map( (n, i) => n * u[i] ).reduce( (t, n) => t + n, 0 )

// USEFUL UTILITY
export const times = (c, f) => [...Array(c)].map((_, i) => f(i))

const square = m => m.reduce( (a, v) => a + m.length === v.length ? 0 : 1, 0) <= 0
const clone = m => m.map( row => row.slice(0) )

const col = (m, c) => m.map( r => r[c] )
const row = (m, r) => m[r].slice(0)
const each = (m, f) => m.map((r, i) => r.map((n, j) => f(n, i, j) ) )
const transpose = m => m[0].map( (n, i) => col(m, i) )
const identity = s => times( s, i => times( s, j => i === j ? 1 : 0 ) )
const madd = (m, w) => m.map( (v, i) => vvadd( v, w[ i ] ) )
const msubtract = (m, w) => m.map( (v, i) => vvsubtract( v, w[ i ] ) )
const mmultiply = (m, w) => m.map( (v, i) => transpose(w).map( (v2, j) => dot( v, v2 ) ))
const smultiply = (m, s) => each( m, el => el * s )
const sdivide = (m, s) => each( m, el => el / s )

// how many cells in the matrix, irrespective of size
const size = m => m.reduce( (t, r) => t + r.length, 0 )

// diagonal sum operation for calculating determinant
// square matrix
// const sumdiag = m => {
//     return m.reduce( (sum, row, i) => {
//         return sum + row.reduce( (prod, n, j) => {
//             return prod * m[j][(i + j) % row.length]
//         }, 1 )
//     }, 0 )
// }

// only square matrices
// this only works on degree 1, 2, 3
// not a good solution
// const determinant = m => {
//     if( !square(m) ){ return "NOT SQUARE" }
//     if( size(m) === 1 ){ return m[ 0 ][ 0 ] }
//     if( size(m) === 4 ){ return m[ 0 ][ 0 ] * m[ 1 ][ 1 ] - m[ 0 ][ 1 ] * m[ 1 ][ 0 ] }
//     return sumdiag( m ) - sumdiag( m.map( row => row.reverse() ) )
// }

const minor = (m, r = 0, c = 0) => {    
    const w = clone(m)
    w.forEach(v => v.splice(c, 1))
    w.splice(r, 1)
    return determinant( w )
}

// use minors to construct the determinant
const determinant = m => {

    m.map()
}

const invertible = m => square(m) && determinant(m) !== 0



// determine the cofactor sign (+, -)
const sign = (r, c) => Math.pow( -1, r + c )
const cofactor = (m, r, c) => minor( m, r, c ) * sign(r, c)

/* nope */ const minorMatrix = m => m.map( (v, i) => v.map( (n, j) => minor( clone( m ), i, j ) ) )
/* nope */ const cofactorMatrix = m => each( minorMatrix( m ), (n, r, c) => n * sign(r, c) )
/* nope */ const adjoint = m => transpose( cofactorMatrix( m ) )
/* nope */ const inverse = m => sdivide( adjoint( m ), determinant( m ) )

const M = { square, invertible, size, clone, col, row, each, transpose, adjoint, cofactor, minor, determinant, madd, msubtract, mmultiply, smultiply, sdivide, identity, minorMatrix, cofactorMatrix, inverse }

export default M
