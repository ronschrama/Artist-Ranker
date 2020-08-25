import React from 'react'

export default function ArtistCard() {
  return (
    <div className="artist-card">
      {artists.map((a, id) => (
        <div>
          <div classname='artist-img'>
            <img key={a.id}>{a.img}</img>
          </div>
          <div className='artist-info'>
            <p key={a.id}>{a.name}</p>
            <button>+</button><p key={a.id}>{a.rating}</p><button>-</button>
          </div>
        </div>
      ))}
    </div>
  )
}
