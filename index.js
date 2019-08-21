// var fs = require( 'fs' )
// var data = fs.readFileSync( 'data.json' )
// var products = JSON.parse( data ).products
// console.log( products )



// const imageDiv = document.querySelector( ".image" )
// const priceDiv = document.querySelector( ".price" )
// const nameDiv = document.querySelector( ".name" )
// const typeDiv = document.querySelector( ".type" )

// function display() {
//     products.map( product => {
//         imageDiv.innerText = product.image
//         nameDiv.innerText = 'Name: ' + product.name
//         priceDiv.innerText = 'Price: ' + product.price
//         typeDiv.innerText = 'Type: ' + product.product_type
//     } )
// }

// display()
'use strict'


const getPeople = function () {
    fetch( './data.json' )
        .then( function ( response ) {
            return response.json();
        } )
        .then( function ( people ) {
            console.log( people );
        } );
}
getPeople()