import React, { useEffect, useState } from 'react';
import { getCharacters } from '../services/apiService';
import '../styles/CharacterList.css'; 

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(response => {
        const results = response.data.results;
        setCharacters(results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="character-list">
      <div className="character-grid">
        {characters.map(character => (
          <div key={character.id} className="character-item">
            <h3>{character.name}</h3>
            <img src={character.image} alt={character.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterList;

