import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Dashboard from './Dashboard';
import AddCourse from './AddCourse/AddCourse';
import Courses from './Courses/Courses';
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/AddCourse" component={AddCourse} />
                    <Route path="/Courses" component={Courses} />                    
                </Switch>
            </Router>
        )
    }
}