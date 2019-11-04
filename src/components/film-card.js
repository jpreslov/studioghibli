import React from 'react';

const FilmCard = (props) => {

return (
    props.themovie.map(movie => ( 
        <div key={movie.id} className="card border-primary mb-3" >
            <div className="card-header">{movie.title}</div>
                <div className="card-body">
                <h4 className="card-title">{movie.director}</h4>
                <p className="card-text">{movie.description}</p>
                </div>
        </div>
    ))
    )
    }

export default FilmCard