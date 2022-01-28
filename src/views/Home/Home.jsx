import React, { useEffect, useState } from 'react';
import Controls from '../../components/Controls/Controls';
import PokeList from '../../components/PokeList/PokeList';
import { getPokemon } from '../../services/pokemon';
import './Home.css';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query);
      setPokemon(data.results);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [query, loading]);

  if (loading) return <h1>loading...</h1>;

  return (
    <div>
      <h1>Pokemon List</h1>
      <Controls query={query} setQuery={setQuery} setLoading={setLoading} />
      <PokeList pokemon={pokemon} />
    </div>
  );
}
