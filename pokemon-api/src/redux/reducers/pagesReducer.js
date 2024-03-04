import React from 'react'
import { CHANGE_PAGE, NEXT_PAGE, PREV_PAGE } from '../actions/actions'

export default function pagesReducer(state=1, action) {
    switch(action.type){
        case PREV_PAGE:
            return action.payload
        case NEXT_PAGE:
            return action.payload
        case CHANGE_PAGE:
            return action.payload
        default:
            break;
    }
  return state
}
