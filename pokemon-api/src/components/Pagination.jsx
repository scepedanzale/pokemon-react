import React, { useEffect, useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../redux/actions/actions';

export default function Pagination() {

    const dispatch = useDispatch()

    const pokemonPerPage = useSelector(state => state.pokemon.pokemonPerPage)
    const pokemon = useSelector(state => state.pokemon.pokemonList)

    const currentPage = useSelector(state => state.currentPage)
    const [totalPages, setTotalPages] = useState(0);

    // pagina corrente
    // const [currentPage, setCurrentPage] = useState(1);
    // numero pagine totali
    useEffect(()=>{
        if(pokemon && pokemonPerPage){
            setTotalPages(Math.ceil(pokemon[0].length / pokemonPerPage));

        }

    }, [pokemon, pokemonPerPage])
    
    
    // funzione cambio di pagina
    const changePage = (sign) => {
        if(sign === '+'){
            const newPage = currentPage + 1
            dispatch(setCurrentPage(newPage, 'NEXT_PAGE'))
        }else if(sign === '-'){
            const newPage = currentPage - 1
            dispatch(setCurrentPage(newPage, 'PREV_PAGE'))
        }else if(sign != NaN){
            dispatch(setCurrentPage(sign, 'CHANGE_PAGE'))
        }
    }
    
    return (
        <Row className='mt-3 sticky-bottom d-flex align-items-center justify-content-center text-center'>
            <Col xs={2}>
                <Button variant='' onClick={()=>changePage('-')} className={`border-0 ${currentPage === 1 && 'disabled'}`}>
                    <i className="bi bi-arrow-left-circle fs-3"></i>
                </Button>
            </Col>
            <Col xs={6} className='d-flex align-items-center justify-content-center'>
                {currentPage > 1 &&
                <>
                    <Button variant='' onClick={()=>changePage(1)}>1</Button>
                    <span>...</span>
                </>
                }
                <span className='fw-bold fs-5 mx-2'>{currentPage}</span>
                {currentPage < totalPages && 
                <>
                    <span>...</span>
                    <Button variant='' onClick={()=>changePage(Math.ceil(totalPages))}>{Math.ceil(totalPages)}</Button>
                </>
                }
                
            </Col>
            <Col xs={2}>
                <Button variant='' onClick={()=>changePage('+')} className={`border-0 ${currentPage===Math.ceil(totalPages) && 'disabled'}`}>
                    <i className="bi bi-arrow-right-circle fs-3"></i>
                </Button>
            </Col>
        </Row> 
  )
}
