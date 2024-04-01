import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { urlSinglePokemon } from '../../config/config';
import { Button, Col, Dropdown, Image, Row } from 'react-bootstrap';
import { Capitalize, pokemonId } from '../../functions/functions';
import PokemonEvolutionComponent from './PokemonEvolutionComponent';
import { addFavourite, removeFavourite } from '../../redux/actions/actions';

export default function SinglePokemonComponent() {

    const navigate = useNavigate();
    const dispatch = useDispatch()

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

    // verso pokemon
    function playSound(url) {
        const a = new Audio(url);
        a.play();
    }

    // preferiti
    const favourites = useSelector(state => state.pokemon.favourites)
    const favourite = favourites.find((p) => p.id === pokemon.id)

  return (
    <>  
        {pokemon && pokemon.sprites &&
        <Row className='main-row d-flex align-items-center pb-3'>
            <Col xs={12} className='position-relative'>
                <Image className='w-100 pokemon-img' src={pokemon.sprites.other['official-artwork'].front_default}/>
                <div className='position-absolute top-0 end-0'>
                    <Button id='cries' variant='' onClick={()=>playSound(pokemon.cries.latest)}>
                        <i className="bi bi-volume-up fs-1 blu"></i>
                    </Button>
                {/* preferiti */}
                    <div className='p-0 text-center cursor fs-3'>
                        {!favourite ?
                        (<i class="bi bi-heart" onClick={()=>dispatch(addFavourite(pokemon))}></i>)
                        :
                        (<i class="bi bi-heart-fill" onClick={()=>dispatch(removeFavourite(pokemon))}></i>)
                        }
                    </div>
                </div>
                <Col xs={2} className="position-absolute bottom-0 end-0 ">
                    <Image className='w-100' src={pokemon.sprites.other.showdown.front_default}/>
                </Col>
            </Col>

        {/* nome e id */}
            <Col xs={12} className='d-flex align-items-center justify-content-between'>
                <h1 className='fw-bold'>{Capitalize(pokemon.name)}</h1>
                <p className='m-0 text-secondary fw-bold'>
                    #{pokemonId(pokemon.id)}</p>
            </Col>

        {/* tipo */}
            <Col>
                {pokemon.types &&
                pokemon.types.map((t)=>(
                    <p key={t.id} className={`px-3 py-1 rounded-3 type ${t.type.name} cursor`} onClick={()=>navigate(`/type/${t.type.name}`)}>{Capitalize(t.type.name)}</p>
                ))}
            </Col>

        {/* evoluzioni */}
            <Col xs={12} className='d-flex overflow-auto'>
                <PokemonEvolutionComponent pokemon={pokemon.name}/>
            </Col>
            <Col xs={12} className='mt-2'>
                <div>
                    <p><b>Altezza: </b>{pokemon.height*10}cm</p>
                    <p><b>Peso: </b>{pokemon.weight/10}kg</p>
                </div>
            </Col>
            <Col xs={12}>
                <Dropdown>
                    <Dropdown.Toggle variant='' className='p-0' id="dropdown-basic">
                       <b> Mosse</b>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Row>
                            {pokemon.moves.map((m)=>(
                                <Col xs={12} sm={4} lg={3}>
                                    <Dropdown.Item href="#">{Capitalize(m.move.name)}</Dropdown.Item>
                                </Col>
                            ))}
                        </Row>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        </Row>}
    </>
  )
}
