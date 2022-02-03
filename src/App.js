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

  render() {

    let filteredMonsters = this.state.monsters.filter(m => m.name.toLowerCase().includes(this.state.searchQuery.toLowerCase()));

    return (
      <div className="App">
        <SearchBox placeholder={"Search Monsters..."} handleChange={e => this.setState({searchQuery: e.target.value})} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
