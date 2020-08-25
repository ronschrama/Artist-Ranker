import React, { useReducer, useState } from 'react';
import './App.css';

import Header from './components/Header'


const ArtistRankerContext = React.createContext();

const ACTIONS = {
  ADD_ARTIST: 'add-artist',
  INCREMENT_STAR: 'increment-star',
  DECREMENT_STAR: 'decrement-star'
}

function reducer(artists, action) {
  switch (action.type) {
    case ACTIONS.ADD_ARTIST:
      return [...artists, newArtist(action.payload.name)]
    case ACTIONS.INCREMENT_STAR:
      return [...artists, artists.rating + 1]
    case ACTIONS.DECREMENT_STAR:
      return [...artists,]
    default:
      return artists;
  }
}

function newArtist(name) {
  return { id: Date.now(), name: name, rating: 0 }
}


export default function App() {
  const [artists, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_ARTIST, payload: { name: name } })
    setName('');
  }
  console.log(artists);

  function decrementStar() {
    dispatch({ type: ACTIONS.DECREMENT_STAR })
  }

  function incrementStar() {
    dispatch({ type: ACTIONS.INCREMENT_STAR })
  }

  return (
    <ArtistRankerContext.Provider value={{ useState, dispatch }}>
      <div className="App">
        <Header />
        <h3>Add a new artist</h3>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Artist name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)} />
          <input type="submit" value="Add artist" />
        </form>
        <div className="artist-list">{artists.map((a, id) => (
          <div key={a.id}>
            {a.name}
            <button onClick={decrementStar}>-</button>
            {a.rating} stars
            <button onClick={incrementStar}>+</button>
          </div>
        ))}</div>
      </div>
    </ArtistRankerContext.Provider>
  );
}

