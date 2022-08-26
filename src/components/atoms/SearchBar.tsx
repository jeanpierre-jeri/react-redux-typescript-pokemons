import { useDispatch } from 'react-redux'
import { searchPokemon } from '../../redux/slices/pokemonSlice'

export const SearchBar = () => {
  const dispatch = useDispatch()

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchPokemon(e.target.value.toLowerCase()))
  }
  return (
    <div className="mx-auto w-1/3 mt-20">
      <input
        onInput={handleInput}
        className="w-full p-4 rounded-lg bg-gray-900 focus:outline-none text-white shadow-md shadow-slate-200/50 placeholder:text-white/80"
        type="text"
        placeholder="Que pokemon buscas..."
      />
    </div>
  )
}
