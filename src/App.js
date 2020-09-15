import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './redux/store';
import Header from './components/Header';
import Home from './views/Home';
import Product from './views/Product';
import Filter from './components/Filter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Filter />
              <Home />
            </Route>
            <Route path="/products/:id">
              <Product />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
