import React, { Component } from 'react'

import Loading from '../components/Loading'
import SearchBar from '../components/SearchBar'
import Card from '../components/Card'
import CardStored from '../components/CardStored'

import list from '../json/dummy.json'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props);

      this.state={
        loading: true,
        data: list,
        searchValue: '',
        savedContact: []
      }
  }


  componentDidMount () {
    setTimeout(() => {
      this.setState({
        loading:false
      })
    }, 2000);

    let dataListCopy = this.state.data;
    let savedContactCopy = this.state.savedContact;
    for (let i = 0; i < localStorage.length; i++) {
      
      let contact = { 
            username: localStorage.key(i), 
            picture: localStorage.getItem(localStorage.key(i)) 
      };
      savedContactCopy.push(contact);
      dataListCopy.find( found => found.id === contact.id ?
        found.id = 0 : '');
    }


    this.setState({
      savedContact: savedContactCopy
		})
  }

  changeValue (event) {
    this.setState({
      searchValue: event
    })
  }


  selectCard (contact, index) {
    const onLocalStorage = localStorage.getItem(contact.username);
    let dataListCopy = this.state.data;
    let savedContactCopy = this.state.savedContact;

    if (!onLocalStorage) {

      localStorage.setItem(contact.username, contact.picture);
      savedContactCopy.push(contact);
      
      dataListCopy.splice(index, 1);
    } 

    this.setState({
      data: dataListCopy,
      savedContact: savedContactCopy
    })

  }

  storedCard (contact, index) {
    const onLocalStorage = localStorage.getItem(contact.username);
    let dataListCopy = this.state.data;
    let savedContactCopy = this.state.savedContact;

    if (onLocalStorage) {

      localStorage.removeItem(contact.username);
      savedContactCopy.splice(index, 1);

      dataListCopy.push(contact);
    }

    this.setState({
      data: dataListCopy,
      savedContact: savedContactCopy
    })
  }


  render() {
    let filteredList = this.state.data.filter(matched => {
        return matched.username.toLowerCase()
        .indexOf(this.state.searchValue
        .toLowerCase()) !== -1;
      }
      );

    return (
      <div className="App">
          {this.state.loading ?

          <Loading /> :

          <div>
            <SearchBar 
            changeValue={this.changeValue.bind(this)}
            />
            <CardStored 
            storedCard={this.storedCard.bind(this)}
            savedContact={this.state.savedContact} />
            <h4>Contact List : </h4>
            <ul className='GridList'>
              <Card 
              selectedCard={this.state.selectedCard}
              filteredList={filteredList}
              selectCard={this.selectCard.bind(this)}
              />
            </ul>
          </div>

          }
      </div>
    );
  }
}

export default App;
