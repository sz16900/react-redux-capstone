import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../redux/index';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

const success = actions.fetchProductsSuccess;

function fetchData() {
  return dispatch => fetch(
    'https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6',
  ) // Some async action with promise
    .then(() => dispatch(success()));
}

it('should execute fetch data', () => {
  const store = mockStore({});

  // Return the promise
  return store.dispatch(fetchData()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual(success());
  });
});
