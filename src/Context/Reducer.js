import React, {useReducer} from 'react'




const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BOOK':


        case 'REMOVE_BOOK':


        default:
            break;
    }
}

const [state, dispatch] = useReducer(reducer, initialState)
