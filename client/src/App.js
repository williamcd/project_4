import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShopList from './components/shop/ShopList'
import ShopView from './components/shop/ShopView'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { injectGlobal } from 'styled-components'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Homemade+Apple|Tangerine|Yantramanav|Cinzel');

button {
  padding: 10px;
  font-family: Cinzel;
  font-size: 25px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  -webkit-transition-duration: 0.25s;
  transition-duration: 0.25s;
  align-items: center;
  width: 200px;
}
button:hover {
  background-color: black;
  color: white;
}
`

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
  
  export default App
