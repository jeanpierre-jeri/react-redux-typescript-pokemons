import { FC, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import { Pokemon } from '../../models/pokemons'
import { usePokemonDispatch } from '../../hooks/usePokemonDispatch'
import { fetchPokemon, toggleisPokemonInCombatList } from '../../redux/slices/pokemonSlice'

interface PokemonCardProps extends PropsWithChildren {
  pokemon: Pokemon
}

export const PokemonCard: FC<PokemonCardProps> = ({ pokemon, children }) => {
  const { id, name } = pokemon

  const dispatch = usePokemonDispatch()

  const handlePokemonFetch = () => {
    dispatch(fetchPokemon(name))
    dispatch(toggleisPokemonInCombatList(name))
  }

  return (
    <article className="relative shadow-2xl shadow-emerald-300/30 hover:shadow-white/50 rounded-lg p-6 hover:scale-105 transition-all duration-300 ease-in">
      <Link className="flex flex-col gap-4" onClick={handlePokemonFetch} to={`/pokemon/${name}`}>
        <picture className="block mx-auto h-40">
          <img
            width="160"
            height="160"
            loading="lazy"
            className="max-w-full block h-full object-contain"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            alt={name}
          />
        </picture>
        <p className="mt-auto first-letter:uppercase text-center text-lg">{name}</p>
      </Link>
      {children}
    </article>
  )
}
