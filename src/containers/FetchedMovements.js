import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovements } from '../actions';

const FetchedMovements = () => {
    const dispatch = useDispatch();

   useEffect(() => {
        dispatch(fetchMovements());
    }, [dispatch]);

    return (
        <div></div>
    )
}

export default FetchedMovements;