import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'
import router from './router'
import { Provider } from 'react-redux'
import store from './ducks/store'
import Navbar from './components/Navbar/Navbar'
import './App.css';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <Navbar/>
            {router}
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
