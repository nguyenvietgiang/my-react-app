import './App.css';
import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Link to="/"><img src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" alt="Logo" width="300" height="150" /></Link> 
         <Routes>
            <Route path="/" element={<CharacterList />} />
            <Route path="/CharacterDetail/:id" element={<CharacterDetail />} />
        </Routes>
        <h2><strong>@2023 by Rick and Morty</strong></h2>
      </header>
    </div>
  );
}

export default App;

