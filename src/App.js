import React, { Component } from 'react';
import { jsonPlaceholer } from './constants/urls';
import { appTitle, searchPlaceholder } from './constants/strings';
import CardList from './components/card-list/card-list';
import Search from './components/search/search';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchText: '',
    }
  }

  updateSearch = ({target}) => {
    const searchText = target.value;
    this.setState({searchText});
  }

  filterMonstersBySearch = m => (new RegExp(this.state.searchText, 'gi')).test(m.name);

  render() {

    const { monsters, searchText } = this.state;
      
    return(
      <div className="App">
        <h1>{appTitle}</h1>
        <Search 
          updateSearch={this.updateSearch} 
          text={searchText} 
          placeholder={searchPlaceholder} />
        <CardList monsters={monsters.filter(this.filterMonstersBySearch)} />
      </div>
    )
  }

  componentDidMount() {
    fetch(jsonPlaceholer)
      .then(response => response.json())
      .then(monsters => {
        this.setState({monsters});
      });
  }

}

export default App;
