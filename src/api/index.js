import axios from 'axios';

const url = 'https://my-one-rep.herokuapp.com/movements';

export const fetchMovements = () => axios.get(url);
export const createMovement = (newMove) => axios.post(url, newMove);
export const updateMovement = (id, updatedMove) => axios.patch(`${url}/${id}`, updatedMove);
export const deleteMovement = (id) => axios.delete(`${url}/${id}`);