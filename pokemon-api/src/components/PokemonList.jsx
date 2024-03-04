import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPokemonList } from '../redux/actions/actions';
import { urlApi } from '../config/config';
import { Row } from 'react-bootstrap';
import PokemonRow from './PokemonRow';

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
        <Row>
            {pokemon && 
            <p className='m-0 mt-2'>Numero Pokémon: {pokemon[0].length}</p> }
        </Row>
        <Row className={`main-row py-3 ps-3 ${currentPage > 1 ? 'scroll-to-top' : ''}`}>
            {currentPokemonList &&
            currentPokemonList.map((p, i)=>(
                <PokemonRow key={i} pokemon={p}/>
            ))}
        </Row>
    </>
    
  )
}
