/* @flow */

import React, { Component } from 'react';
import './index.css';
import { Switch, Route } from 'react-router-dom';
import Home from '../TabPages/Home/Home';
import Users from '../TabPages/Users/Users';
import Shops from '../TabPages/Shops/Shops';
import Tickets from '../TabPages/Tickets/Tickets';
import Notices from '../TabPages/Notices/Notices';
import Reports from '../TabPages/Reports/Reports';
import Feed from '../TabPages/Feed/Feed'

class Body extends Component<{}> {

  render() {
    return (
      <div className="BodyContainer">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/users' component={Users} />
          <Route exact path='/tickets' component={Tickets} />
          <Route exact path='/shops' component={Shops} />
          <Route exact path='/feed'component={Feed} />
          <Route exact path='/notices' component={Notices} />
          <Route exact path='/reports' component={Reports} />
        </Switch>
      </div>
    );
  }

}

export default Body;
