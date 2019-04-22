import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  componentDidMount = () => {
    axios.get('http://localhost:4000/products')
      .then(res => {
        console.log(res.data);
        res.json();
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
