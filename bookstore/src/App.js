import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductListContainer from './ProductListContainer';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  render() {
    return (
      <Provider
        store={store}
      >
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ProductListContainer} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
