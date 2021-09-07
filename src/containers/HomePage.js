import React from 'react';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import FabButton from '../components/FabButton';
import FetchedMovements from './FetchedMovements';
import MoveButtons from './MoveButtons';
 
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
                <FetchedMovements />
                <MoveButtons />
            </div>
            <FabButton />
       </div>
   );
};
 
export default (HomePage);
