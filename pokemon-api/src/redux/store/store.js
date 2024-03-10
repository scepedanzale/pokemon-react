import { applyMiddleware, combineReducers, createStore } from "redux"
import pokemonReducer from "../reducers/pokemonReducer"
import pagesReducer from "../reducers/pagesReducer"
import mainReducer from "../reducers/mainReducer"
import { thunk } from "redux-thunk"


const initialState = {
    pokemon : {
        pokemomList : [],
        currentPokemonList : [],
        pokemonPerPage : 30,
        favourites : []
    },
    currentPage : 1,
    searchResults : []
}

const bigReducer = combineReducers({
    pokemon : pokemonReducer,
    currentPage : pagesReducer,
    searchResults : mainReducer,
})

export const store = createStore(bigReducer, initialState, applyMiddleware(thunk))