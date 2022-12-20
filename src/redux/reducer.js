import { DECREMENT, EDIT, INCREMENT } from "./actionTypes";


const init = {
    counter:0,
    text:"test"
}


const reducer = (state=init,{type,payload}) => {
    switch (type) {
        case INCREMENT:
        return {
            ...state,counter:state.counter+1
        }
        case DECREMENT:
            return {
                ...state,counter:state.counter-1
            } 
        case EDIT:{
            return{
                ...state,text:payload
            }
        }
        default:
            return state
    }
}


export default reducer