import React from 'react'
import Pagination from '../components/Pagination'
import PokemonListComponent from '../components/pokemon/PokemonListComponent'

export default function HomePage() {

  return (
    <>
      <PokemonListComponent/>
      <Pagination/>
    </>
  )
}
