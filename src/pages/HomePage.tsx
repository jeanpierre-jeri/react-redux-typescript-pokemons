import { FC } from 'react'
import { Loader, SearchBar } from '../components/atoms'
import { PokemonList } from '../components/molecules'
import { usePokemonSelector } from '../hooks/usePokemonSelector'

const HomePage: FC = () => {
  const { loading } = usePokemonSelector()
  return (
    <main className="py-20">
      <SearchBar />
      {loading ? (
        <div className="flex justify-center mt-20">
          <Loader />
        </div>
      ) : (
        <PokemonList />
      )}
    </main>
  )
}

export default HomePage
