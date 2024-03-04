import { combineReducers, createStore } from "redux"
import pokemonReducer from "../reducers/pokemonReducer"
import pagesReducer from "../reducers/pagesReducer"


const initialState = {
    pokemon : {
        pokemomList : [],
        currentPokemonList : [],
        pokemonPerPage : 30,
        favourites : []
    },
    currentPage : 1
}

const bigReducer = combineReducers({
    pokemon : pokemonReducer,
    currentPage : pagesReducer
})

export const store = createStore(bigReducer, initialState)