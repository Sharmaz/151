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
        { name: 'Pokemon', url: null }, { name: 'Pokemon', url: null },
        { name: 'Pokemon', url: null }, { name: 'Pokemon', url: null },
        { name: 'Pokemon', url: null }, { name: 'Pokemon', url: null },
        { name: 'Pokemon', url: null }, { name: 'Pokemon', url: null },
        { name: 'Pokemon', url: null }, { name: 'Pokemon', url: null },
        { name: 'Pokemon', url: null }, { name: 'Pokemon', url: null },
        { name: 'Pokemon', url: null }, { name: 'Pokemon', url: null },
        { name: 'Pokemon', url: null }, { name: 'Pokemon', url: null },
        { name: 'Pokemon', url: null }, { name: 'Pokemon', url: null },
        { name: 'Pokemon', url: null }, { name: 'Pokemon', url: null },
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
