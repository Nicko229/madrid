import React, { Component } from 'react';

export default class ProductDetailComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSelected: false
    }
  }

  componentDidMount = () => {
    this.setState({ isSelected: true })
    axios.get('http://localhost:4000/products')
      .then(res => {
        console.log(res);
        res.json();
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>hello</div>
    )
  }
}