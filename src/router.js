
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home.js';
import Virgo from './components/Virgo/Virgo.js';
import Taurus from './components/Taurus/Taurus.js';
import Scorpio from './components/Scorpio/Scorpio.js';
import Sagi from './components/Sagi/Sagi.js';
import Pisces from './components/Pisces/Pisces.js';
import Libra from './components/Libra/Libra.js';
import Cap from './components/Cap/Cap.js';
import Can from './components/Can/Can.js';
import Aries from './components/Aries/Aries.js';
import Aqua from './components/Aqua/Aqua.js';
import Leo from './components/Leo/Leo.js';

export default (
    <Switch>
        <Route component={ Home } path='/' exact />
        <Route component={ Virgo } path='/virgo' />
        <Route component={ Taurus } path='/taurus' />
        <Route component={ Scorpio } path='/scorpio'/>
        <Route component={ Sagi } path='/sagi'/>
        <Route component={ Pisces } path='/pisces'/>
        <Route component={ Libra } path='/libra'/>
        <Route component={ Cap } path='/cap'/>
        <Route component={ Can } path='/can'/>
        <Route component={ Aries } path='/aries'/>
        <Route component={ Aqua } path='/aqua'/>
        <Route component={ Leo } path='/leo'/>
    </Switch>
)
