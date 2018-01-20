import React from 'react';
import Title from './Title.js';
import Picker from './Picker.js';
import { Row, Col } from 'antd';

export default class Header extends React.Component {

  render() {
    return (
      <div>
        <Row gutter={48}>
          <Col span={12}><Title /></Col>
          <Col span={6}></Col>
          <Col span={6}><Picker addImage={this.props.addImage} /></Col>
        </Row>
        <br />
      </div>
    )
  }
}

