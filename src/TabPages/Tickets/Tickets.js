/* @flow */

import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './Tickets.css';

//필요한 기능: 이용권 목록 조회, 수정, 삭제, 생성

const cellEditProp = {
  mode: 'click',
  blurToSave: true
};

// validator function pass the user input value and should return true|false.
function NameValidator(value) {
  const response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
  if (!value) {
    response.isValid = false;
    response.notification.type = 'error';
    response.notification.msg = 'Value must be inserted';
    response.notification.title = 'Requested Value';
  } else if (value.length < 2) {
    response.isValid = false;
    response.notification.type = 'error';
    response.notification.msg = 'Value must have 10+ characters';
    response.notification.title = 'Invalid Value';
  }
  return response;
}

const tickets = [
  {id:1, name:'one-week ticket', price:'3000'},{id:2, name:'two-weeks ticket', price:'6000'}
  ,{id:3, name:'one-month ticket', price:'10000'},{id:4, name:'three-months ticket', price:'27000'}
  ,{id:5, name:'season ticket', price:'48000'}
];

class Tickets extends React.Component<{}> {


  render() {
    return (
      <BootstrapTable data={ tickets } cellEdit={ cellEditProp } insertRow={ true }>
          <TableHeaderColumn dataField='id' isKey={ true }>ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' editable={ { type: 'textarea',
            validator: NameValidator } } editColumnClassName='editing-jobsname-class'
            invalidEditColumnClassName='invalid-jobsname-class'>Ticket Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price' editable={ { type: 'textarea',
            validator: NameValidator } }>Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default Tickets;
