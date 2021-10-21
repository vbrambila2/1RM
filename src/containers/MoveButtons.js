import React from 'react';
import { useSelector } from 'react-redux';
import history from '../history';
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    buttonsSpacing: {
        marginTop: '120px'
    },
    movementButtons: {
        fontFamily: 'PT Sans Caption',
        marginTop: '30px',
        borderRadius: '10px',
        background: '#00BFFF',
        color: '#F8F8F8',
        boxShadow: '0px 1px 1px #006bb3',
        textShadow: '1px 1px #000000',
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
            backgroundColor: '#0099cc',
        },
    },
    noMovementsMessage: {
        marginTop: '130px',
        fontFamily: 'PT Sans Caption',
        fontSize: '20px',
        textTransform: 'uppercase',
    },
    [theme.breakpoints.down('sm')]: {
        movementButtons: {
            fontFamily: 'PT Sans Caption',
            marginTop: '30px',
            borderRadius: '10px',
            background: '#00BFFF',
            boxShadow: '0px 1px 1px #006bb3',
            textShadow: '1px 1px #000000',
            width: '300px',
            display: 'flex',
            flexDirection: 'column',
            '&:hover': {
                backgroundColor: '#0099cc',
            },
        },
    },
}));

const MoveButtons = () => {
    const classes = useStyles();
    const moves = useSelector((state) => state.movements);
    const mapNames = moves.map((movement) => {
        return (
            <Button 
                key={movement.movementName}
                className={classes.movementButtons} 
                onClick={() => history.push(`/movement/${movement._id}/${movement.movementName}/${movement.movementWeight}`)}
            >
            {movement.movementName} - {movement.movementWeight}lbs
            </Button>
        )}
    );
    const displayMovementButtons = () => {
        if (mapNames.length === 0) {    
            return <div className={classes.noMovementsMessage} >Click add button to begin</div> 
        };

        return <div>{mapNames}</div>
    };

    return <div className={classes.buttonsSpacing}>{displayMovementButtons()}</div>
};

export default MoveButtons;