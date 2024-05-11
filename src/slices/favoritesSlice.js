import { createSlice } from '@reduxjs/toolkit';

const favsSlice = createSlice({
  name: 'favorites',
  initialState: {
    favs: [],
  },
  reducers: {
    addToFavs: (state, action) => {
      const ids = [];
      if (state.favs.length > 0) {
        state.favs.forEach((fav) => {
          ids.push(fav.id);
        });
      }
      if (!ids.includes(action.payload.id)) {
        state.favs = [...state.favs, action.payload];
      }
    },
    removeFromFavs: (state, action) => {
      function removePokemonById(arr, id) {
        const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
        arr.splice(objWithIdIndex, 1); return arr;
      }

      removePokemonById(state.favs, action.payload.id);
    },
  },
});

export const { addToFavs, removeFromFavs } = favsSlice.actions;

export default favsSlice.reducer;
