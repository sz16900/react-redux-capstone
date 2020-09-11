import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';
import Product from './views/Product';
import Filter from './components/Filter';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route exact path="/">
              <Filter />
              <Home />
            </Route>
            <Route path="/products/:id">
              <Product />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
