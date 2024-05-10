import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';

function PokeCard({ name, url }) {
  const { data, loading, error } = useFetch(url);

  if (error) {
    return <div>Error</div>;
  }

  if (loading) {
    return <div>...loading</div>;
  }

  const { sprites, types } = data;

  return (
    <div className="card flex flex-col w-64 bg-red-500 rounded-lg m-4 p-8">
      <h3 className="card-title text-3xl text-yellow-300 font-mono font-extrabold">{name}</h3>
      <img src={sprites.other.home.front_default} alt="name" />
      <div className="tags flex justify-center">
        {
          types.map(({ type }) => <span className={`${type.name} px-2 py-1 mx-1 rounded-md`} key={type.name}>{type.name}</span>)
        }
      </div>
    </div>
  );
}

PokeCard.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};

export default PokeCard;
