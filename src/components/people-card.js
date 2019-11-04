import React from 'react';

const PeopleCard = ( myprops ) => {
    console.log(myprops);

     return (
    myprops.thepeople.map(person => ( 
        <div key={person.id} className="card border-primary mb-3" >
        <div className="card-header">{person.name}</div>
            <div className="card-body">
            <h4 className="card-title">{person.age}</h4>
            <p className="card-text">{person.gender}</p>
        <a href={person.url}>{person.url}</a>
            </div>
        </div>
      ))
     )
    }
    
    export default PeopleCard