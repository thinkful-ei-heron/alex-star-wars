import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ResultPage.css';
import obiwan from './img/obiwan.gif';

class ResultPage extends Component {

  render() {
    return (
      <div className='result-content'>
          <h3 className='result-title'>
            Results:
          </h3>
          {(!this.props.history.location.results || this.props.history.location.results.count === 0) ?
            <div>
              <p className='missing-message'>Impossible. Perhaps the archives are incomplete...</p> 
              <img className='missing-image' src={obiwan} alt='obi-wan kenobi'></img>
            </div> :
            <div>
            <ul className='result-list'>
              
              {this.props.history.location.results.results.map((item, index) => <li className='result' key={index}>{item.name || item.title}</li>)}
            </ul>
            </div>
          }
      <Link to='/'><button className='results-button'>Main Menu</button></Link>
      <button className='results-button'><a href='https://starwars.fandom.com/wiki/Main_Page' rel="noopener noreferrer"target='_blank'>Wookieepedia</a></button>
      <Link to='/search'><button className='results-button'>Search Again</button></Link>
      </div>
    );
  }
    
}

export default ResultPage;