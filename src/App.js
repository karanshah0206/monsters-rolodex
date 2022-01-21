import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { monsters: [] };
  }

  // Lifecycle Event Called When Component Is Mounted (Rendered On DOM).
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(users => this.setState({monsters: users}));
  }

  render() {
    return (
      <div className="App">
        { this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>) }
      </div>
    );
  }
}

export default App;
