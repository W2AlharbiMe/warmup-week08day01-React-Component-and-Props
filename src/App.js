import React from 'react';
import House from './components/house/House';
import Characters from './components/characters/Characters';
import data from './data';

function App() {
  return (
    <div className="App">
      <h1>Houses</h1>
      <div className="houses">
        {data.map((house, index) => (<House key={index} house={house} />))}
      </div>
      <h1>Characters</h1>
      <div className="chars">
        {data.map((house, index) => (<Characters key={index} character={house.notableCharacter} house={house.houseName} />))}
      </div>
    </div>
  );
}

export default App;
