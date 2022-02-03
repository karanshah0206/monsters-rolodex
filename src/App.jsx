import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { monsters: [], searchQuery: "" };
  }

  // Lifecycle Event Called When Component Is Mounted (Rendered On DOM).
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(users => this.setState({monsters: users}));
  }

  /**
   * JavaScript doesn't allow functions to automatically get context of their class.
   * As a result, they must be manually bound in the constructor using the following syntax:
   * this.searchMonsters = this.searchMonsters.bind(this);
   * However, ES6 allows us to use arrow functions, so that this is not required.
   * If using regular functions, always remember to bind that function in the constructor to access this.
   * Note: Only applies for functions not inherited via Component (e.g. won't apply to  render()).
  */
  searchMonsters = e => { this.setState({searchQuery: e.target.value}); }

  render() {
    let filteredMonsters = this.state.monsters.filter(m => m.name.toLowerCase().includes(this.state.searchQuery.toLowerCase()));

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder={"Search Monsters..."} handleChange={this.searchMonsters} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
