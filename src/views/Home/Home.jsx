import React, { useEffect, useState } from 'react';
import Controls from '../../components/Controls/Controls';
import PokeList from '../../components/PokeList/PokeList';
import { getPokemon, getAllPokemon } from '../../services/pokemon';
import './Home.css';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllPokemon();
      setPokemon(data.results);
      setLoading(false);
    };
    const fetchSearch = async () => {
      const data = await getPokemon(query);
      setSearchPokemon(data.results);
      setLoading2(false);
    };
    fetchData();
    fetchSearch();
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  if (loading || loading2) return <h1>loading...</h1>;

  return (
    <div>
      <h1>Pokemon List</h1>
      <Controls query={query} setQuery={setQuery} handleSubmit={handleSubmit} />
      <PokeList pokemon={(pokemon, searchPokemon)} />
    </div>
  );
}
