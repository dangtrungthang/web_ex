import {GET_POST_ID} from '../actions/index';

export default function getpostid(state=1,action){
    switch (action.type) {
        case GET_POST_ID:
            return action.payload
           
    
        default:
           return state
    }
}