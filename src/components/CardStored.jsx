import React, { Component } from 'react'

import './CardStyle.css'

export default class CardStored extends Component {

  render() {
    return (
      <div>
        <h4>Saved Contact :</h4>
        {this.props.savedContact.map((stored, index)=>
            <div 
            key={index} 
            className='CardStyle'
            onClick={() => this.props.storedCard(stored, index)}
            >
                <img 
                src={stored.picture} 
                alt={`stored ${stored.username}`} />
                <p>{stored.username}</p>
            </div>
        )}
      </div>
    )
  }
}
