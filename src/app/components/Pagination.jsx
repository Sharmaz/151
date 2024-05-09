function PokePagination({nextUrl, previousUrl, setPokeUrl}) {
  const totalOfPages = Math.ceil(151 / 20);
  const pagesList = [];
  for(let i = 1; i <= totalOfPages; i++) {
    pagesList.push(i);
  }
  
  return (
    <>
      <button
        onClick={() => setPokeUrl(previousUrl)}
        disabled={!previousUrl}
      >
        Previous
      </button>
      {
        pagesList.map((page, index) =>
          <button key={index+1}
            onClick={() => setPokeUrl(`https://pokeapi.co/api/v2/pokemon/?offset=${index * 20}&limit=20`)}
          >
            {page}
          </button>
        )
      }
      <button
        onClick={() => setPokeUrl(nextUrl)}
      >
        Next
      </button>
    </>
  )
}

export default PokePagination;
