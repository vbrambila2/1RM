import { UPDATE_MOVEMENT, DELETE_MOVEMENT, CREATE_MOVEMENT, FETCH_MOVEMENTS } from '../actions/constants.js';

const initialState = [];

const movementReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_MOVEMENT: 
            return [ ...state, action.payload ];
        case UPDATE_MOVEMENT:
            return state.map(item =>  item.id === action.payload.id ? action.payload : item )
        case DELETE_MOVEMENT:  
            return state.filter(item => item.id !== action.payload)
        case FETCH_MOVEMENTS:
            return  action.payload;
        default:
            return state;
    }
};

export default movementReducer;