import { FC, useEffect, lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from '../../pages/HomePage'
const PokemonPage = lazy(() => import('../../pages/PokemonPage'))

import { fetchPokemons } from '../../redux/slices/pokemonSlice'
import { usePokemonDispatch } from '../../hooks/usePokemonDispatch'
import { SideBar } from '../organisms'
import Loader from '../atoms/Loader/Loader'

export const Layout: FC = () => {
  const dispatch = usePokemonDispatch()
  useEffect(() => {
    dispatch(fetchPokemons(151))
  }, [])

  return (
    <div className="md:flex">
      <main className="md:w-3/4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon">
            <Route
              path=":pokemon"
              element={
                <Suspense
                  fallback={
                    <div className="flex justify-center mt-20">
                      <Loader />
                    </div>
                  }
                >
                  <PokemonPage />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </main>
      <aside className="md:w-1/4 sticky top-0 h-screen">
        <SideBar />
      </aside>
    </div>
  )
}
