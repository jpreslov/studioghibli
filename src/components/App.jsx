import React, { Component } from "react";
import FilmCard from "./FilmCard";
import PeopleCard from "./PeopleCard";
import Header from "./Header";
import "../index.css";

class App extends Component {
  state = {
    movies: [],
    people: [],
    specificMovie: [],
    showFilms: false,
    showPeople: false
  };

  render() {
    if (this.state.showFilms) {
      fetch("http://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(obj => {
          this.setState({ movies: obj });
        });
      return (
        <React.Fragment>
          <Header />
          <div className="container">
            <FilmCard movies={this.state.movies} />
          </div>
        </React.Fragment>
      );
    } else if (this.state.showPeople) {
      fetch("http://ghibliapi.herokuapp.com/people")
        .then(res => res.json())
        .then(obj => {
          this.setState({ people: obj });
        });
      return (
        <React.Fragment>
          <Header />
          <div className="container">
            <PeopleCard people={this.state.people} />
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Header />
          <div className="row" id="button-div">
            <button
              className="btn btn-secondary"
              id="movie-button"
              onClick={() => {
                this.setState({ showFilms: true });
              }}
            >
              Load Films
            </button>
            <button
              className="btn btn-secondary"
              id="people-button"
              onClick={() => {
                this.setState({ showPeople: true });
              }}
            >
              Load People
            </button>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default App;
