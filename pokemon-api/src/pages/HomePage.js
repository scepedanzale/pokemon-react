import React from 'react'
import PokemonListComponent from '../components/pokemon/PokemonListComponent'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';

export default function HomePage() {

  const navigate = useNavigate();

  return (
    <>
      <Row className='align-items-center px-3 py-1'>
            <Col>
                <Button variant='' onClick={()=>navigate(-1)}>
                    <i className="bi bi-arrow-left-circle fs-3"></i>
                </Button>
                <Button variant='' onClick={()=>navigate(1)}>
                    <i className="bi bi-arrow-right-circle fs-3"></i>
                </Button>
            </Col>
            <Col className='text-end fs-4'>
                <Link to='/search'><i className="bi bi-search"></i></Link>
            </Col>
        </Row>

      <PokemonListComponent/>
    </>
  )
}
