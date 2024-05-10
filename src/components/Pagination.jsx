import PropTypes from 'prop-types';

function PokePagination({ nextUrl, previousUrl, setPokeUrl }) {
  const totalOfPages = Math.ceil(151 / 20);
  const pagesList = [];
  for (let i = 1; i <= totalOfPages; i += 1) {
    pagesList.push(i);
  }

  return (
    <>
      <button
        onClick={() => setPokeUrl(previousUrl)}
        disabled={!previousUrl}
        type="button"
      >
        Previous
      </button>
      {
        pagesList.map((page, index) => (
          <button
            key={page}
            onClick={() => setPokeUrl(`https://pokeapi.co/api/v2/pokemon/?offset=${index * 20}&limit=20`)}
            type="button"
          >
            {page}
          </button>
        ))
      }
      <button
        onClick={() => setPokeUrl(nextUrl)}
        type="button"
      >
        Next
      </button>
    </>
  );
}

PokePagination.propTypes = {
  nextUrl: PropTypes.string,
  previousUrl: PropTypes.string,
  setPokeUrl: PropTypes.func,
};

export default PokePagination;
