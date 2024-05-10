import { useState } from 'react';
import './App.css';
import PokeCard from './components/Card';
import PokePagination from './components/Pagination';
import useFetch from './hooks/useFetch';

function App() {
  const [pokeUrl, setPokeUrl] = useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20');

  const { data, loading, error } = useFetch(pokeUrl);
  const { next, previous, results } = data;

  if (error) {
    return <div>Error</div>;
  }

  if (loading) {
    return <div>...loading</div>;
  }

  return (
    <>
      <PokePagination nextUrl={next} previousUrl={previous} setPokeUrl={setPokeUrl} />
      <div className="list flex flex-wrap">
        {
          results.map((pokemon) => <PokeCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />)
        }
      </div>
    </>
  );
}

export default App;
