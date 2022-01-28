import React from 'react';

export function PokemonForm({
  pokemonName: externalPokemonName,
  initialPokemonName = externalPokemonName || '',
  onSubmit,
}) {
  const [pokemonName, setPokemonName] = React.useState(initialPokemonName);
  console.log(pokemonName);

  function handleChange(e) {
    setPokemonName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(pokemonName);
  }

  function handleSelect(newPokemonName) {
    setPokemonName(newPokemonName);
    onSubmit(newPokemonName);
  }
  return (
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
  );
}
