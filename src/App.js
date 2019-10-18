import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainPage from './MainPage';
import Header from './Header';
import SearchPage from './SearchPage';
import ResultPage from './ResultPage';
import './App.css';
import UserContext from './UserContext';

class App extends Component {
  state = {results: {}}
  searchFunc(data){
    this.setState({results: data})
  }

  render() {
    return (
    <UserContext.Provider value={{
      results: this.state.results,
      searchFunc: this.searchFunc
    }}>
      <main className='App'>
        <Header />
        <Route exact path='/' component={ MainPage } />
        <Route path='/search' component={ SearchPage } />
        <Route path='/results' component={ ResultPage } />
      </main>
    </UserContext.Provider>
    );
  }
    
}

export default App;