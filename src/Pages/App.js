import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Layout } from 'antd';
import { ProductList } from 'Pages/ProductList';
import { Cart } from 'Pages/Cart';
import { HeaderComponent } from 'Pages/Components';

const { Footer, Content } = Layout;

function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
          <Switch>
              <Layout style={styles.layoutStyle}>
                  <HeaderComponent />
                  <Content>
                      <Route path="/" component={ ProductList } exact/>
                      <Route path="/cart" component={ Cart } />
                  </Content>
                  <Footer>Footer</Footer>
              </Layout>
          </Switch>
      </Router>
  );
}

const styles = {
    layoutStyle: {
        minHeight: '100vh',
    }
};

export default App;
