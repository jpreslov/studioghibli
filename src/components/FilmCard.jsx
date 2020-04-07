import React from "react";
import "../index.css";

let FilmCard = props => {
  return props.movies.map(movie => (
      <div key={movie.id} className="card border-primary mb-3" id="film-card">
        <div className="card-body">
          <h5 className="card-title">{movie.title} ({movie.release_date})</h5>
          <h6 className="card-subtitle mb-2 text-muted">{movie.director}</h6>
          <p className="card-text">{movie.description}</p>
        </div>
      </div>
  ));
};

export default FilmCard;
