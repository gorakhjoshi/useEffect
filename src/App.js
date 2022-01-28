import React from 'react';
import './App.css';
import { PokemonForm } from './Pokemon';

const App = () => {
  const [pokemonName, setPokemonName] = React.useState('');
  console.log(pokemonName);

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName);
  }

  return (
    <div className='pokemon-info-app'>
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
