import React from 'react'
import Pagination from '../components/Pagination'
import PokemonListComponent from '../components/PokemonListComponent'
import { Container } from 'react-bootstrap'

export default function HomePage() {

  return (
    <Container fluid className='main-container my-3 my-md-2'>
      <PokemonListComponent/>
      <Pagination/>
    </Container>
  )
}
