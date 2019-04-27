import { GET_BOOKS } from './types';
import axios from 'axios';

const fetchBooks = () => dispatch => {
  // axios.get('http://localhost:4000/products')

  //   .then(res => {
  //     res.json()
  //       .then(books =>
  //         dispatch({
  //           type: GET_BOOKS,
  //           payload: books
  //         }))
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })


  fetch('http://localhost:4000/products')
    .then(res => res.json())

    .then(books =>
      dispatch({
        type: GET_BOOKS,
        payload: books
      })
    )
}

export default fetchBooks;