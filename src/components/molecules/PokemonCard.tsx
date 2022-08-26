import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Pokemon } from '../../models/pokemons'

interface PokemonCardProps {
  pokemon: Pokemon
}

export const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  const { id, name } = pokemon
  return (
    <Link to={`/pokemon/${name}`}>
      <article className="flex flex-col gap-4 shadow-2xl shadow-emerald-300/30 rounded-lg p-6">
        <picture className="block mx-auto h-40">
          <img
            loading="lazy"
            className="max-w-full block h-full"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            alt={name}
          />
        </picture>
        <p className="mt-auto capitalize text-center text-lg">{name}</p>
      </article>
    </Link>
  )
}
