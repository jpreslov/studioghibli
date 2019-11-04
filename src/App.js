import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import FilmCard from "./components/film-card";
import PeopleCard from "./components/people-card";

class App extends Component {

  state = {
    show: false,
    reveal: false,
    movies: [],
    people: []
  };

  toggleState = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  showPeople = () => {
    this.setState(prevState => ({
      reveal: !prevState.reveal
    }))
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films/")
      .then(function(res) {
        return res.json();
      })
      .then(
        result => {
          this.setState({ movies: result });
        },
        error => {
          this.setState({ error });
        }
      );

      fetch("https://ghibliapi.herokuapp.com/people/")
      .then(function(res) {
        return res.json();
      }) 
      .then(
        result => {
          this.setState({ people: result })
          console.log(this.state.people);
        },
        error => {
          this.setState({ error })
        }
      )
  }

  render() {

    if (this.state.show) {
      return (
        <div>
            <div className="col text-center">
            <a href="index.html"><img src="Studio_Ghibli_portal_logo.png" alt="Studio Ghibli logo" width="50%"/></a>
            </div>
         

          <PeopleCard thepeople={this.state.people}></PeopleCard>
          <button onClick={this.toggleState} className="btn btn-primary">
              Home
            </button>
        </div>
        )
    } else if (this.state.reveal){
      return (
      <div>
          <div className="col text-center">
          <a href="index.html"><img src="Studio_Ghibli_portal_logo.png" alt="Studio Ghibli logo" width="50%"/></a>
          </div>
        <FilmCard themovie={this.state.movies}></FilmCard>
        
        <button onClick={this.toggleState} className="btn btn-primary">
            Home
          </button>
      </div>
      )
    } else {
      return (
        <div className="card">
          <div className="col text-center">
          <img src="Studio_Ghibli_portal_logo.png" alt="Studio Ghibli logo" width="50%"/>
          </div>
          
          <button onClick={this.showPeople} className="btn btn-primary">
            Show Films
          </button>
          <button onClick={this.toggleState} className="btn btn-primary">
            Show People
          </button>
        </div>
      );
    }
  }
}
    



ReactDOM.render(<App />, document.getElementById("root"));
export default App;
