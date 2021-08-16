import React from 'react';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import { updateMovement } from '../actions/index';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { useLocation } from 'react-router';

const useStyles = makeStyles(() => ({
    updatePage: {
        marginTop: '150px',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'PT Sans Caption',
    },
    updateMovementDiv: {
        background: '#C4C4C4',
        fontFamily: 'PT Sans Caption',
        fontSize: '18px',
        borderRadius: '10px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'right',
      },
}));

const NameLocationFunction = () => {
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const movementNameURL = (pathArray[3]);
    return movementNameURL
};

const renderInputName = ({ input, label }) => {
    return (
        <div>
            <label>{label}: </label>
            <input {...input} type="text" value={NameLocationFunction()} /> 
        </div>    
    )  
};

const renderNewInputWeight = ({ input, label }) => {
    return (
        <div>
            <label>{label}: </label>
            <input {...input} type="number" /> 
        </div>    
    )  
};

const UpdatePage = (props) => {
    const classes = useStyles();
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const movementIDURL = (pathArray[2]);
    const selected = props.move.find(move => move.id === Number(movementIDURL));
    const selectedID = selected.id
    const onSubmit = formValues => {
        props.updateMovement(selectedID, formValues)
    };

    return (
        <div>
            <Header title="Update Movement" />
            <div className={classes.updatePage}>
                <div className={classes.updateMovementDiv}>
                <form onSubmit={props.handleSubmit(onSubmit)}>
                    <Field 
                        name="movementName"
                        label="Movement Selected"
                        component={renderInputName} 
                    />
                    <Field
                        name="movementWeight"  
                        label="New One Rep Max" 
                        component={renderNewInputWeight}
                    />
                    <button>Update</button>
                </form>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        move: state.move
    }
};

const mapDispatchToProps = dispatch => {
    return ({
        updateMovement: (selectedID, formValues) => dispatch(updateMovement(selectedID, formValues)),
    })
};

const formWrap = reduxForm({
    form: 'updateMovementForm',
})(UpdatePage);

export default connect(mapStateToProps, mapDispatchToProps)(formWrap);