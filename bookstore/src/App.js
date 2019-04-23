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

  componentDidMount = () => {
    axios.get('http://localhost:4000/products')
      .then(res => {
        // console.log(res.data);
        this.setState({ books: res.data });
        console.log(res.data)
        // res.json();
      })
      .catch(error => {
        console.log(error)
      })
  }


  // create an onClick function that saves the image id when it is clicked.


  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/ProductListContainer" component={ProductListContainer} />
          <Route path="/ProductDetailComponent" component=
            {ProductDetailComponent} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
