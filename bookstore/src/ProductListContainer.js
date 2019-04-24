import React, { Component } from 'react';
import axios from 'axios';
import Banner from './Banner';
import Popup from 'reactjs-popup';
import './ProductListContainer.css';

class ProductListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount = () => {
    axios.get('http://localhost:4000/products')
      .then(res => {
        this.setState({ books: res.data });
        console.log("state: ", this.state.books)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const image = this.state.books.map(val => {
      return (
        <div className="store-parent" key={val.title}>
          <div className="image-div" >
            <img alt="Thriller book cover" className="images" src={val.image} />
            <p className="book-text">{val.title}</p>
            <p className="book-text">{val.author}</p>
            <Popup className="popup" trigger={<button>See More</button>} >
              <div>
                <img alt="Thriller book cover" className="images" src={val.image} />
                <p>{val.title}</p>
                <p>{val.author}</p>
                <p>{val.description}</p>
                <p>${val.price}</p>
              </div>
            </Popup>
          </div>
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



export default ProductListContainer;