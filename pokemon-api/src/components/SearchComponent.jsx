import React, { useEffect, useState } from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { search } from '../redux/actions/actions';
import PokemonRowComponent from './pokemon/PokemonRowComponent';

export default function SearchComponent() {

    const dispatch = useDispatch();

    const [input, setInput] = useState('');
    const pokemon = useSelector(state => state.searchResults)

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleSubmit = () => {
        dispatch(search(input))
    }
 
  return (
    <>
        <Row className='align-items-center px-2'>
            {/* <Col>
                {pokemon && 
                <p className='my-2 blu'>Numero Pokémon: {pokemon[0].length}</p> }
            </Col> */}
            <Col className='my-2'>
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
        <Row className='main-row p-2 d-flex flex-column justify-content-start align-items-start' >
            <Col xs={12}>
                <p className='blu'>Ricerche Recenti:</p>
            </Col>
            {pokemon &&
            pokemon.map((p, i)=>(
                <PokemonRowComponent key={i} pokemon={p}/>
            ))}
        </Row>
    </>
  )
}
