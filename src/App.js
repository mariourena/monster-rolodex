import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { jsonPlaceholer } from './constants/urls';
import CardList from './components/card-list';

class App extends Component {
  constructor() {
    super();
    this.state = {
      string: `Hello, Mario Urena`,
      monsters: []
    }
  }
  render() {
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CardList>
          {this.state.monsters.map(p => <h1 key={p.id}>{p.name}</h1>)}
        </CardList>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    )
  }

  componentDidMount() {
    fetch(jsonPlaceholer)
      .then(response => response.json())
      .then(monsters => {
        // debugger;
        this.setState({monsters});
      });
  }

}



export default App;
