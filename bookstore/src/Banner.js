import React, { Component } from 'react';
import './Banner.css';

export default class Banner extends Component {
  render() {
    return (
      <div className="banner-container">
        <h2 className="first-title">Detective Bookstore</h2>
        <p className="second-title">Your number 1 online store for you thriller fix </p>
      </div>
    )
  }
}