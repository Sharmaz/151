import { useState, useEffect } from 'react';
import './App.css'
import PokeCard from './app/components/Card';
import PokePagination from './app/components/Pagination';

function App() {
  const [pokeUrl, setPokeUrl] = useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20');
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonCount, setPokemonCount] = useState(0);
  const [nextUrl, setNextUrl] = useState('');
  const [previousUrl, setPreviousUrl] = useState('');

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(pokeUrl);
        const json = await response.json();
        const {count, next, previous, results } = json;
        setPokemonCount(count);
        setNextUrl(next);
        setPreviousUrl(previous);
        setPokemonList(results);

      } catch (error) {
        if (error) {
          console.log(error)
        }
      }
    }

    fetchPokemons();

  }, [pokeUrl]);

  return (
    <>
      <PokePagination nextUrl={nextUrl} previousUrl={previousUrl} setPokeUrl={setPokeUrl}/>
      { pokemonList
        ?
        pokemonList.map((pokemon, index) => <PokeCard key={index+1} name={pokemon.name} />)
        :
        null
      }
    </>
  )
}

export default App
