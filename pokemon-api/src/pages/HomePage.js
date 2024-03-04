import React, { useEffect, useState } from 'react'
import { urlApi } from '../config/config'
import Pagination from '../components/Pagination'
import PokemonList from '../components/PokemonList'
import { Container } from 'react-bootstrap'

export default function HomePage() {

  return (
    <Container fluid className='main-container my-3 my-md-2'>
      <PokemonList/>
      <Pagination/>
    </Container>
  )
}
