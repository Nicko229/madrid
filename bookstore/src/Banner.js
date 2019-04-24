import React, { Component } from 'react';
import './Banner.css';

export default class Banner extends Component {
  render() {
    return (
      <div className="banner-container">
        <h1 className="first-title">Detective Bookstore</h1>
        <p className="second-title">Your number 1 online store for your thriller fix </p>
      </div>
    )
  }
}