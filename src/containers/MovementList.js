import { connect } from 'react-redux';
import history from '../history';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
}));

const MovementList = (props) => {
    const classes = useStyles();
    const mapNames = props.move.map((movement) => {
        return (
            <Button 
                key={movement.movementName}
                className={classes.movementButtons} 
                onClick={() => history.push(`/movement/${movement.id}/${movement.movementName}/${movement.movementWeight}`)}
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

    return <div>{displayMovementButtons()}</div>
};

const mapStateToProps = (state) => {
    return {
        move: Object.values(state.move),
    }
};

export default connect(mapStateToProps)(MovementList);
