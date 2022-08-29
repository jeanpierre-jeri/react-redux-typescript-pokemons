import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

export const usePokemonSelector = () => {
  return useSelector((state: RootState) => state).pokemon
}
