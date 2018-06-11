import React, { Component } from 'react'

export default class SearchBar extends Component {

  render() {
    return (
      <div>
        <h4> Search Bar : </h4>
        <input 
        type='search'
        placeholder='Enter the name here'
        onChange={event => this.props.changeValue(event.target.value)}        
        />
      </div>
    )
  }
}
