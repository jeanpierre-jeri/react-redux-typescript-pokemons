import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { pokeApi } from '../../api/pokeApi'
import { Pokemons, Pokemon } from '../../models/pokemons'
import { RootState } from '../store'

export const fetchPokemons = createAsyncThunk('/pokemons', async () => {
  try {
    const { data } = await pokeApi('/pokemon?limit=151')
    return data.results
  } catch (error) {
    console.log(error)
  }
})

export interface PokemonState {
  pokemons: Pokemon[]
  loading: boolean
  error: string
  filteredPokemons: Pokemon[]
}

const initialState: PokemonState = {
  pokemons: [],
  loading: false,
  error: '',
  filteredPokemons: [],
}

export const pokemonSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    searchPokemon: (state, action: PayloadAction<string>) => {
      state.filteredPokemons = state.pokemons.filter((pokemon) =>
        pokemon.name.includes(action.payload)
      )
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPokemons.pending, (state, _action) => {
        state.loading = true
      })
      .addCase(fetchPokemons.fulfilled, (state, action: PayloadAction<Pokemon[]>) => {
        const pokemons = action.payload.map((pokemon, index) => {
          return {
            ...pokemon,
            id: index + 1,
          }
        })

        state.pokemons = pokemons
        state.filteredPokemons = pokemons
        state.loading = false
      })
  },
})

export const selectAllPokemons = (state: RootState) => state.pokemon.filteredPokemons
export const selectLoading = (state: RootState) => state.pokemon.loading

export const { searchPokemon } = pokemonSlice.actions
