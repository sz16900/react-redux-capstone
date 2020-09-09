import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import JobContainer from './components/JobContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <JobContainer />
      </div>
    </Provider>
  );
}

export default App;
