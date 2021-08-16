import React from 'react';
import Header from '../components/Header';
import PercentChart from '../components/PercentChart';
import { useLocation } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    notFound: {
        marginTop: '130px',
        fontSize: '24px',
        fontFamily: 'PT Sans Caption',
        display: 'flex',
        justifyContent: 'center',
    },
}));

const MovementPage = () => {
    const classes = useStyles();
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const movementNameURL = (pathArray[3]);
    const notFound = () => {
        if (movementNameURL === undefined) {
            return (
                <div className={classes.notFound} >
                     Movement not found. Click Home button to return to Home Page.
                </div>
            )
        }
        
        return <PercentChart />
    };

    return (
        <div>
            <Header title={movementNameURL} />
            {notFound()}
        </div>
    );
};

 export default (MovementPage);