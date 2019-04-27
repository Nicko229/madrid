import { GET_BOOKS } from './types';
import axios from 'axios';

const fetchBooks = () => dispatch => {
  axios.get('http://localhost:4000/products')
    .then((response) => {
      dispatch({
        type: GET_BOOKS,
        payload: response.data
      })
    })
}

export default fetchBooks;