import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers, getProducts } from '../../ducks/reducer' 
import { Link } from 'react-router-dom'
import './Home.css'
import axios from 'axios';

class Home extends Component{
  constructor(){
    super()
    
  }

  componentDidMount(){
    this.props.getProducts()
  }

  addToCart(product){
    axios.post('/api/addtocart', {product})
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }

  render(){
    let productsDisplay = !this.props.loading && this.props.products.map(prod => {
      return(
        <div className='product_card' id={prod.id}>
          <img src={prod.img} alt="stuff" height="150px" width="150px"/>
          <h3>{prod.title}</h3>
          <h5>{prod.price}</h5>
          <button onClick={() => this.addToCart(prod)}>Add to Cart</button>
        </div>
      )
    })
    return(
      <div className='products_container'>
        <Link to="/cart"><button style={{width:"100vw"}}>View Cart</button></Link>
        {!this.props.loading && productsDisplay}
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { getUsers, getProducts })(Home)