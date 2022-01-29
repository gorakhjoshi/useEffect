import React from 'react';

export function PokemonForm({
  pokemonName: externalPokemonName,
  initialPokemonName = externalPokemonName || '',
  onSubmit,
}) {
  const [pokemonName, setPokemonName] = React.useState(initialPokemonName);

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

export function PokemonInfoFallback({ name }) {
  // const initialName = React.useRef(name).current;
  const fallbackPokemonData = {
    name: name,
    number: 'XXX',
    image: '/img/fallback-pokemon.jpg',
    attacks: {
      special: [
        { name: 'Loading Attack 1', type: 'Type', damage: 'XX' },
        { name: 'Loading Attack 2', type: 'Type', damage: 'XX' },
      ],
    },
    fetchedAt: 'loading...',
  };
  return <PokemonDataView pokemon={fallbackPokemonData} />;
}

export function PokemonDataView({ pokemon }) {
  return (
    <div>
      <div className='pokemon-info__img-wrapper'>
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <section>
        <h2>
          {pokemon.name}
          <sup>{pokemon.number}</sup>
        </h2>
      </section>
      <section>
        <ul>
          {pokemon.attacks.special.map((attack) => (
            <li key={attack.name}>
              <label>{attack.name}</label>:{' '}
              <span>
                {attack.damage} <small>({attack.type})</small>
              </span>
            </li>
          ))}
        </ul>
      </section>
      <small className='pokemon-info__fetch-time'>{pokemon.fetchedAt}</small>
    </div>
  );
}
