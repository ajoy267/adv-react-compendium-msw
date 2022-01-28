export async function getPokemon(query) {
  const params = new URLSearchParams();
  params.set('pokemon', query);

  const resp = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${query}`);
  //start console logging to see if i even get anything back
  console.log('RESPONE', resp);
  const data = await resp.json();

  //https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${query}

  return data;
}
