import { usePokemonSelector } from '../../hooks/usePokemonSelector'
import { formatPokemonWeight, formatPokemonHeight } from '../../libs/formats'
import { useState } from 'react'

export const Pokemon = () => {
  const { pokemon } = usePokemonSelector()

  const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png`

  return (
    <article>
      <picture className="grid place-items-center mx-auto w-80">
        <img width="475" height="475" className="block" src={pokemonImg} alt={pokemon?.name} />
      </picture>
      <h1 className="first-letter:uppercase text-5xl text-center mt-4">{pokemon?.name}</h1>
      <ul
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))' }}
        className="grid w-1/2 mx-auto mt-12 shadow-blue-500/50 shadow-2xl rounded-lg p-10 gap-8"
      >
        <li>
          <h3 className="text-2xl mb-4">Número</h3>
          <p>{pokemon?.id}</p>
        </li>
        <li>
          <h3 className="text-2xl mb-4">Tipo</h3>
          <ul>
            {pokemon?.types.map(({ type }) => (
              <li className="first-letter:uppercase" key={type.name}>
                {type.name}
              </li>
            ))}
          </ul>
        </li>
        <li>
          <h3 className="text-2xl mb-4">Peso</h3>
          <p>{formatPokemonWeight(pokemon?.weight || 0) ?? 'No disponible'}</p>
        </li>
        <li>
          <h3 className="text-2xl mb-4">Altura</h3>
          <p>{formatPokemonHeight(pokemon?.height || 0) ?? 'No disponible'}</p>
        </li>
        <li className="col-span-2 xl:col-span-3 3xl:col-span-4">
          <h3 className="text-2xl mb-4">Estadisticas Base</h3>
          <ul className="grid grid-cols-1 gap-4 xl:grid-cols-2 3xl:grid-cols-3">
            {pokemon?.stats.map(({ stat, base_stat }) => (
              <li className="first-letter:uppercase" key={stat.name}>
                <p>
                  {stat.name}: {base_stat}
                </p>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </article>
  )
}
