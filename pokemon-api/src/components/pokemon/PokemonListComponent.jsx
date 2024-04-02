import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { addPokemonList } from '../../redux/actions/actions';
import { urlApi } from '../../config/config';
import PokemonRowComponent from './PokemonRowComponent';
import Pagination from '../Pagination';

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
    }, [dispatch])

    useEffect(()=>{
        if(pokemon){
            console.log(pokemon)
            setCurrentPokemonList(pokemon[0].slice((currentPage - 1) * pokemonPerPage, currentPage * pokemonPerPage))
        }
    }, [currentPage, pokemon, pokemonPerPage])

  return (
    <>
        <Row className='main-row py-2 ps-3'>
            <Col>
                {pokemon && 
                <p className='my-2 blu'>Numero Pokémon: {pokemon[0].length}</p> }
            </Col>
            {currentPokemonList &&
            currentPokemonList.map((p, i)=>(
                <PokemonRowComponent key={i} pokemon={p}/>
            ))}
        </Row>
        {pokemon &&
            <Pagination pokemon={pokemon[0]}/>
        }
    </>
  )
}
