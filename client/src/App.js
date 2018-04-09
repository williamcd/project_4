import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShopList from './components/shop/ShopList'
import ShopView from './components/shop/ShopView'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/shops" component={ShopList} />
            <Route exact path="/shops/:id" component={ShopView} />
          </Switch>
        </div>
      </Router>
      );
    }
  }
  
  export default App;
