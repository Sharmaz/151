import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function PokePagination({ nextUrl, previousUrl, setPokeUrl }) {
  const [isLastPage, setIsLastPage] = useState(false);
  const totalOfPages = Math.ceil(151 / 20);
  const pagesList = [];
  for (let i = 1; i <= totalOfPages; i += 1) {
    pagesList.push(i);
  }

  return (
    <>
      <button
        className="bg-blue-500 px-2 py-1 rounded-sm mx-1"
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
            className="bg-blue-500 px-2 py-1 rounded-sm mx-1"
            onClick={() => {
              let limit = 20;
              if (index === pagesList.length - 1) {
                limit = 11;
                setIsLastPage(true);
              } else { setIsLastPage(false); }
              setPokeUrl(`https://pokeapi.co/api/v2/pokemon/?offset=${index * 20}&limit=${limit}`);
            }}
            type="button"
          >
            {page}
          </button>
        ))
      }
      <button
        className="bg-blue-500 px-2 py-1 rounded-sm mx-1"
        onClick={() => {
          const offsetParam = nextUrl.split('?')[1].split('&')[0].split('=')[1];
          if (offsetParam >= 140) {
            setPokeUrl('https://pokeapi.co/api/v2/pokemon/?offset=140&limit=11');
            setIsLastPage(true);
          } else {
            setIsLastPage(false);
            setPokeUrl(nextUrl);
          }
        }}
        disabled={isLastPage}
        type="button"
      >
        Next
      </button>
      <Link to="/favorites">
        <button
          className="bg-blue-500 px-2 py-1 rounded-sm mx-1"
          type="button"
        >
          Favorites
        </button>

      </Link>
    </>
  );
}

PokePagination.propTypes = {
  nextUrl: PropTypes.string,
  previousUrl: PropTypes.string,
  setPokeUrl: PropTypes.func,
};

export default PokePagination;
