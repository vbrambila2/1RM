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
        background: '#0080ff',
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
        paddingTop: '20px'
    },
    deleteButton: {
        background: '#33ccff',
        boxShadow: '2px 2px 1px #006bb3',
        color: '#F8F8F8',
        textShadow: '1px 1px #000000',
        fontFamily: 'PT Sans Caption',
        '&:hover': {
            backgroundColor: '#00ace6',
        }, 
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
                                className={classes.textFieldDiv}
                                name="movementName"
                                value={move.movementName}
                                label="Movement to be Deleted"
                                variant="outlined"
                                style={{ width:200 }}
                            />
                        </div>
                        <div className={classes.buttonDiv}>
                            <Button className={classes.deleteButton} variant="contained" type="submit" endIcon={<DeleteIcon />} fullWidth >Delete</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DeletePage;