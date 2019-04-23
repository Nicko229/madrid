import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Banner from './Banner';
import ProductListContainer from './ProductListContainer';
import ProductDetailComponent from './ProductDetailComponent';
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
          {/* <Route path="/ProductDetailComponent" component=
            {ProductDetailComponent} /> */}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
