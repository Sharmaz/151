import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './app/store';
import App from './App';
import PokeDetail from './components/DetailPage';
import './index.css';
import PokeFavorites from './components/FavoriteList';
import PageError from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageError />,
  },
  {
    path: 'pokemons/:pokemonId',
    element: <PokeDetail />,
  },
  {
    path: 'favorites',
    element: <PokeFavorites />,
  },
], { basename: '/151' });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
