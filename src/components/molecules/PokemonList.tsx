import { FC } from 'react'
import { useSelector } from 'react-redux'
import { selectAllPokemons } from '../../redux/slices/pokemonSlice'
import { PokemonCard } from './PokemonCard'

interface PokemonListProps {
  type?: 'home' | 'combat-list'
}

export const PokemonList: FC<PokemonListProps> = ({ type = 'home' }) => {
  const pokemons = useSelector(selectAllPokemons)
  return (
    <section
      style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(232px, 1fr))' }}
      className="grid gap-x-16 gap-y-8 mt-16 w-11/12 mx-auto"
    >
      {type === 'home' ? (
        pokemons.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
      ) : (
        <p>Lista de Pokemons</p>
      )}
    </section>
  )
}
