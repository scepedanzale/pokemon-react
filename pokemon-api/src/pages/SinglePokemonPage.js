import React from 'react'
import { Container } from 'react-bootstrap'
import SinglePokemonComponent from '../components/SinglePokemonComponent'

export default function SinglePokemonPage() {
  return (
    <Container fluid className='main-container my-3 my-md-2'>
      <SinglePokemonComponent/>
    </Container>
  )
}
