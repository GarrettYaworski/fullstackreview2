import React from 'react'
import { connect } from 'react-redux';
import { updateUsername, updatePassword } from '../../ducks/reducer'
import axios from 'axios';

function Navbar(props){
  console.log(props)
  return(
    <div>
      <input type="text" placeholder="username" name='username' onChange={props.updateUsername}/>
      <input type="password" placeholder="password" name='password' onChange={props.updatePassword}/>
      <button onClick={() => {
        axios.post('/api/login', {username: props.username, password: props.password})
      }}>Submiddit</button>
      <button onClick={() => {
        axios.post('/api/register', {username: props.username, password: props.password})
      }}>Registerddit</button>
    </div>
  )
}
const mapStateToProps = state => state

export default connect(mapStateToProps, {updateUsername, updatePassword})(Navbar)