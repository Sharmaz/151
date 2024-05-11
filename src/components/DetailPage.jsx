import { useParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function PokeDetail() {
  const { pokemonId } = useParams();

  const { data, loading, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);

  if (error) {
    return <div>Error</div>;
  }

  if (loading) {
    return <div>...loading</div>;
  }

  const {
    height,
    weight,
    abilities,
    stats,
    sprites,
    name,
  } = data;

  return (
    <div className={`${'flex'} modal absolute top-0 left-0 justify-center items-center w-screen h-screen`}>

      <div className="container relative bg-slate-100 z-10 w-full flex justify-evenly rounded-lg">
        <div className="image">
          <img className="z-10" src={sprites.other.home.front_default} alt={name} height={256} width={256} />
        </div>
        <div className="details text-left">
          <Link to="..">
            <button
              className="bg-red-500 z-10 px-2 py-1 rounded-sm absolute left-4 top-4"
              type="button"
            >
              Back
            </button>
          </Link>
          <div className="sizes">
            <h3 className="text-2xl text-blue-400 font-mono font-extrabold">Sizes:</h3>
            <div>
              {`Height: ${height}`}
            </div>
            <div>
              {`Weight: ${weight}`}
            </div>
          </div>
          <div className="abilities">
            <h3 className="text-2xl text-blue-400 font-mono font-extrabold">Abilities:</h3>
            {
              abilities.map(({ ability }) => <div key={ability.name}>{ability.name}</div>)
            }
          </div>
          <div className="stats">
            <h3 className="text-2xl text-blue-400 font-mono font-extrabold">Stats:</h3>
            {
              stats.map(({ stat, base_stat: baseStat }) => <div key={stat.name}>{`${stat.name}: ${baseStat}`}</div>)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokeDetail;
