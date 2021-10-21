import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { updateMovement } from '../actions';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import { useLocation } from 'react-router';
import LoopIcon from '@material-ui/icons/Loop';

const useStyles = makeStyles((theme) => ({
    updatePage: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '100px'
    },
    updateMovementDiv: {
        background: '#00BFFF',
        fontFamily: 'PT Sans Caption',
        fontSize: '18px',
        borderRadius: '10px',
        padding: '20px',
        marginTop: '50px',
    },
    textDiv: {
        background: '#ffffff',
        padding: '8px',
        borderRadius: '10px',
    },
    textFieldDiv: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#00BFFF"
          },
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "black"
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "black"
          },
          "& .MuiOutlinedInput-input": {
            color: "black"
          },
          "&:hover .MuiOutlinedInput-input": {
            color: "black"
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "black"
          },
          "& .MuiInputLabel-outlined": {
            color: "grey"
          },
          "&:hover .MuiInputLabel-outlined": {
            color: "black"
          },
          "& .MuiInputLabel-outlined.Mui-focused": {
            color: "black"
          }
    },
    buttonDiv: {
        paddingTop: '20px',
    },
    updateButton: {
        background: '#33ccff',
        boxShadow: '2px 2px 1px #006bb3',
        color: '#F8F8F8',
        textShadow: '1px 1px #000000',
        fontFamily: 'PT Sans Caption',
        '&:hover': {
            backgroundColor: '#00ace6',
        },
    },
    [theme.breakpoints.down('sm')]: {
        textFieldDiv: {
            display: 'flex', 
        }
    }
}));

const UpdatePage = () => {
    const classes = useStyles();
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const movementIDURL = (pathArray[2]);
    const [moveData, setMoveData] = useState({ movementName:'', movementWeight: '' });
    const dispatch = useDispatch(); 
    const move = useSelector((state) => movementIDURL ? state.movements.find((p) => p._id === movementIDURL) : null);

    useEffect(() => {
        if(move) setMoveData(move)
    }, [move]);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(movementIDURL) {
            dispatch(updateMovement(movementIDURL, moveData));
        } else {
            console.log("no currentId");
        }
    };

    return (
        <div>
            <Header title="Update Movement" />
            <div className={classes.updatePage}>
                <div className={classes.updateMovementDiv}>
                    <form onSubmit={handleSubmit} >
                        <div className={classes.textDiv}>
                            <TextField 
                                className={classes.textFieldDiv}
                                name="movementName"
                                variant="outlined"
                                label="Movement Name" 
                                style={{ width:200 }}
                                value={move.movementName}
                                onChange={(e) => setMoveData({ ...moveData, movementName: e.target.value })}
                            />
                            <TextField
                                className={classes.textFieldDiv}
                                name="movementWeight" 
                                variant="outlined"
                                label="New One Rep Max" 
                                style={{ width:200 }}
                                InputProps={{endAdornment: <InputAdornment position="end">lb</InputAdornment>}}
                                onChange={(e) => setMoveData({ ...moveData, movementWeight: e.target.value })}
                            />
                        </div>
                         <div className={classes.buttonDiv}>
                            <Button className={classes.updateButton} variant="contained" type="submit" fullWidth endIcon={<LoopIcon />} >Update</Button>
                         </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatePage;