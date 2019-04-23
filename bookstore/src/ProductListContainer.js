import React, { Component } from 'react';
import axios from 'axios';
import Banner from './Banner';
import { NavLink } from 'react-router-dom'
import './ProductListContainer.css';

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
    const image = this.state.books.map(val => {
      return (
        <div className="image-div">
          <NavLink to="ProductDetailComponent">
            <img className="images" src={val.image} />
            <p>{val.title}</p>
            <p>{val.author}</p>
          </NavLink>
        </div>
      )
    })
    return (
      <div className="App" >
        <Banner />
        {image}
      </div>
    );
  }
}

export default App;