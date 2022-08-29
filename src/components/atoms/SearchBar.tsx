import { useEffect, useState } from 'react'

import { searchPokemon } from '../../redux/slices/pokemonSlice'
import { usePokemonDispatch } from '../../hooks/usePokemonDispatch'

export const SearchBar = () => {
  const [search, setSearch] = useState('')
  const dispatch = usePokemonDispatch()

  useEffect(() => {
    dispatch(searchPokemon(search.toLowerCase()))
  }, [search])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  return (
    <div className="mx-auto w-1/3">
      <input
        value={search}
        onInput={handleInput}
        className="w-full p-4 rounded-lg bg-gray-900 focus:outline-none text-white shadow-md shadow-slate-200/50 placeholder:text-white/80"
        type="text"
        placeholder="Que pokemon buscas..."
      />
    </div>
  )
}
