import axios from 'axios';
import { BASE_URL } from '../constants/constants';
import { Pokemon, PokemonItem } from '../types/types';

export const instance = axios.create({
  baseURL: BASE_URL,
});

export const api = {
  getAllPokemons() {
    return instance.get<{ results: PokemonItem[] }>('/pokemon');
  },
  getPokemon(url: string) {
    return instance.get<Pokemon>(url.replace(BASE_URL, ''));
  },
};




