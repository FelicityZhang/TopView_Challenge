
import React, { Component } from 'react';
import Product from './Product'

function Products( props ) {
    console.log( 'products:   ', props.items )
    let items = props.items.map( item => {
        return <Product item={ item } key={ item[ 'id' ] } />
    } )


    return (
        <div className="main">
            { items }
        </div>
    )
}

export default Products
