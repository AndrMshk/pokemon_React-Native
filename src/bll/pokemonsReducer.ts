import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../api/api';
import { Pokemon, PokemonItem } from '../types/types';

export const getAllPokemons = createAsyncThunk<PokemonItem[], void>('pokemonsReducer/getAllPokemons',
  async(_, { rejectWithValue }) => {
    try {
      const res = await api.getAllPokemons();
      return res.data.results;
    } catch (err) {
      return rejectWithValue(err);
    }
  });

export const getPokemon = createAsyncThunk<Pokemon, { url: string }>('pokemonsReducer/getPokemon',
  async(params, { rejectWithValue }) => {
    try {
      const res = await api.getPokemon(params.url);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  });

export const clearPokemon = createAction('pokemonsReducer/clearPokemon');

const rootSlice = createSlice({
  name: 'pokemonsReducer',
  initialState: {
    allPokemons: [] as PokemonItem[],
    pokemon: {} as Pokemon,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllPokemons.fulfilled, (state, action) => {
        state.allPokemons = action.payload ? action.payload : [];
      })
      .addCase(getPokemon.fulfilled, (state, action) => {
        state.pokemon = action.payload ? action.payload : {} as Pokemon;
      })
      .addCase(clearPokemon, (state) => {
        state.pokemon = {} as Pokemon;
      });
  },
});

export const pokemonsReducer = rootSlice.reducer;
