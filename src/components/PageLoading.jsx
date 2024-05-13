import PokeBall from '../assets/pokeball.svg';

function PageLoading() {
  return (
    <div className="container w-screen">
      <div className="flex justify-center items-center h-screen animate-bounce">
        <img className="animate-spin" src={PokeBall} alt="pokeball" />
      </div>
    </div>
  );
}

export default PageLoading;
