export interface Pokemons {
  count: number
  next: string
  previous: null
  results: Result[]
}

export interface Result {
  name: string
  url: string
}

export interface Pokemon {
  name: string
  url: string
  id: number
}
