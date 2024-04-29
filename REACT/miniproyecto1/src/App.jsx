import { useState } from 'react'
import React from "react";
import './App.css'
const charactersMock = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
  },
];
const App = () => {
    const [characterList, setCharacterList] = React.useState([]);
  
    React.useEffect(() => {
      (async () => {
        let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
          (res) => res.json()
        );
  
        setCharacterList(data.results);
      })();
    }, []);
    return (
      <>
        {characterList.map((character) => (
 <div key={character.id}>
  {character.status == "Alive" &&
 <p>
            <h2>name: {character.name}</h2>
            <img src={character.image}/>
            <h2 className="h2">origin: {character.origin.name}</h2>
            <h2 className="h2">status: {character.status}</h2>
            </p>
           }
           </div>
        ))}
      </>
    );
  };
  
  export default App;