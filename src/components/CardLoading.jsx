import PokeBall from '../assets/pokeball.svg';

function CardLoading() {
  return (
    <div className="container w-64">
      <div className="card flex flex-col justify-center items-center bg-red-500 rounded-lg m-4 p-8 h-[292px]">
        <img className="animate-spin" src={PokeBall} alt="pokeball" />
      </div>
    </div>
  );
}

export default CardLoading;
