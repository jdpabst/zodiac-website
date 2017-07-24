
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home.js';
import Virgo from './components/Virgo/Virgo.js';

export default (
    <Switch>
        <Route component={ Home } path='/' exact />
        <Route component={ Virgo } path='/virgo' />
    </Switch>
)
