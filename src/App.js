import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [ { id: 0, name: "Frankenstein" },
                  { id: 1, name: "Dracula" },
                  { id: 2, name: "Zombie" } ]
    };
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
