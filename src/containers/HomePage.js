import React from 'react';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import FabButton from '../components/FabButton';
import MovementList from './MovementList';
import MovementsList from './FetchedMovements';
 
const useStyles = makeStyles((theme) => ({
   homePageContent: {
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
   }
}));
 
const HomePage = (props) => {
   const classes = useStyles();
  
   return (
       <div className={classes.homePageContent} >
            <Header title={"One Rep Max"}/>
            <div>
                <MovementsList />
                <MovementList />
            </div>
            <FabButton />
       </div>
   );
};
 
export default (HomePage);
