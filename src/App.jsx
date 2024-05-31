import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import PokeCard from './components/Card';
import PokePagination from './components/Pagination';
import { fetchPokemons } from './slices/pokeListSlice';
import PageLoading from './components/PageLoading';
import PageError from './components/ErrorPage';
import Layout from './Layout/Layout';

function App() {
  const [pokeUrl, setPokeUrl] = useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20');
  const pokeState = useSelector((state) => state.pokeList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons(pokeUrl));
  }, [pokeUrl]);

  const { data, loading, error } = pokeState;
  const { next, previous, results } = data;

  if (error) {
    return <PageError />;
  }

  if (loading) {
    return <PageLoading />;
  }

  return (
    <Layout>
      <div className="mt-16 mx-auto max-w-[1440px] p-8 text-center">
        { data
          ? <PokePagination nextUrl={next} previousUrl={previous} setPokeUrl={setPokeUrl} />
          : null}

        <div className="list flex flex-wrap justify-center">
          {
            results.map((pokemon) => <PokeCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />)
          }
        </div>
      </div>
    </Layout>
  );
}

export default App;
