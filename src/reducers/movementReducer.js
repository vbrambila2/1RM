import { UPDATE_MOVEMENT, DELETE_MOVEMENT, CREATE_MOVEMENT, FETCH_MOVEMENTS } from '../actions/constants';

const initialState = [];

const movementReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVEMENTS:
            return action.payload;
        case CREATE_MOVEMENT:
            return [ ...state, action.payload ];
        case UPDATE_MOVEMENT:
            return state.map((move) => move.id === action.payload._id ? action.payload : move);
        case DELETE_MOVEMENT:
            return state.filter((move) => move._id !== action.payload);
        default:
            return state;
    }
};

export default movementReducer;