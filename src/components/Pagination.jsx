import PropTypes from 'prop-types';
import { useState } from 'react';

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
            onClick={() => {
              setPokeUrl(`https://pokeapi.co/api/v2/pokemon/?offset=${index * 20}&limit=20`);
              if (index === pagesList.length - 1) {
                setIsLastPage(true);
              } else { setIsLastPage(false); }
            }}
            type="button"
          >
            {page}
          </button>
        ))
      }
      <button
        onClick={() => {
          setPokeUrl(nextUrl);
          const offsetParam = nextUrl.split('?')[1].split('&')[0].split('=')[1];
          if (offsetParam >= 140) {
            setIsLastPage(true);
          } else { setIsLastPage(false); }
        }}
        disabled={isLastPage}
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
