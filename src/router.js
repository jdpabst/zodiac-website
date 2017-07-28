import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Virgo from './components/Virgo/Virgo';
import Taurus from './components/Taurus/Taurus';
import Scorpio from './components/Scorpio/Scorpio';
import Sagi from './components/Sagi/Sagi';
import Pisces from './components/Pisces/Pisces';
import Libra from './components/Libra/Libra';
import Cap from './components/Cap/Cap';
import Can from './components/Can/Can';
import Aries from './components/Aries/Aries';
import Aqua from './components/Aqua/Aqua';
import Leo from './components/Leo/Leo';
import Gem from './components/Gem/Gem';
import About from './components/About/About';

export default (
    <Switch>
        <Route component={ Home } path='/' exact />
        <Route component={ Virgo } path='/virgo' />
        <Route component={ Taurus } path='/taurus' />
        <Route component={ Scorpio } path='/scorpio' />
        <Route component={ Sagi } path='/sagi' />
        <Route component={ Pisces } path='/pisces' />
        <Route component={ Libra } path='/libra' />
        <Route component={ Cap } path='/cap' />
        <Route component={ Can } path='/can' />
        <Route component={ Aries } path='/aries' />
        <Route component={ Aqua } path='/aqua' />
        <Route component={ Leo } path='/leo' />
        <Route component={ Gem } path='/gem' />
        <Route component={ About } path='/about' />
    </Switch>
)
