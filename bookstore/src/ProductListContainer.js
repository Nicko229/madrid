import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import Banner from './Banner';
import Popup from 'reactjs-popup';
import fetchBooks from './actions/getActions';
import PropTypes from 'prop-types';
import './ProductListContainer.css';

class ProductListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentWillMount = () => {
    this.props.fetchBooks()
  }

  render() {
    const image = this.props.books.map(val => {
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

// VERY shaky abou this!
ProductListContainer.propTypes = {
  fetchBooks: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  // unsure about this!!
  books: state.books.items
})

export default connect(mapStateToProps, { fetchBooks })(ProductListContainer);