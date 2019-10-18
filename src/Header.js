import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return(
    <Link 
      style={{ textDecoration: 'none' }}
      to='/'>
      <h1>Star Wars Search</h1>
    </Link>
  )
}

export default Header