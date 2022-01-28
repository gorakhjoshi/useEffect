import React from 'react';
import './App.css';

const App = () => {
  const [pokemonName, setPokemonName] = React.useState('');

  console.log(pokemonName);

  function handleChange(e) {
    setPokemonName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setPokemonName(pokemonName);
  }

  function handleSelect(newPokemonName) {
    setPokemonName(newPokemonName);
  }
  return (
    <div className='pokemon-info-app'>
      <form onSubmit={handleSubmit} className='pokemon-form'>
        <label htmlFor='pokemonName-input'>Pokemon Name</label>
        <small>
          Try{' '}
          <button
            className='invisible-button'
            type='button'
            onClick={() => handleSelect('pikachu')}
          >
            "pikachu"
          </button>
          {', '}
          <button
            className='invisible-button'
            type='button'
            onClick={() => handleSelect('charizard')}
          >
            "charizard"
          </button>
          {', or '}
          <button
            className='invisible-button'
            type='button'
            onClick={() => handleSelect('mew')}
          >
            "mew"
          </button>
        </small>
        <div>
          <input
            className='pokemonName-input'
            id='pokemonName-input'
            name='pokemonName'
            placeholder='Pokemon Name...'
            value={pokemonName}
            onChange={handleChange}
          />
          <button type='submit' disabled={!pokemonName.length}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
