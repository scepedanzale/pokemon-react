import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { urlImgs, urlSinglePokemon } from '../config/config';
import { Col, Image, Row } from 'react-bootstrap';
import { Capitalize, pokemonId } from '../functions/functions';

export default function SinglePokemonComponent() {

    const { id } = useParams();    
    // lista pokemon della pagina
    const [pokemon, setPokemon] = useState([]);

    useEffect(()=>{
        fetch(urlSinglePokemon + id)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setPokemon(json)
        })
    }, [id])

  return (
    pokemon && pokemon.sprites &&
    <Row className='main-row h-100 d-flex align-items-center py-3'>
        <Col xs={12}>
            <Image className='w-100' src={pokemon.sprites.other['official-artwork'].front_default}/>
        </Col>
        <Col xs={12} className='d-flex align-items-center justify-content-between'>
            <h1 className='fw-bold'>{Capitalize(pokemon.name)}</h1>
            <p className='m-0 text-secondary fw-bold'>#{pokemonId(pokemon.id)}</p>
        </Col>
        <Col>
            {pokemon.types &&
            pokemon.types.map((t)=>(
                <p className={`px-3 py-1 rounded-3 ${t.type.name}`}>{Capitalize(t.type.name)}</p>
            ))}
        </Col>
    </Row>
  )
}
