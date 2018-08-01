/* @flow */

import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

type Props ={
  title? : ?string
}
type State={

}

class App extends Component<Props,State> {
  // <Route exact path='/Shops' component={ShopsMng} />
  // <Route exact path='/Tickets' component={TicketsMng} />
  // <Route exact path='/Notice' component={NoticeMng} />
  // <Route exact path='/Report' component={ReportMng} />
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Body />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
