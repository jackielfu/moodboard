import React, { Component } from 'react';
import {Row} from 'antd';
import './app.css';
import Header from './components/Header.js';
import Grid from './components/Grid.js';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      imageList: []
    };

    this.addImage = this.addImage.bind(this);

  }

  addImage(url) {
    this.setState({
      imageList: [...this.state.imageList, url]
    });
  }

  render() {
    return (
      <div className="App">
        <br />
        <Row>
          <Header addImage={this.addImage} />
        </Row>
        <Row>
          <Grid imageList={this.state.imageList} />
        </Row>
      </div>
    );
  }
}