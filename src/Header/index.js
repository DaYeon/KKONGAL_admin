/* @flow */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Tabs, Tab, nav, ul, li} from 'react-bootstrap';
import './index.css';
import {withRouter} from 'react-router';
type Props ={
  history:any,
}
type State ={
  title:string,
  key:number
}
class Header extends Component<Props, State> {
  // handleSelect:(key:number)=>void

  constructor(props) {
    super(props);
    console.log(this.props.history);
    (this:any).handleSelect = this.handleSelect.bind(this);

    this.state = {
      'title': '꽁알 관리자 페이지',
      key: 1
    };
  }

  handleSelect(key) {
    console.log(key);
    this.setState({key});
    switch(key){
      case 1:
        this.props.history.push("/");
        break;
      case 2:
        this.props.history.push("/users");
        break;
      case 3:
        this.props.history.push("/tickets");
        break;
      case 4:
        this.props.history.push("/shops");
        break;
      case 5:
        this.props.history.push("/feed");
        break;
      case 6:
        this.props.history.push("/notices");
        break;
      case 7:
        this.props.history.push("/reports");
        break;
    }
  }

  render() {

    return (<div className="app-header">
      <div className="header-title">
        {this.state.title}
      </div>
      <div>
        <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
          <Tab eventKey={1} title={<p className="tab-item">홈</p>}></Tab>
          <Tab eventKey={2} title={<p className="tab-item">유저관리</p>}></Tab>
          <Tab eventKey={3} title={<p className="tab-item">이용권관리</p>}></Tab>
          <Tab eventKey={4} title={<p className="tab-item">가맹점관리</p>}></Tab>
          <Tab eventKey={5} title={<p className="tab-item">피드관리</p>}></Tab>
          <Tab eventKey={6} title={<p className="tab-item">공지사항관리</p>}></Tab>
          <Tab eventKey={7} title={<p className="tab-item">신고관리</p>}></Tab>
        </Tabs>
      </div>
    </div>);
  }

}

export default withRouter(Header);
