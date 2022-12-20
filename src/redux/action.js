

// action creators
// actions are javascript objects

import { DECREMENT, EDIT, INCREMENT } from "./actionTypes"

export const inc = ()=> {
    return {
     type:INCREMENT
    }
}

export const dec = ()=> {
    return {
     type:DECREMENT
    }
}

export const editText = (str) => {
    return {
        type:EDIT,
        payload:str
    }
}