import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import history from '../history';
import { useLocation } from 'react-router';

const useStyles = makeStyles((theme) => ({
    updateButton: {
        borderRadius: '10px',
        width: '10%',
        textAlign: 'center',
        marginLeft: '5px',
        marginRight: '5px',
        background: '#00BFFF',
        color: '#F8F8F8',
        boxShadow: '0px 1px 1px #006bb3',
        textShadow: '1px 1px #000000',
        '&:hover': {
            backgroundColor: '#0099cc',
        },
    },
}));

const UpdateButton = (props) => {
    const classes = useStyles();
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const movementIDURL = (pathArray[2]);
    const movementNameURL = (pathArray[3]);

    return (
        <Button 
            className={classes.updateButton}
            onClick={() => history.push(`/update/${movementIDURL}/${movementNameURL}`)}
        >
        Update
        </Button> 
    )
};

export default UpdateButton;