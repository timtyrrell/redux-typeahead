import React, { Component } from 'react';
import TypeAheadApp from './TypeAheadApp';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import items from '../reducers/items';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(items);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <TypeAheadApp />}
      </Provider>
    );
  }
}

export default App;
