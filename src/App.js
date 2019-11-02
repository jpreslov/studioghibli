import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
     show: true,
     movies: []
  }

  toggleState = () => {
    this.setState(prevState => ({
      show: !prevState.show
    })) 
  }

render() {
  if (this.state.show){
    return (
      <div class="card"></div>
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Studio Ghibli Filmography</h1>
        <button onClick={this.toggleState} style={btnStyle}>Show Films</button>
      </header>
    </div>
  );
}
}

const btnStyle = {
  backgroundColor: '#787'
}

export default App;
