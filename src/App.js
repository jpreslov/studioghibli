import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
     show: true,
     movies: []
  }

  toggleState = () => {
    this.setState(prevState => ({
      show: !prevState.show
    })) 
   
    if (this.state.show){
      return (
        <div class="card"></div>
      )
    }
  }

let btnStyle = {'backgroundColor'}

render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Studio Ghibli Filmography</h1>
        <button onClick={this.toggleState}>Show Films</button>
      </header>
    </div>
  );
}
}


export default App;
