import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://dog.ceo/api/breeds/image/random');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log("getCharacters data", data);
        this.setState({ starwarsChars: data.results });
      })

      // .then(data => {
      //   console.log("getCharacters data", data);
      //   this.setState({ starwarsChars: data.next });
      // })

      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <StarWarsList starwarsChars={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;