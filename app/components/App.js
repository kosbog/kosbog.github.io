import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, HashRouter } from 'react-router-dom';
import Home from './Home';

class App extends Component {
    render() {
        return (
            <Router >
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    {/*
                        <Route exact path='/battle' component={Battle}></Route>
                        <Route path='/battle/results' component={Results}></Route>
                        <Route path='/popular' component={Popular}></Route>
                        <Route component={NoMatchRoute}></Route>
                    */}
                </Switch>
            </Router>
        );
    }
}

export default App;