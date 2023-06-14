import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../services/apiService';
import '../styles/CharacterDetail.css';

const CharacterDetail = () => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await getCharacterById(id);
        setCharacter(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacter();
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }
  return (
    <div className="user-card">
      <div className="user-image">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="user-details">
        <h2 className="user-name">{character.name}</h2>
        <div className="user-info">
          <p><strong>Status:</strong> {character.status}</p>
          <p><strong>Species:</strong> {character.species}</p>
          <p><strong>Gender:</strong> {character.gender}</p>
          <p><strong>Origin:</strong> {character.origin.name}</p>
          <p><strong>Location:</strong> {character.location.name}</p>
        </div>
      </div>
    </div>
  );    
};

export default CharacterDetail;


