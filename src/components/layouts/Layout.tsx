import { FC, PropsWithChildren, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Pokemon from '../../pages/Pokemon'
import { useDispatch } from 'react-redux'
import { fetchPokemons } from '../../redux/slices/pokemonSlice'
import { AppDispatch } from '../../redux/store'
import { CombatList } from '../organisms/CombatList'

interface LayoutProps extends PropsWithChildren {}

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchPokemons())
  }, [])

  return (
    <div className="md:flex">
      <main className="md:w-3/4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon">
            <Route path=":pokemon" element={<Pokemon />} />
          </Route>
        </Routes>
      </main>
      <aside className="md:w-1/4 sticky top-0 h-screen">
        <CombatList />
      </aside>
    </div>
  )
}
