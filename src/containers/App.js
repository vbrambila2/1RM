import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import AddPage from './AddPage';
import HomePage from './HomePage';
import MovementPage from './MovementPage';
import UpdatePage from './UpdatePage';
import DeletePage from './DeletePage';

class App extends React.Component {
    render() {
        return (
            <div>
                <Router history={history} >
                    <Switch>
                        <Route exact path="/" render={ () => <HomePage title="One Rep - Home" /> } ></Route>
                        <Route exact path="/movement/:id/:name/:weight" render={ () => <MovementPage title="One Rep - Movement" /> } ></Route>
                        <Route exact path="/add" render={ () => <AddPage title="One Rep - Add" /> } ></Route>
                        <Route exact path="/update/:id/:name" render={ () => <UpdatePage title="One Rep - Update" /> } ></Route>
                        <Route exact path="/delete/:id/:name" render={ () => <DeletePage title="One Rep - Delete" /> } ></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
};

export default App;