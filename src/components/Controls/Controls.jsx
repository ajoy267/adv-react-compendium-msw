import React from 'react';

export default function Controls({ query, setQuery, setLoading }) {
  return (
    <div>
      <input type="text" value={query} onInput={(e) => setQuery(e.target.value)} />
      <button onClick={() => setLoading(true)} type="submit">
        Search
      </button>
    </div>
  );
}
