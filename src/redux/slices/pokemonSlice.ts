import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { pokeApi } from '../../api/pokeApi'
import { Pokemons, Pokemon, PokemonResponse, Result } from '../../models'
import { RootState } from '../store'

export const fetchPokemons = createAsyncThunk(
  '/pokemons',
  async (limit: number = 151, thunkApi) => {
    try {
      const { data } = await pokeApi.get<Pokemons>(`/pokemon?limit=${limit}`)
      return data.results
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)

export const fetchPokemon = createAsyncThunk(
  '/pokemon/pokemonName',
  async (pokemon: string, thunkApi) => {
    try {
      const { data } = await pokeApi.get<PokemonResponse>(`/pokemon/${pokemon}`)
      return data
    } catch (error: any) {
      return thunkApi.rejectWithValue(error)
    }
  }
)

export interface PokemonState {
  pokemons: Pokemon[]
  loading: boolean
  error: any
  filteredPokemons: Pokemon[]
  pokemon: PokemonResponse | null
  combatList: Pokemon[]
  isPokemonInCombatList: Boolean
}

const initialState: PokemonState = {
  pokemons: [],
  loading: false,
  error: '',
  filteredPokemons: [],
  pokemon: null,
  combatList: [],
  isPokemonInCombatList: false,
}

export const pokemonSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    searchPokemon: (state, action: PayloadAction<string>) => {
      state.filteredPokemons = state.pokemons.filter(
        (pokemon) => pokemon.name.includes(action.payload) || String(pokemon.id) === action.payload
      )
    },
    addToCombat: (state, action: PayloadAction<string>) => {
      if (
        state.combatList.length === 6 ||
        state.combatList.some((pokemon) => pokemon.name === action.payload)
      ) {
        return
      }
      const pokemon = state.pokemons.find((pokemon) => pokemon.name === action.payload)

      if (!pokemon) return

      state.combatList.push(pokemon)
    },
    removeFromCombat: (state, action: PayloadAction<string>) => {
      state.combatList = state.combatList.filter((pokemon) => pokemon.name !== action.payload)
    },
    toggleisPokemonInCombatList: (state, action: PayloadAction<string>) => {
      state.isPokemonInCombatList = state.combatList.some(
        (pokemon) => pokemon.name === action.payload
      )
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPokemons.pending, (state, _action) => {
        state.loading = true
      })
      .addCase(fetchPokemons.fulfilled, (state, action: PayloadAction<Result[]>) => {
        const pokemons: Pokemon[] = action.payload.map((pokemon, index) => {
          return {
            ...pokemon,
            id: index + 1,
          }
        })

        state.pokemons = pokemons
        state.filteredPokemons = pokemons
        state.loading = false
      })
      .addCase(fetchPokemons.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload
        state.loading = false
      })
      .addCase(fetchPokemon.pending, (state, _action) => {
        state.loading = true
      })
      .addCase(fetchPokemon.fulfilled, (state, action: PayloadAction<PokemonResponse>) => {
        state.pokemon = action.payload
        state.loading = false
      })
      .addCase(fetchPokemon.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload
        state.loading = false
      })
  },
})

export const { searchPokemon, addToCombat, removeFromCombat, toggleisPokemonInCombatList } =
  pokemonSlice.actions
