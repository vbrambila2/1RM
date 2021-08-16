import * as constants from './constants';
import history from '../history';
import movements from '../apis/movements';

export const createMovement = formValues => async dispatch => {
    history.push('/')
    const response = await movements.post('/movements', formValues);

    dispatch({ type: constants.CREATE_MOVEMENT, payload: response.data })
};

export const updateMovement = (id, formValues) => async dispatch => {
    history.push('/')
    const response = await movements.patch(`/movements/${id}`, formValues);

    dispatch({ type: constants.UPDATE_MOVEMENT, payload: response.data });
};

export const deleteMovement = id => async dispatch => {
    history.push('/')
    await movements.delete(`/movements/${id}`);

    dispatch({ type: constants.DELETE_MOVEMENT, payload: id })
};

export const fetchMovements = () => async dispatch => {
    const response = await movements.get('/movements');

    dispatch ({ type: constants.FETCH_MOVEMENTS, payload: response.data });
}