import React, { useEffect, useState } from 'react'
import { urlImgs } from '../config/config'
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite, removeFavourite } from '../redux/actions/actions';
import { Link } from 'react-router-dom';
import { Capitalize, pokemonId } from '../functions/functions';

export default function PokemonRowComponent({pokemon}) {

  const dispatch = useDispatch()

  const [singlePokemon, setSinglePokemon] = useState([]);

  useEffect(()=>{
    if(pokemon.url){
      fetch(pokemon.url)
      .then(response => response.json())
      .then(json => {
        setSinglePokemon(json)
      })
      .catch(error => {
        console.error(error)
      })
    }else{
      setSinglePokemon(pokemon)
    }
  }, [pokemon])


  const favourites = useSelector(state => state.pokemon.favourites)
  const favourite = favourites.find((p) => p.id === singlePokemon.id)

  return (
    singlePokemon.name && singlePokemon.sprites.front_default &&
    <Col xs={12} className='d-flex align-items-center p-0'>
      <Container fluid className='p-0'>
        <Row className='pokemon-row d-flex align-items-center justify-content-between px-2'>
          <Col sm={3} className='d-none d-sm-block p-0 text-center'>
            <p className='m-0 me-2'>#{pokemonId(singlePokemon.id)}</p>
          </Col>
          <Col xs={4} sm={3} className='p-0 text-center'>
            <Image className='' src={singlePokemon.sprites.front_default}/>
          </Col>
          <Col xs={5} sm={4} className='p-0'>
            <Link to={`/pokemon/${singlePokemon.id}`} className='pokemon-link'>
              <p className='m-0 ms-3'><b>{Capitalize(singlePokemon.name)}</b></p>
            </Link>
            
          </Col>
          <Col xs={3} sm={2} className='p-0 text-center'>
            {!favourite ?
              (<i class="bi bi-heart fs-5" onClick={()=>dispatch(addFavourite(singlePokemon))}></i>)
              :
              (<i class="bi bi-heart-fill fs-5" onClick={()=>dispatch(removeFavourite(singlePokemon))}></i>)
            }
            
          </Col>
        </Row>
      </Container>
    </Col>
  )
}

