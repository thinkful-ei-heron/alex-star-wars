import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SearchPage.css';
import probe from './img/probe.gif';

class SearchPage extends Component {

  state = {
    searchValue: '',
    searchType: 'people',
    searchResults: {}
    // url: ''
  }

  setSearchValue = (input) => {
    this.setState({searchValue: input})
  }

  setSearchType = (input) => {
    this.setState({searchType: input})
  }

  handleSearch = () => {
    const newUrl = 'https://swapi.co/api/' + this.state.searchType + '/?search=' + this.state.searchValue.replace(' ', '%20').replace('\'', '%27')
    console.log(newUrl)
    fetch(newUrl, {
      method: 'Get',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
      if(!res.ok){
        throw new Error(res.status)
      }
      return res.json()
    })
    .then(data => {
      this.setState({
        searchResults: data
      })
      return data;
    })
    .then(() => {
      this.props.history.push({
        pathname: ('/results'),
        results: this.state.searchResults
      })
    })
    .catch(error => {
      console.error(error)
    })
  }

  validateSearch = () => {
    if(this.state.searchValue.length === 0){
      return 'Please Enter Input'
    }
  }

  render() {
    return(
      <div className='search-content'>
        <form className='search-form'>
          <label htmlFor='search' className='search-label'>
            <h3>Input Your Search</h3>
            <p className='error-message'>
              {this.validateSearch()}
            </p>
          </label>
          <select 
            className='search-field' 
            id='search-type'
            onChange={e => this.setSearchType(e.target.value)}
            >
              <option value='people'>People</option>
              <option value='films'>Films</option>
              <option value='starships'>Starships</option>
              <option value='vehicles'>Vehicles</option>
              <option value='species'>Species</option>
              <option value='planets'>Planets</option>
          </select>
          <input 
            className='search-field' 
            placeholder='Jar Jar Binks' 
            id='search-input' 
            type='text' 
            value={this.state.searchValue}
            onChange={e => this.setSearchValue(e.target.value)}
            />
          <Link to='/results'>
            <button 
              className='search-button-input'
               onClick={e => {
                e.preventDefault()
                if(this.state.searchValue.length > 0) {
                this.handleSearch()

              }}}
                >
              Search
            </button>
          </Link>
        </form>
        <img src={probe} className='search-img' alt='probe droid'></img>
      </div>
    )
  }
}

export default SearchPage