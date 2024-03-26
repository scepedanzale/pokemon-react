import React, { useEffect, useState } from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { search } from '../redux/actions/actions';
import PokemonRowComponent from './pokemon/PokemonRowComponent';

export default function SearchComponent() {

    const dispatch = useDispatch();

    const [input, setInput] = useState('');
    const [results, setResults] = useState([]);
   // const pokemon = useSelector(state => state.searchResults)
   const pokemon = useSelector(state => state.pokemon.pokemonList)

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleSubmit = () => {
        dispatch(search(input))
    }

    useEffect(()=>{
        if(pokemon){
            const array = []
            if(input !== ''){
                pokemon[0].map((p)=>{
                    if(p.name.includes(input)){
                        array.push(p)
                    }
                })
                setResults(array)
            }
        }
    }, [input])

    useEffect(()=>{
        console.log(results)
    }, [results])
 
  return (
    <>
        <Row className='align-items-center px-2'>
            <Col>
                {results.length > 0 && 
                <p className='my-2 blu'>Numero risultati: {results.length}</p> }
            </Col>
            <Col xs={12} className='my-2'>
                <Form.Group onSubmit={handleSubmit}>
                    <InputGroup hasValidation>
                        <Form.Control
                        type="text"
                        placeholder="Cerca Pokémon..."
                        onChange={(e)=>handleChange(e)}
                        autoFocus
                        />
                        <Button variant='' className='border-0 fs-4 blu' onClick={()=>handleSubmit()}><i class="bi bi-search"></i></Button>
                    </InputGroup>
                </Form.Group>
            </Col>
        </Row>
        <Row className='main-row p-2' >
            <div>
                {results.length > 0  &&
                results.map((p, i)=>(
                    <PokemonRowComponent key={i} pokemon={p}/>
                ))}
            </div>
        </Row>
    </>
  )
}
