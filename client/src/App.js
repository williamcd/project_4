import React, { Component } from 'react';
import ShopConfirm from './components/shop/ShopConfirm'
import ShopForm from './components/shop/ShopForm'
import ShopList from './components/shop/ShopList'
import ShopView from './components/shop/ShopView'

class App extends Component {
  render() {
    return (
      <div>
        <ShopConfirm />
        <ShopForm />
        <ShopList />
        <ShopView />
      </div>
      );
    }
  }
  
  export default App;
