import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, HashRouter } from 'react-router-dom';
import Home from './Home';
import NoMatchRoute from './NoMatchRoute';

class App extends React.Component {
    render() {
        return (
            <Router >
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route component={NoMatchRoute}></Route>
                </Switch>
            </Router>
        );
    }
}

export default App;