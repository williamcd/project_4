import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShopList from './components/shop/ShopList'
import ShopView from './components/shop/ShopView'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/shops" component={ShopList} />
            <Route exact path="/shops/:id" component={ShopView} />
            {/* <Route exact path="/shops/:shop_id/items/:id" component={ItemView} /> */}
          </Switch>
          <Footer />
        </div>
      </Router>
      );
    }
  }
  
  export default App;
