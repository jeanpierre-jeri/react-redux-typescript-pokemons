import { FC } from 'react'

import { usePokemonSelector } from '../../hooks/usePokemonSelector'
import { usePokemonDispatch } from '../../hooks/usePokemonDispatch'
import { PokemonCard } from './'
import { addToCombat } from '../../redux/slices/pokemonSlice'

export const PokemonList: FC = () => {
  const { filteredPokemons } = usePokemonSelector()
  const dispatch = usePokemonDispatch()

  const handleAdd = (name: string) => {
    dispatch(addToCombat(name))
  }

  if (!filteredPokemons.length) {
    return (
      <div className="grid place-items-center text-2xl mx-auto w-8/12 text-center mt-20">
        No se encontró ningun Pokémon...
      </div>
    )
  }

  return (
    <section
      style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(232px, 1fr))' }}
      className="grid gap-x-16 gap-y-8 mt-16 w-11/12 mx-auto"
    >
      {filteredPokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon}>
          <div
            onClick={() => handleAdd(pokemon.name)}
            className="absolute top-4 right-4 z-10 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-10 h-10"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </PokemonCard>
      ))}
    </section>
  )
}
