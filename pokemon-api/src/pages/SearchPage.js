import React from 'react'
import { Container } from 'react-bootstrap'
import SearchComponent from '../components/SearchComponent'

export default function SearchPage() {
  return (
    <Container fluid className='main-container my-3 my-md-2'>
      <SearchComponent/>
    </Container>
  )
}
