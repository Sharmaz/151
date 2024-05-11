import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function PokeFavorites() {
  const favs = useSelector((state) => state.favorites.favs);
  return (
    <div>
      <Link to="..">
        <button
          className="bg-red-500 z-10 px-2 py-1 rounded-sm absolute left-4 top-4"
          type="button"
        >
          Back
        </button>
      </Link>
      <h2 className="text-3xl text-blue-400 font-mono font-extrabold my-4">Favorites</h2>
      <div className="favs-container flex flex-wrap">
        { favs.length > 0
          ? favs.map((fav) => (
            <div className="w-64 flex flex-col bg-blue-400 rounded-lg m-4 p-8" key={fav.name}>
              <img src={fav.image} alt={fav.name} width={160} height={160} />
              <h3 className="text-3xl text-yellow-300 font-mono font-extrabold my-4">{fav.name}</h3>
            </div>
          ))
          : null }
      </div>
    </div>
  );
}

export default PokeFavorites;
