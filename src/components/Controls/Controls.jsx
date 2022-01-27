import React from 'react';

export default function Controls({ query, setQuery, handleSubmit }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit" onClick={(e) => setQuery(e.target.value)}>
          Search
        </button>
      </form>
    </div>
  );
}
