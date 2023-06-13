import './App.css';
import React from 'react';
import CharacterList from './components/CharacterList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" alt="Logo" width="300" height="150" />
        <CharacterList />
          <h2><strong>@2023 by Rick and Morty</strong></h2>
          </header>
    </div>
  );
}


export default App;
