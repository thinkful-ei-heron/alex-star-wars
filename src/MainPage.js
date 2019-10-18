import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';
import emperor from './img/emperor.gif'

class MainPage extends Component {
  render() {
    return(
    <div className='main-page-content'>
      <img className='main-page-image' src={emperor} alt='the senate'/>
      <Link to='/search'><button className='search-button'>Search your feelings. You know it to be true...</button></Link>
    </div>
    )
  }
}

export default MainPage