import React, { useEffect, useState } from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { search } from '../redux/actions/actions';
import PokemonRowComponent from './pokemon/PokemonRowComponent';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';

export default function SearchComponent() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

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
                    return null;
                })
                setResults(array)
            }
        }
    }, [input, pokemon])

    
    /* paginazione */
    
    const pokemonPerPage = useSelector(state => state.pokemon.pokemonPerPage)
    const currentPage = useSelector(state => state.currentPage)
    
    const [currentPokemonList, setCurrentPokemonList] = useState([]);
    
    useEffect(()=>{
        if(results.length>0){
            setCurrentPokemonList(results.slice((currentPage - 1) * pokemonPerPage, currentPage * pokemonPerPage))
        }
    }, [currentPage, results, pokemonPerPage])
    
    useEffect(()=>{
        console.log(currentPokemonList)
    }, [currentPokemonList])


  return (
    <>
        <Row className='align-items-center px-3'>
            <Col xs={5} lg={3} xl={2} className='p-0'>
                    <Button variant='' onClick={()=>navigate(-1)}>
                        <i className="bi bi-arrow-left-circle fs-3"></i>
                    </Button>
                    <Button variant='' onClick={()=>navigate(1)}>
                        <i className="bi bi-arrow-right-circle fs-3"></i>
                    </Button>
            </Col>
            <Col className='my-2 p-0'>
                <Form.Group onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                    <InputGroup hasValidation>
                        <Form.Control
                        type="text"
                        placeholder="Cerca Pokémon..."
                        onChange={(e)=>handleChange(e)}
                        autoFocus
                        />
                        <Button type='submit' variant='' className='border-0 fs-4 blu' onClick={()=>handleSubmit()}><i class="bi bi-search"></i></Button>
                    </InputGroup>
                </Form.Group>
            </Col>
        </Row>
        <Row className='main-row p-2' >
            <div>
                <Col>
                    {currentPokemonList.length > 0 && 
                    <p className='my-2 blu'>Numero risultati: {results.length}</p> }
                </Col>
                {currentPokemonList.length > 0  &&
                currentPokemonList.map((p, i)=>(
                    <PokemonRowComponent key={i} pokemon={p}/>
                ))}
            </div>
        </Row>
        {results.length > 0 &&
            <Pagination pokemon={results}/>
        }
    </>
  )
}
