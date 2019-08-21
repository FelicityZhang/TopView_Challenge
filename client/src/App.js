import './App.css';
import React, { Component } from 'react';
import Products from './Products'


class App extends Component {

  constructor ( props ) {
    super( props )
    this.state = {
      products: ""
    }
  }

  componentDidMount() {
    let endPoint = `https://api.myjson.com/bins/10kyrb`
    fetch( endPoint )
      .then( response => response.json() )
      .then( jsonData => {
        this.setState( prevState => ( {
          products: jsonData.products
        } ) )
      } )
  }

  render() {
    return (
      <div className="main">
        {
          this.state.products &&
          < Products items={ this.state.products } />
        }
      </div>
    )
  }
}

export default App;
