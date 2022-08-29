import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import {
  addToCombat,
  fetchPokemon,
  removeFromCombat,
  toggleisPokemonInCombatList,
} from '../redux/slices/pokemonSlice'
import { ArrowIcon, ButtonOutline } from '../components/atoms'
import { usePokemonSelector, usePokemonDispatch } from '../hooks'
import { Pokemon } from '../components/organisms/'
import Loader from '../components/atoms/Loader/Loader'

const PokemonPage = () => {
  const { pokemon, loading, isPokemonInCombatList } = usePokemonSelector()
  const params = useParams()
  const dispatch = usePokemonDispatch()

  useEffect(() => {
    if (!pokemon) {
      dispatch(fetchPokemon(String(params.pokemon)))
    }
  }, [])

  const toggleCombatList = () => {
    if (isPokemonInCombatList) {
      dispatch(removeFromCombat(String(params.pokemon)))
      dispatch(toggleisPokemonInCombatList(String(params.pokemon)))
      return
    }
    dispatch(addToCombat(String(params.pokemon)))
    dispatch(toggleisPokemonInCombatList(String(params.pokemon)))
  }

  return (
    <section className="w-11/12 mx-auto py-16">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-2xl outline-none ">
          <ArrowIcon />
          Volver
        </Link>
        <ButtonOutline toggleCombatList={toggleCombatList}>
          {isPokemonInCombatList ? 'Eliminar de la lista' : 'Agregar a la lista'}
        </ButtonOutline>
      </div>
      {loading ? (
        <div className="flex justify-center mt-20">
          <Loader />
        </div>
      ) : (
        <Pokemon />
      )}
    </section>
  )
}

export default PokemonPage
