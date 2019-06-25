import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogs: {}
    };
  }

  componentDidMount() {
    this.getDogs('https://dog.ceo/api/breeds/image/random');
  }

  getDogs = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log("getDogs data", data);
        this.setState({ dogs: data.message });
        console.log(this.state);
      })

      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">A Beauty, On Every Refresh</h1>
        <div className="img-container"><img src={this.state.dogs} alt="A beautiful dog"></img></div>
      </div>
    );
  }
}

export default App;

// Cobrettie Garner