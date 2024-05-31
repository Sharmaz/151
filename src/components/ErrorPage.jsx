import { useRouteError } from 'react-router-dom';

function PageError() {
  const error = useRouteError();

  return (
    <div className="container flex justify-center items-center">
      <div className="bg-red-500 p-8 rounded-lg">
        <div className="error-message">
          <h1 className="text-2xl text-yellow-300 font-mono font-extrabold">Oops!</h1>
          <p className="text-2xl text-yellow-300 font-mono font-extrabold">Sorry, an unexpected error has occurred.</p>
          <i className="text-4xl text-yellow-300 font-mono font-extrabold">{error.statusText || error.message}</i>
        </div>
      </div>
    </div>
  );
}

export default PageError;
