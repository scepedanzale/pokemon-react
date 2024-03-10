import { urlSinglePokemon } from "../../config/config"

export const ADD_POKEMON_LIST = 'ADD_POKEMON_LIST'
export const ADD_FAVOURITE = 'ADD_FAVOURITE'
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE'

export const PREV_PAGE = 'PREV_PAGE'
export const NEXT_PAGE = 'NEXT_PAGE'
export const CHANGE_PAGE = 'CHANGE_PAGE'

export const SEARCH = 'SEARCH'

/* pokemon */
export const addPokemonList = (pokemonList) => {
    return ({type: ADD_POKEMON_LIST, payload: pokemonList})
}

/* favoriti */
export const addFavourite = (pokemon) => {
    return ({type: ADD_FAVOURITE, payload: pokemon})
}
export const removeFavourite = (pokemon) => {
    return ({type: REMOVE_FAVOURITE, payload: pokemon})
}

/* pagine */
export const setCurrentPage = (page, type) => {
    return ({type: type, payload: page})
}

/* search */
export const search = (query) => {
    return function(dispatch){
        fetch(urlSinglePokemon + query)
        .then(response => response.json())
        .then(json => {
            return dispatch({type: SEARCH, payload: json})
        })
        .catch(error => console.error(error))
    }
}