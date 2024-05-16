import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPokemons = createAsyncThunk('fetchPokemons', async (url) => {
  const data = await fetch(url);
  return data.json();
});

const pokeListSlice = createSlice({
  name: 'pokeList',
  initialState: {
    loading: false,
    data: {
      results: [
        { name: 'Pokemon_1', url: null }, { name: 'Pokemon_11', url: null },
        { name: 'Pokemon_2', url: null }, { name: 'Pokemon_12', url: null },
        { name: 'Pokemon_3', url: null }, { name: 'Pokemon_13', url: null },
        { name: 'Pokemon_4', url: null }, { name: 'Pokemon_14', url: null },
        { name: 'Pokemon_5', url: null }, { name: 'Pokemon_15', url: null },
        { name: 'Pokemon_6', url: null }, { name: 'Pokemon_16', url: null },
        { name: 'Pokemon_7', url: null }, { name: 'Pokemon_17', url: null },
        { name: 'Pokemon_8', url: null }, { name: 'Pokemon_18', url: null },
        { name: 'Pokemon_9', url: null }, { name: 'Pokemon_19', url: null },
        { name: 'Pokemon_10', url: null }, { name: 'Pokemon_20', url: null },
      ],
    },
    error: false,
  },
  extraReducers: (builder) => {
    // eslint-disable-next-line
    builder.addCase(fetchPokemons.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    // eslint-disable-next-line
    builder.addCase(fetchPokemons.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default pokeListSlice.reducer;
