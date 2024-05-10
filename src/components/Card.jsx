import PropTypes from 'prop-types';

function PokeCard({ name }) {
  return (
    <div className="card">
      {name}
    </div>
  );
}

PokeCard.propTypes = {
  name: PropTypes.string,
};

export default PokeCard;
