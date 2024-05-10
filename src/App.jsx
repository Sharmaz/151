import { useState, useEffect } from 'react';
import './App.css';
import PokeCard from './components/Card';
import PokePagination from './components/Pagination';

function App() {
  const [pokeUrl, setPokeUrl] = useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20');
  const [pokemonList, setPokemonList] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [previousUrl, setPreviousUrl] = useState('');

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(pokeUrl);
        const json = await response.json();
        const {
          next, previous, results,
        } = json;
        setNextUrl(next);
        setPreviousUrl(previous);
        setPokemonList(results);
      } catch (error) {
        if (error) {
          console.log(error);
        }
      }
    };

    fetchPokemons();
  }, [pokeUrl]);

  return (
    <>
      { nextUrl.length > 0
        ? <PokePagination nextUrl={nextUrl} previousUrl={previousUrl} setPokeUrl={setPokeUrl} />
        : null }
      { pokemonList
        ? pokemonList.map((pokemon) => <PokeCard key={pokemon.name} name={pokemon.name} />)
        : null }
    </>
  );
}

export default App;
