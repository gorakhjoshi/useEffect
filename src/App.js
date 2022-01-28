import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='pokemon-info-app'>
      <form className='pokemon-form'>
        {console.log('Rendering pokemon Form UI')}
        <label htmlFor='pokemonName-input'>Pokemon Name</label>
        <small>
          Try{' '}
          <button className='invisible-button' type='button'>
            "pikachu"
          </button>
          {', '}
          <button className='invisible-button' type='button'>
            "charizard"
          </button>
          {', or '}
          <button className='invisible-button' type='button'>
            "mew"
          </button>
        </small>
        <div>
          <input
            className='pokemonName-input'
            id='pokemonName-input'
            name='pokemonName'
            placeholder='Pokemon Name...'
          />
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
