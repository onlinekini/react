import { CREATE_STREAM, EDIT_STREAM, DELETE_STREAM, FETCH_STREAM, FETCH_STREAMS}  from '../actions/types' 
import _ from 'lodash'

export default  (state = {}, action) => {
    switch (action.type) {
        case CREATE_STREAM :
            /* const newState = {...state}
            newState[action.payload.id] = action.payload
            return newState */
            return {...state, [action.payload.id]:action.payload}
        case EDIT_STREAM :
            return {...state, [action.payload.id]:action.payload}
        case DELETE_STREAM :
            return {...state, [action.payload]:undefined}
        case FETCH_STREAM :
            return {...state, [action.payload.id]:action.payload}
        case FETCH_STREAMS :
            //console.log('Fetch Stream', {...state, ... _.mapKeys(action.payload, 'id')})
            return {...state, ..._.mapKeys(action.payload, 'id')}
        default :
            return state
    }   
}

