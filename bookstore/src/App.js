import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }

  componentDidMount = () => {
    axios.get('http://localhost:4000/products')
      .then(res => {
        // console.log(res.data);
        this.setState({ images: res.data });
        console.log("state: ", this.state)
        res.json();
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const image = this.state.images.map(val => {
      return (
        <p>{val.image}</p>
      )
    })
    return (
      <div className="App">
        {image}
      </div>
    );
  }
}

export default App;
