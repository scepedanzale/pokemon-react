import React, { useEffect, useState } from 'react'
import { urlEvolutions, urlSinglePokemon, urlSpecies } from '../config/config'
import { Col, Image } from 'react-bootstrap';
import { evolutionController } from '../functions/functions';
import { Link } from 'react-router-dom'

export default function PokemonEvolutionComponent({pokemon}) {

    const [url, setUrl] = useState('');     // url evoluzione della specie
    const [evolutionChain, setEvolutionChain] = useState([]);   // catena evolutiva
    const [evolutionsUrl, setEvolutionsUrl] = useState([]);     // url dei pokémon dell'evoluzione
    const [evolutions, setEvolutions] = useState([]);   // pokémon dell'evoluzione

    // chiamata alla specie del pokémon
    useEffect(()=>{
        fetch(urlSpecies  + pokemon)
        .then(response => response.json())
        .then(json => {
            setUrl(json.evolution_chain.url)
        })
        .catch(error => console.error(error))
    }, [pokemon])

    // chiamata all'evoluzione della specie
   useEffect(()=>{
        if(url){
            fetch(url)
            .then(response => response.json())
            .then(json => {
                setEvolutionChain(json.chain)
            })
            .catch(error => console.error(error))
        }
    }, [url])

    // settaggio evoluzioni
    useEffect(()=>{
        if(evolutionChain.evolves_to){
            const allSpecies = evolutionController(evolutionChain.evolves_to);
            setEvolutionsUrl([{
                name: evolutionChain.species.name
            },
            ...allSpecies
            ])
            
        }
    }, [evolutionChain])

    // chiamata url singolo pokemon
    useEffect(()=>{
        if(evolutionsUrl){
            fetchEvolutions()
        }
    }, [evolutionsUrl])

    const fetchEvolutions = async () => {
        try {
            const fetchedEvolutions = await Promise.all(
                evolutionsUrl.map(async evolution => {
                    const response = await fetch(urlSinglePokemon + evolution.name);
                    const json = await response.json();
                    return json;
                })
            );
            setEvolutions(fetchedEvolutions);
        } catch (error) {
            console.error(error);
        }
    }
    
  return (
    <>
        {evolutions &&
        evolutions.map((e)=>(
            <Col key={e.id} className='d-flex justify-content-center'>
                <Link to={`/pokemon/${e.id}`} className={`${e.name === pokemon ? 'evolution-selected' : ''}`}><Image src={e.sprites.front_default} className='evolution'/></Link>
            </Col>
            
        ))
        }
    </>
  )
}
