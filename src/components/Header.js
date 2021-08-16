import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router';
import Button from '@material-ui/core/Button';
import history from '../history';

const useStyles = makeStyles((theme) => ({
    homeHeader: {
        background: '#C4C4C4',
        textAlign: 'center',
        boxShadow: '0px 2px 2px #A9A9A9',
        fontFamily: 'PT Sans Caption',
        fontSize: '36px',
        marginBottom: '20px',
        paddingTop: '20px',
        paddingBottom: '10px',
        textTransform: 'uppercase',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
    },
    header: {
        background: '#C4C4C4',
        textAlign: 'center',
        boxShadow: '0px 2px 2px #A9A9A9',
        fontFamily: 'PT Sans Caption',
        fontSize: '36px',
        marginBottom: '20px',
        paddingTop: '20px',
        paddingBottom: '10px',
        textTransform: 'uppercase',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        zIndex: 9999
    },
    homeButton: {
        boxShadow: '0px 2px 2px #A9A9A9',
        fontFamily: 'PT Sans Caption',
        fontSize: '20px',
        marginLeft: '10px',
        marginBottom: '10px',
        marginTop: '5px',
        borderRadius: '10px'
    },
    fakeText: {
        visibility: 'hidden',
    }
}));

const Header = (props) => {
    const classes = useStyles();
    const [ title ] = useState(props.title)
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const homePageURL = (pathArray[1]);

    if (homePageURL === '') {
        return (
            <div className={classes.homeHeader}>
                {title}
             </div>
        )
    } else {

    return (
        <div className={classes.header}>
            <Button
                variant="contained"
                className={classes.homeButton}
                onClick={() => history.push("/")}>   
                Home
            </Button>
            {title}
            <div className={classes.fakeText}>-------</div>
        </div>
    );
    };
};
export default Header;