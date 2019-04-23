import React, { Component } from 'react';
import axios from 'axios';
import Banner from './Banner';
import Popup from 'reactjs-popup';
import { NavLink } from 'react-router-dom'
// import ProductDetailComponent from './ProductDetailComponent';
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
        console.log("state: ", this.state.books[0].title)
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
        <div>
          <div className="image-div">
            <img className="images" src={val.image} />
            <p>{val.title}</p>
            <p>{val.author}</p>
          </div>
          <Popup trigger={<button>See More</button>} position="center">
            <img className="images" src={val.image} />
            <p>{val.title}</p>
            <p>{val.author}</p>
            <p>{val.description}</p>
            <p>${val.price}</p>

          </Popup>
          {/* <ProductDetailComponent /> */}
        </div>
      )
    })
    return (
      <div className="App" >
        <Banner />
        {image}
        {/* <ProductDetailComponent /> */}
      </div>
    );
  }
}



export default App;