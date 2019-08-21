import React, { Component } from 'react';
import './App.css'


class Product extends Component {
    constructor ( props ) {
        super( props )
        this.state = {
            isAdd: false
        }

        this.handleClick = this.handleClick.bind( this )
    }


    handleClick( e ) {
        e.stopPropagation()
        alert( 'Added to cart, Thanks!' )
    }

    render() {
        return (
            <div className="productItem">
                <div><img className="image" src={ this.props.item.image }></img></div>
                <div className='details'>
                    <div className="name">NAME: { this.props.item.name }</div>
                    <div className="price">PRICE: ${ this.props.item.price }</div>
                    <div className="type">PRODUCT_TYPE: { this.props.item.product_type }</div>
                </div>
                <div><button onClick={ this.handleClick }>add to cart</button></div>
            </div>
        )
    }
}

export default Product
