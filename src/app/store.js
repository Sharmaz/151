import { configureStore } from '@reduxjs/toolkit';
import pokeListReducer from '../slices/pokeListSlice';

export default configureStore({
  reducer: {
    pokeList: pokeListReducer,
  },
});
