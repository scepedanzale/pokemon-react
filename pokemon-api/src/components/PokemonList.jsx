import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPokemonList } from '../redux/actions/actions';
import { urlApi } from '../config/config';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import PokemonRow from './PokemonRow';
import { Link } from 'react-router-dom';

export default function PokemonList() {

    const dispatch = useDispatch()

    const pokemon = useSelector(state => state.pokemon.pokemonList)
    const pokemonPerPage = useSelector(state => state.pokemon.pokemonPerPage)
    const currentPage = useSelector(state => state.currentPage)
    
    // lista pokemon della pagina
    const [currentPokemonList, setCurrentPokemonList] = useState([]);

    useEffect(()=>{
        fetch(urlApi)
        .then(response => response.json())
        .then(json => {
            dispatch(addPokemonList(json.results))
            // setPokemonList(json.results)
        })
    }, [])

    useEffect(()=>{
        if(pokemon){
            setCurrentPokemonList(pokemon[0].slice((currentPage - 1) * pokemonPerPage, currentPage * pokemonPerPage))
        }
    }, [currentPage, pokemon])

  return (
    <>
        <Row className='align-items-center px-3'>
            <Col>
                {pokemon && 
                <p className='my-2 blu'>Numero Pokémon: {pokemon[0].length}</p> }
            </Col>
            <Col className='text-end fs-4'>
                <Link to='/search'><i class="bi bi-search"></i></Link>
            </Col>
        </Row>
        <Row className='main-row py-2 ps-3'>
            {currentPokemonList &&
            currentPokemonList.map((p, i)=>(
                <PokemonRow key={i} pokemon={p}/>
            ))}
        </Row>
    </>
    
  )
}
