import React from 'react'
import { SEARCH } from '../actions/actions'

export default function mainReducer(state = [], action) {
    switch(action.type){
        case SEARCH:
            return (state = [action.payload])
        default:
            break
    }
  return state
}
