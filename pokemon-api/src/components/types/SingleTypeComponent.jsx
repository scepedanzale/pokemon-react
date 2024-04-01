import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { urlType } from '../../config/config';
import { typeImages } from '../../config/types'
import { Capitalize } from '../../functions/functions';
import { Col, Image, Row } from 'react-bootstrap';
import PokemonRowComponent from '../pokemon/PokemonRowComponent';
import { useSelector } from 'react-redux';
import Pagination from '../Pagination';

export default function SingleTypeComponent() {

    const {name} = useParams()
    const imageSrc = typeImages[name];

    const [type, setType] = useState({})
    const [pokemonType, setPokemonType] = useState([])

    /* paginazione */
    const pokemonPerPage = useSelector(state => state.pokemon.pokemonPerPage)
    const currentPage = useSelector(state => state.currentPage)
    const [currentPokemonList, setCurrentPokemonList] = useState([]);

    useEffect(()=>{
        if(pokemonType){
            setCurrentPokemonList(pokemonType.slice((currentPage - 1) * pokemonPerPage, currentPage * pokemonPerPage))
        }
    }, [currentPage, pokemonType])

    useEffect(()=>{
        fetch(urlType + name)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setType(json)
        })
    }, [name])

    useEffect(()=>{
        if(type){
            setPokemonType(type.pokemon)
        }
    }, [type])

    useEffect(()=>{
        console.log(pokemonType)
    }, [pokemonType])

  return (
    <>
         <Row className='main-row d-flex align-items-center pb-3'>
            <Col xs={12}>
                <Col xs={6}>
                    <Image src={imageSrc} className='w-100'/>
                </Col>
                <Col>
                    <h1>{Capitalize(name)}</h1>
                </Col>
            </Col>
            <Col xs={12}>
                {currentPokemonList &&
                currentPokemonList.map((p, i)=>(
                    <PokemonRowComponent key={i} pokemon={p}/>
                ))}
            </Col>
            <Col>
                {pokemonType &&
                    <Pagination pokemon={pokemonType}/>
                }
            </Col>
         </Row>
    </>
  )
}
