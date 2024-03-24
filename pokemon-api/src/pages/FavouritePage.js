import React from 'react'
import { useSelector } from 'react-redux'
import PokemonRowComponent from '../components/pokemon/PokemonRowComponent';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function FavouritePage() {

    const favourites = useSelector(state => state.pokemon.favourites);

    console.log(favourites)

  return (
    <>
        <Row className='align-items-center px-3'>
            <Col>
                <p className='my-2 blu'>Preferiti <span>({favourites.length})</span></p>
            </Col>
            <Col className='text-end fs-4'>
                <Link to='/search'><i class="bi bi-search"></i></Link>
            </Col>
        </Row>
        <Row className={`main-row py-2 ${favourites.length>4 ? 'ps-3' : ''}`}>
            <div>
                {favourites && favourites.map((f, i)=>(
                    <PokemonRowComponent key={i} pokemon={f}/>
                ))}
            </div>
        </Row>
    </>
  )
}
