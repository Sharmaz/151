import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';

function PokeCard({ name, url }) {
  const { data, loading, error } = useFetch(url);
  const [clicks, setClicks] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const goToDetailPage = () => {
    // console.log('single clicked!');
  };

  const showModal = () => {
    setOpenModal(true);
  };
  useEffect(() => {
    let singleClickTimer;
    if (clicks === 1) {
      singleClickTimer = setTimeout(() => {
        goToDetailPage();
        setClicks(0);
      }, 250);
    } else if (clicks === 2) {
      showModal();
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

  const { sprites, types } = data;

  return (
    <div
      className="card flex flex-col w-64 bg-red-500 rounded-lg m-4 p-8"
      onDoubleClick={handleClick}
      onClick={handleClick}
      aria-hidden="true"
    >
      <h3 className="card-title text-3xl text-yellow-300 font-mono font-extrabold">{name}</h3>
      <img src={sprites.other.home.front_default} alt="name" />
      <div className="tags flex justify-center">
        {
          types.map(({ type }) => <span className={`${type.name} px-2 py-1 mx-1 rounded-md`} key={type.name}>{type.name}</span>)
        }
      </div>
      <div className={`${openModal ? 'flex' : 'hidden'} modal absolute top-0 left-0 justify-center items-center w-screen h-screen`}>
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-slate-900 opacity-50"
          onClick={() => setOpenModal(false)}
          aria-hidden="true"
        />
        <img className="z-10" src={sprites.other.home.front_default} alt={name} />
        <button
          className="bg-red-500 z-10 px-2 py-1 rounded-sm"
          onClick={() => setOpenModal(false)}
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
