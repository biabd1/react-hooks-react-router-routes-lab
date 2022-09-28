import React from "react";
import { actors } from "../data";

function Actors() {

  const getActrs= actors.map((act)=>(
    <div key={act.name} >
      <h2>{act.name}</h2>
      <ul>
        {act.movies.map((movie)=>(
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>

  )) 


  return (
    <div>
      <h1>Actors Page</h1>
      {getActrs}
    </div>
   
  )
}

export default Actors;