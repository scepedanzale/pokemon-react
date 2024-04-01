import React from 'react'
import Pagination from '../components/Pagination'
import PokemonListComponent from '../components/pokemon/PokemonListComponent'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function HomePage() {

  const navigate = useNavigate();
  const pokemon = useSelector(state => state.pokemon.pokemonList)

  return (
    <>
      <Row className='align-items-center px-3 py-1'>
            <Col xs={4}>
                <Button variant='' onClick={()=>navigate(-1)}>
                    <i className="bi bi-arrow-left-circle fs-3"></i>
                </Button>
                <Button variant='' onClick={()=>navigate(1)}>
                    <i className="bi bi-arrow-right-circle fs-3"></i>
                </Button>
            </Col>
            <Col xs={6}>
                {pokemon && 
                <p className='my-2 blu'>Numero Pokémon: {pokemon[0].length}</p> }
            </Col>
            <Col className='text-end fs-4'>
                <Link to='/search'><i className="bi bi-search"></i></Link>
            </Col>
        </Row>

      <PokemonListComponent/>
    </>
  )
}
