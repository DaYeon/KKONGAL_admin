/* @flow */

import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, FormControl,
  Button, Table} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './Users.css';

function getData(props){

}

function onAfterDeleteRow(rowKeys){
  alert('The rowkey you drop: ' + rowKeys);
}

const ticketType = {
  0: "없음",
  1: "1개월권",
  2: "3개월권",
  3: "정기권",
};

const activeType = {
  0: '없음',
  1: '사용중',
  2: '비활성화',
};

const options = {
  clearSearch: true,
  afterDeleteRow: onAfterDeleteRow,
};

const products = [{id:1, name:'홍길동', contact:'010-1111-2222', ticketType: 0, ticketStatus: 0},
{id:2, name:'김길동', contact:'010-3333-4444', ticketType: 1, ticketStatus: 1},
{id:3, name:'박길동', contact:'010-5555-6666', ticketType: 2, ticketStatus: 2},
{id:4, name:'서길동', contact:'010-7777-8888', ticketType: 3, ticketStatus: 2},
{id:5, name:'윤길동', contact:'010-1111-2222', ticketType: 2, ticketStatus: 1}];

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}
const selectRowProp = {
  mode: 'checkbox',
  clickToSelect: true  // enable click to select
};

class Users extends React.Component<{}> {
  render() {
    return (
      <div>
        <BootstrapTable ref='table' data={ products } selectRow={selectRowProp} deleteRow={ true } pagination={ true } search={ true } options = { options }>
          <TableHeaderColumn dataField='id' isKey={ true } dataSort={ true }>#</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>이름</TableHeaderColumn>
          <TableHeaderColumn dataField='contact'>전화번호</TableHeaderColumn>
          <TableHeaderColumn dataField='ticketType' filterFormatted dataFormat={ enumFormatter } formatExtraData={ ticketType }
            filter={ { type: 'SelectFilter', options: ticketType } }>이용권 종류</TableHeaderColumn>
          <TableHeaderColumn dataField='ticketStatus' filterFormatted dataFormat={ enumFormatter } formatExtraData={ activeType }
            filter={ { type: 'SelectFilter', options: activeType } }>이용권 상태</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Users;
