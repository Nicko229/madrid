import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import axios from 'axios';





// export default class ProductDetailComponent extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       isSelected: false,
//       books: []
//     }
//   }

// componentDidMount = () => {
//   this.setState({ isSelected: true })
//   axios.get('http://localhost:4000/products')
//     .then(res => {
//       console.log(res);
//       res.json();
//     })
//     .catch(error => {
//       console.log(error)
//     })
// }

// componentDidMount = () => {
//   axios.get('http://localhost:4000/products')
//     .then(res => {
//       // console.log(res.data);
//       this.setState({ books: res.data });
//       const obj = res.data;
//       ;
//       console.log(Object.keys(obj))
//       // res.json();
//     })
//     .catch(error => {
//       console.log(error)
//     })
// }

//   render() {

//     return (
//       <div>
//       <Popup trigger={<button>See More</button>} position="center">
//         <img className="images" src={val.image} />
//         <p>{val.title}</p>
//         <p>{val.author}</p>
//         <p>{val.description}</p>
//         <p>${val.price}</p>

//       </Popup>
//       </div>
//       <div></div>
//     )
//   }
// }

