import React from 'react'
import { useParams, Link } from 'react-router-dom'

const Pokemon = () => {
  const { pokemon } = useParams()

  return (
    <>
      <Link to="/">Home</Link>
      <div>{pokemon}</div>
    </>
  )
}

export default Pokemon
