import React from 'react';
import { ProductList } from 'Pages/ProductList';
import { ProductDetail } from 'Pages/ProductDetails';
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
            <Route path="/details" component={ ProductDetail } />
          </Switch>
      </Router>
  );
}

export default App;
