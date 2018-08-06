/* @flow */

import React, { Component } from 'react';
import './index.css';
import { Grid, Row, Col } from 'react-bootstrap';

class Footer extends Component<{}> {

  render() {
    return (
      <div className="app-footer">
        <Grid>
          <Row className="show-grid">
            <Col xs={4} md={4}>
              <p>꽁알</p>
            </Col>
            <Col xs={4} md={4}>
              <p>서울시 마포구 새터산로 뚠뚠</p>
            </Col>
            <Col xs={4} md={4}>
              <p>010-0000-0000</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

}

export default Footer;
