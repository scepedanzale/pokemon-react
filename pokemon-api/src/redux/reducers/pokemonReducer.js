import React from 'react'
import { ADD_FAVOURITE, ADD_POKEMON_LIST, REMOVE_FAVOURITE } from '../actions/actions'

export default function pokemonReducer(state={}, action) {
    switch(action.type){
        case ADD_POKEMON_LIST:
            return{
                ...state,
                pokemonList : [action.payload]
            }
        case ADD_FAVOURITE:
            return{
                ...state,
                favourites : [...state.favourites, action.payload]
            }
        case REMOVE_FAVOURITE:
            return{
                ...state,
                favourites : [...state.favourites.filter((p) => p.id!==action.payload.id)]
            }
        default:
            break;
    }
  return state
}
