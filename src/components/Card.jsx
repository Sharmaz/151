import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function PokeCard({ name, url }) {
  const { data, loading, error } = useFetch(url);
  const [clicks, setClicks] = useState(0);
  const [openImageModal, setOpenImageModal] = useState(false);
  const navigate = useNavigate();
  let pokemonId = '';
  if (url) {
    pokemonId = url.replace('https://pokeapi.co/api/v2/pokemon', '').replace(/\//g, '');
  }

  const goToDetailPage = (id) => {
    navigate(`/pokemons/${id}`);
  };

  const showImageModal = () => {
    setOpenImageModal(true);
  };
  useEffect(() => {
    let singleClickTimer;
    if (clicks === 1) {
      singleClickTimer = setTimeout(() => {
        showImageModal();
        setClicks(0);
      }, 250);
    } else if (clicks === 2) {
      goToDetailPage(pokemonId);
      setClicks(0);
    }
    return () => clearTimeout(singleClickTimer);
  }, [clicks]);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.type === 'click') {
      setClicks(clicks + 1);
    } else if (e.type === 'dbclick') {
      setClicks(clicks + 2);
    }
  };

  if (error) {
    return <div>Error</div>;
  }

  if (loading) {
    return <div>...loading</div>;
  }

  const {
    sprites,
    types,
  } = data;

  return (
    <div className="container w-64">
      <div
        className="card flex flex-col  bg-red-500 rounded-lg m-4 p-8"
        onClick={handleClick}
        aria-hidden="true"
      >
        <h3 className="card-title text-3xl text-yellow-300 font-mono font-extrabold">{name}</h3>
        <img src={sprites.other.home.front_default} alt="name" width={160} height={160} />
        <div className="tags flex justify-center">
          {
            types.map(({ type }) => <span className={`${type.name} px-2 py-1 mx-1 rounded-md`} key={type.name}>{type.name}</span>)
          }
        </div>
      </div>

      <div className={`${openImageModal ? 'flex' : 'hidden'} modal absolute top-0 left-0 justify-center items-center w-screen h-screen`}>
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-slate-900 opacity-50"
          onClick={() => setOpenImageModal(false)}
          aria-hidden="true"
        />
        <img className="z-10" src={sprites.other.home.front_default} alt={name} />
        <button
          className="bg-red-500 z-10 px-2 py-1 rounded-sm"
          onClick={() => setOpenImageModal(false)}
          type="button"
        >
          Close
        </button>
      </div>
    </div>
  );
}

PokeCard.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};

export default PokeCard;
