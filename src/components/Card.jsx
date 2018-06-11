import React, { Component } from 'react'

import './CardStyle.css'

export default class Card extends Component {

  render() {

    return (
      <div>
        {this.props.filteredList.map((contact, index) =>
            <li 
            key={index} 
            className='CardStyle'
            onClick={() => this.props.selectCard(contact, index)}
            >
                <img 
                src={contact.picture} 
                alt={`contact ${contact.username}`} />
                <p>{contact.username}</p>
            </li>
        )}
      </div>
    )
  }
}
