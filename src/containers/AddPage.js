import React, { useState } from 'react';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { createMovement } from '../actions';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(() => ({
    addPage: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '100px'
    },
    addMovementDiv: {
        background: '#C4C4C4',
        fontFamily: 'PT Sans Caption',
        fontSize: '18px',
        borderRadius: '10px',
        padding: '20px',
        marginTop: '50px',
        textAlign: 'center'
    },
    textDiv: {
        background: '#ffffff',
        padding: '8px',
        borderRadius: '10px',
    },
    buttonDiv: {
        paddingTop: '20px'
    }
}));

const AddPage = () => {
    const classes = useStyles();
    const [moveData, setMoveData] = useState({ movementName:'', movementWeight: '' });
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createMovement(moveData));
    };

    return (
        <div>
            <Header title="Add Movement" />
            <div className={classes.addPage}>
                <div className={classes.addMovementDiv}>
                    <form onSubmit={handleSubmit} >
                        <div className={classes.textDiv}>
                            <TextField 
                                name="movementName"
                                variant="outlined"
                                label="Movement Name" 
                                value={moveData.movementName}
                                onChange={(e) => setMoveData({ ...moveData, movementName: e.target.value })}
                            />
                            <TextField
                                name="movementWeight" 
                                variant="outlined"
                                label="One Rep Max" 
                                value={moveData.movementWeight}
                                InputProps={{endAdornment: <InputAdornment position="end">lb</InputAdornment>}}
                                onChange={(e) => setMoveData({ ...moveData, movementWeight: e.target.value })}
                            />
                        </div>
                         <div className={classes.buttonDiv}>
                            <Button variant="contained" type="submit" endIcon={<AddIcon />} fullWidth >Submit</Button>
                         </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPage;