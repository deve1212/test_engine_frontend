import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Appbar from './Dashboard/Appbar';

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route  path='/' component={Appbar}/>
            </Switch>
        </BrowserRouter>
    )
}