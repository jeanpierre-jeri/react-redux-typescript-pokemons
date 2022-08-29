export const formatPokemonWeight = (weight: number) => {
  const formatter = new Intl.NumberFormat('es-ES', {
    style: 'unit',
    unit: 'kilogram',
  })

  return formatter.format(weight / 10)
}

export const formatPokemonHeight = (height: number) => {
  const formatter = new Intl.NumberFormat('es-ES', {
    style: 'unit',
    unit: 'meter',
  })

  return formatter.format(height / 10)
}
