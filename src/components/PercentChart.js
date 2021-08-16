import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router';
import { connect } from 'react-redux';
import UpdateButton from './UpdateButton';
import DeleteButton from './DeleteButton';

const useStyles = makeStyles(() => ({
    oneRepMaxWeight: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        fontFamily: 'PT Sans Caption',
        fontSize: '18px',
        marginTop: '100px'
    },
    oneRepMaxWeightNumber: {
        padding: '5px',
    },
    oneRepMaxChart: {
        background: '#C4C4C4',
        borderRadius: '10px',
        borderCollapse: 'separate',
        borderSpacing: '10px',
        display: 'flex',
        flexDirection: 'column',
    },
    chartHeader: {
        borderRadius: '10px',
        padding: '5px',
        fontSize: '24px', 
        display: 'flex',
        justifyContent: 'space-around'
    },
    chartBox: {
        background: '#E7E7E7',
        border: '1px solid #C4C4C4',
        padding: '5px',
        fontSize: '24px',
        display: 'flex',
        justifyContent: 'space-around',
        fontFamily: 'PT Sans Caption',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '20px'
    }
}));

const PercentChart = (props) => {
    const classes = useStyles();
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const movementNameURL = (pathArray[3]);
    const [results, setResults] = useState([]);
    const selected = props.weight.find((e) => e.movementName === movementNameURL);

    useEffect(() => {
        const arr = [];
        let percentage = 100;
        while (percentage > 50 ) {
            arr.push([percentage, (selected.movementWeight * percentage) / 100]);
            percentage -= 5;
        }
        setResults(arr);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const displayWeight = () => {
        if (selected.movementWeight.length === 0) {    
            return <div>No 1RM recorded</div> 
        };

        return <div>{selected.movementWeight}</div>
    };

    return (
        <div>
            <div className={classes.oneRepMaxWeight}>One Rep Max:
                <div className={classes.oneRepMaxWeightNumber}>{displayWeight()}</div>
            </div> 
            <div className={classes.buttons}>
                <UpdateButton />
                <DeleteButton />
            </div>
            <div className={classes.oneRepMaxChart}>
                <h1 className={classes.chartHeader} >Percent<div>Weight</div></h1>
                <div>
                    {results.map((result) => (
                    <div key={result[0]} className={classes.chartBox} >{result[0]}% <div>{result[1]}</div></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        weight: Object.values(state.move),
    }
};

export default connect(mapStateToProps)(PercentChart);
