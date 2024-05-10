import PropTypes from 'prop-types';

function PokeDetail({ openDetailModal, setOpenDetailModal, pokeData }) {
  const {
    height,
    weight,
    abilities,
    stats,
    sprites,
    name,
  } = pokeData;

  return (
    <div className={`${openDetailModal ? 'flex' : 'hidden'} modal absolute top-0 left-0 justify-center items-center w-screen h-screen`}>
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-slate-900 opacity-50"
        onClick={() => setOpenDetailModal(false)}
        aria-hidden="true"
      />

      <div className="container relative bg-slate-100 z-10 w-full flex justify-evenly rounded-lg">
        <div className="image">
          <img className="z-10" src={sprites.other.home.front_default} alt={name} height={256} width={256} />
        </div>
        <div className="details text-left">
          <button
            className="bg-red-500 z-10 px-2 py-1 rounded-sm absolute left-4 top-4"
            onClick={() => setOpenDetailModal(false)}
            type="button"
          >
            Back
          </button>
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

PokeDetail.propTypes = {
  pokeData: PropTypes.shape({
    height: PropTypes.number,
    weight: PropTypes.number,
    name: PropTypes.string,
    abilities: PropTypes.arrayOf(PropTypes.shape()),
    sprites: PropTypes.shape(),
    stats: PropTypes.arrayOf(PropTypes.shape()),
  }),
  openDetailModal: PropTypes.bool,
  setOpenDetailModal: PropTypes.func,
};

export default PokeDetail;
