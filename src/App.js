import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Product from './views/Product';
import Filter from './components/Filter';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Filter />
        <Router>
          <Switch>
            <Route exact path="/">
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
