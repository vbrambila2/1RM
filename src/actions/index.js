import * as api from '../api';
import { UPDATE_MOVEMENT, DELETE_MOVEMENT, CREATE_MOVEMENT, FETCH_MOVEMENTS } from './constants'
import history from '../history';

export const fetchMovements = () => async (dispatch) => {
    try {
        const { data } = await api.fetchMovements();

        dispatch({ type: FETCH_MOVEMENTS, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const createMovement = (move) => async (dispatch) => {
    history.push('/')
    try {
        const { data } = await api.createMovement(move);
        
        dispatch({ type: CREATE_MOVEMENT, payload: data })
    } catch (error) {
        console.log(error.message);
    }
};

export const updateMovement = (id, move) => async (dispatch) => {
    try {
        const { data } = await api.updateMovement(id, move);
        
        dispatch ({ type: UPDATE_MOVEMENT, payload: data });
        history.push('/')
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteMovement = (id) => async (dispatch) => {
    history.push('/')
    try {
        await api.deleteMovement(id);

        dispatch ({ type: DELETE_MOVEMENT, payload: id });
    } catch (error) {
        console.log(error.message);
    }
};