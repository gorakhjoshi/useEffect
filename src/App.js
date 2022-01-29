import React from 'react';
import { PokemonForm, PokemonInfoFallback, PokemonDataView } from './Pokemon';

function PokemonInfo({ pokemonName }) {
  console.log(pokemonName);
  const pokemon = null;
  if (!pokemonName) {
    return 'Submit a Pokemon';
  } else if (!pokemon) {
    return <PokemonInfoFallback name={pokemonName} />;
  } else {
    return <PokemonDataView pokemon={pokemon} />;
  }
}

const App = () => {
  const [pokemonName, setPokemonName] = React.useState('');

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName);
  }

  return (
    <div className='pokemon-info-app'>
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className='pokemon-info'>
        <PokemonInfo pokemonName={pokemonName} />
      </div>
    </div>
  );
};

export default App;
