import axios from 'axios'

const initialState = {
  users: [],
  products: [],
  loading: true
}

const GET_USERS = 'GET_USERS'
const GET_PRODUCTS = 'GET_PRODUCTS'
const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
const UPDATE_USERNAME = 'UPDATE_USERNAME'

export default function(state=initialState, action){
  console.log(action.type)
  switch (action.type) {
    case `${GET_USERS}_FULFILLED`:
      return {
        ...state, users: action.payload
      }
      case `${GET_USERS}_REJECTED`:
      return console.log('WHYYYYYY', action.payload)
      case `${GET_PRODUCTS}_FULFILLED`:
      return {
        ...state, products: action.payload.data, loading: false
      }
      case `${GET_PRODUCTS}_REJECTED`:
      return console.log('WHYYYYYY', action.payload)
      case UPDATE_USERNAME:
      return{
        ...state, username: action.payload
      }
      case UPDATE_PASSWORD:
      return{
        ...state, password: action.payload
      }
    default:
      return state
  }
}

export function getUsers(){
  return{
    type: 'GET_USERS',
    payload: axios('/api/users')
  }
}

export function getProducts(){
  return{
    type: GET_PRODUCTS,
    payload: axios('/api/products')
  }
}

// export function addToCart(prod){
//   return{
//     type: 'ADD_TO_CART',
//     payload: axios.post('/api/addtocart', prod)
//   }
// }

export function updateUsername(e){
 return{
   type: UPDATE_USERNAME,
   payload: e.target.value
 }
}
export function updatePassword(e){
 return{
   type: UPDATE_PASSWORD,
   payload: e.target.value
 }
}