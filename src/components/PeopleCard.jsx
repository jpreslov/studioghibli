import React from "react";
import "../index.css";

let PeopleCard = props => {
  return props.people.map(person => (
    <div key={person.id} className="card border-primary mb-3" id="people-card">
      <div className="card-body">
        <h5 className="card-title">
          {person.name} ({person.gender})
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">{person.age}</h6>
        <a href={person.url} target="_blank">
          <p className="card-text">View JSON</p>
        </a>
      </div>
    </div>
  ));
};

export default PeopleCard;
