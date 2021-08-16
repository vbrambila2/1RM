import React from 'react';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import { deleteMovement } from '../actions/index';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { useLocation } from 'react-router';

const useStyles = makeStyles(() => ({
    deletePage: {
        marginTop: '150px',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'PT Sans Caption',
    },
    deleteMovementDiv: {
        background: '#C4C4C4',
        fontFamily: 'PT Sans Caption',
        fontSize: '18px',
        borderRadius: '10px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'right',
    }
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
            <label>{label}:   </label>  
            <input {...input} readOnly autoFocus={true} type="text" value={NameLocationFunction()} /> 
        </div>    
    )  
};

const DeletePage = (props) => {
    const classes = useStyles();
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const movementIDURL = (pathArray[2]);
    const selected = props.move.find(move => move.id === Number(movementIDURL));
    const selectedID = selected.id
    const onSubmit = (formValues) => {
        props.deleteMovement(selectedID, formValues)
    };

    return (
        <div>
            <Header title="Delete Movement" />
            <div className={classes.deletePage}>
                <div className={classes.deleteMovementDiv}>
                    <form onSubmit={props.handleSubmit(onSubmit)}>
                        <Field 
                            name="movementName"
                            component={renderInputName} 
                            label="Movement to be Deleted"
                        />
                        <button>Delete</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        move: state.move,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return({
        deleteMovement: (selectedID, formValues) => dispatch(deleteMovement(selectedID, formValues)),
    })
};

const formWrap = reduxForm({
    form: 'deleteMovementForm',
})(DeletePage);

export default connect(mapStateToProps, mapDispatchToProps)(formWrap);