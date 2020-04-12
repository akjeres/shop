import React from 'react';
import { ProductList } from 'Pages/ProductList';
import { Cart } from 'Pages/Cart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
      <Router>
          <Switch>
            <Route path="/" component={ ProductList } exact/>
            <Route path="/cart" component={ Cart } />
          </Switch>
      </Router>
  );
}

export default App;
