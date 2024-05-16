import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFetch from '../hooks/useFetch';
import { addToFavs, removeFromFavs } from '../slices/favoritesSlice';
import PageLoading from './PageLoading';
import PageError from './ErrorPage';
import Layout from '../Layout/Layout';

function PokeDetail() {
  const [isFav, setIsFav] = useState(false);
  const favs = useSelector((state) => state.favorites.favs);
  const dispatch = useDispatch();
  const { pokemonId } = useParams();
  const { data, loading, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);

  function isFaved() {
    const favIds = [];
    if (favs.length > 0) {
      favs.forEach((fav) => {
        favIds.push(fav.id);
      });
      setIsFav(favIds.includes(parseInt(pokemonId, 10)));
    }
  }

  useEffect(() => {
    isFaved();
  }, [pokemonId]);

  if (error) {
    return <PageError />;
  }

  if (loading) {
    return <PageLoading />;
  }

  const {
    height,
    weight,
    abilities,
    stats,
    sprites,
    name,
    id,
  } = data;

  return (
    <Layout>
      <div className="cointainer min-h-screen">
        <div className="flex justify-center mt-16 mx-auto max-w-[1440px] p-8 text-center">
          <div className="py-4 relative bg-slate-100 z-10 w-full flex flex-col sm:flex-row justify-center items-center sm:justify-evenly rounded-lg">
            <div className="image sm:w-1/4 flex justify-center sm:block">
              <img className="z-10" src={sprites.other.home.front_default} alt={name} height={256} width={256} />
            </div>
            <div className="details text-left w-1/2 sm:w-1/5 ">
              <Link to="..">
                <button
                  className="bg-red-500 z-10 px-2 py-1 rounded-sm absolute left-4 top-4"
                  type="button"
                >
                  Back
                </button>
              </Link>
              <button
                className="bg-yellow-400 z-10 px-2 py-1 rounded-sm absolute right-4 top-4"
                onClick={() => {
                  setIsFav(!isFav);
                  if (!isFav) {
                    dispatch(addToFavs({ id, name, image: sprites.other.home.front_default }));
                  } else {
                    dispatch(removeFromFavs({ id }));
                  }
                }}
                type="button"
              >
                { !isFav ? 'Add to Favs' : 'Remove from Favs' }
              </button>
              <div className="sizes">
                <h3 className="text-2xl text-blue-400 font-mono font-extrabold">Sizes:</h3>
                <div>
                  <span className="font-bold">Height:</span>
                  {` ${parseFloat(height * 0.1).toFixed(2)} M`}
                </div>
                <div>
                  <span className="font-bold">Weight:</span>
                  {` ${parseFloat(weight * 0.1).toFixed(2)} KG`}
                </div>
              </div>
              <div className="abilities">
                <h3 className="text-2xl text-blue-400 font-mono font-extrabold">Abilities:</h3>
                {
                  abilities.map(({ ability }) => <div className="capitalize" key={ability.name}>{ability.name}</div>)
                }
              </div>
              <div className="stats">
                <h3 className="text-2xl text-blue-400 font-mono font-extrabold">Stats:</h3>
                {
                  stats.map(({ stat, base_stat: baseStat }) => (
                    <div className="capitalize flex justify-between" key={stat.name}>
                      <div className="font-extrabold">
                        {stat.name}
                        :
                      </div>
                      <div>
                        {baseStat}
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PokeDetail;
