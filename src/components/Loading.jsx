import React, { Component } from 'react'
import logo from '../images/logo.svg';
import './LoadingStyle.css';

export default class Loading extends Component {
  render() {
    return (
      <div>
        <header className="Loading-header">
            <img src={logo} className="Loading-logo" alt="logo" />
            <h1 className="Loading-title">Loading...</h1>
        </header>
      </div>
    )
  }
}
