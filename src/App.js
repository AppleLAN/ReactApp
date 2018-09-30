import React, { Component } from 'react';
import './App.scss';
import { Main } from './components/MainComponent';
import { Header } from './components/HeaderComponent';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
