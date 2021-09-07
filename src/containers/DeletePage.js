import React from 'react';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import { deleteMovement } from '../actions';
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router';
import { TextField, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(() => ({
    deletePage: {
        marginTop: '150px',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'PT Sans Caption',
    },
    deleteMovementDiv: {
        background: '#C4C4C4',
        fontFamily: 'PT Sans Caption',
        fontSize: '18px',
        borderRadius: '10px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
    },
    textDiv: {
        background: '#ffffff',
        padding: '8px',
        borderRadius: '10px',
        textAlign: 'center',
    },
    buttonDiv: {
        paddingTop: '20px'
    }
}));

const DeletePage = () => {
    const classes = useStyles();
    const dispatch = useDispatch(); 
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const movementIDURL = (pathArray[2]);
    const move = useSelector((state) => movementIDURL ? state.movements.find((p) => p._id === movementIDURL) : null);
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(deleteMovement(move._id));
    };

    return (
        <div>
            <Header title="Delete Movement" />
            <div className={classes.deletePage}>
                <div className={classes.deleteMovementDiv}>
                    <form onSubmit={handleSubmit}>
                        <div className={classes.textDiv}>
                            <TextField 
                                name="movementName"
                                value={move.movementName}
                                label="Movement to be Deleted"
                                variant="outlined"
                            />
                        </div>
                        <div className={classes.buttonDiv}>
                            <Button variant="contained" type="submit" endIcon={<DeleteIcon />} fullWidth >Delete</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DeletePage;