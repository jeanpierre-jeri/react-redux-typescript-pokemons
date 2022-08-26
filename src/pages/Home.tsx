import { FC, useEffect } from 'react'
import { SearchBar } from '../components/atoms'
import { PokemonList } from '../components/molecules'
import { useSelector } from 'react-redux'
import { selectLoading } from '../redux/slices/pokemonSlice'

const Home: FC = () => {
  const loading = useSelector(selectLoading)
  return (
    <main>
      <SearchBar />
      {loading ? <p>Cargando...</p> : <PokemonList />}
    </main>
  )
}

export default Home
