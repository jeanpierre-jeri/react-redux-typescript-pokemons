import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'

export const usePokemonDispatch = () => {
  return useDispatch<AppDispatch>()
}
