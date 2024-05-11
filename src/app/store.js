import { configureStore } from '@reduxjs/toolkit';
import pokeListReducer from '../slices/pokeListSlice';
import favsSliceReducer from '../slices/favoritesSlice';

export default configureStore({
  reducer: {
    pokeList: pokeListReducer,
    favorites: favsSliceReducer,
  },
});
