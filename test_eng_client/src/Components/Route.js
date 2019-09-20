import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  Dashboard from './Dashboard/Dashboard';

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route  path='/' component={Dashboard}/>
            </Switch>
        </BrowserRouter>
    )
}