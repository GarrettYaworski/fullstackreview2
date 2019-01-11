import React, {Component} from 'react'
import axios from 'axios';

export default class Cart extends Component{
  constructor(){
    super()

    this.state = {
      cart: []
    }
  }

  componentDidMount(){
    axios('/api/getcart').then(cart => this.setState({cart: cart.data}))
    .catch(err => console.log(err))
  }

  render(){
    console.log(this.state)
    return(
      <div>
        CART
      </div>
    )
  }
}