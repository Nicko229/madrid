import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductListContainer from './ProductListContainer';
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
      <BrowserRouter>
        <Switch>
          <Route path="/ProductListContainer" component={ProductListContainer} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
