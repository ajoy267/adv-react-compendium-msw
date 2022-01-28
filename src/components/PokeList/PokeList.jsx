import React from 'react';

export default function PokeList({ pokemon }) {
  return (
    <div>
      {pokemon.map((pokes) => (
        <p key={pokes.id}>{pokes.pokemon}</p>
      ))}
    </div>
  );
}
