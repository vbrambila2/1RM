import React from 'react';
import { connect } from 'react-redux';
import { fetchMovements } from '../actions';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    homePageTitle: {
        fontSize: '20px',
        fontFamily: 'PT Sans Caption',
        marginTop: '100px',
        display: 'flex',
        justifyContent: 'center'
    }
  });

class MovementsList extends React.Component {
    componentDidMount() {
        this.props.fetchMovements();
    }

    render() {
        const displayListedMovements = () => {
            if (this.props.move.length === 0) {
                return <div></div>
            }

            return <div className={this.props.classes.homePageTitle}>Listed Movements:</div>
        }
        return (
            <div>{displayListedMovements()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { move: Object.values(state.move) };
}

export default connect(mapStateToProps, { fetchMovements })(withStyles(styles)(MovementsList));