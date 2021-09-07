import React from 'react';
import { useSelector } from 'react-redux';
import history from '../history';
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    buttonsSpacing: {
        marginTop: '100px'
    },
    movementButtons: {
        fontFamily: 'PT Sans Caption',
        marginTop: '30px',
        borderRadius: '10px',
        background: '#C4C4C4',
        boxShadow: '0px 2px 2px #A9A9A9',
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
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
            background: '#C4C4C4',
            boxShadow: '0px 2px 2px #A9A9A9',
            width: '300px',
            display: 'flex',
            flexDirection: 'column',
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