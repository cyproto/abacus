import React, { Component } from 'react';
import './App.scss';

//@Components
import AbacusItem from "./components/AbacusItem";
import Panel from "./components/Pannel";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      up: false
    }
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Abacus</h1>
          <Panel />
        </header>
        <AbacusItem />
      </div >
    );
  }
}

export default App;