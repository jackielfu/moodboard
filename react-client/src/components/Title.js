import React from 'react';
import {toast} from 'react-toastify';
import Input from 'antd/lib/input';

export default class Title extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      editable: true
    };

    this.handleTitle = this.handleTitle.bind(this);
    this.toggleEditable = this.toggleEditable.bind(this);

  }

  handleTitle(e) {
    this.setState({title: e.target.value});
  }

  toggleEditable() {
    if (!this.state.title.length) {
      return;
    } else {
      this.setState({editable: !this.state.editable});
    }
  }

  render() {

    if (this.state.editable) {
      return (
        <Input id="input"
               placeholder="Moodboard.io"
               onChange={this.handleTitle}
               value={this.state.title}
               onBlur={this.toggleEditable}
        ></Input>)
    } else {
      return (<h1 id="title"
                  onClick={this.toggleEditable}>
                  {this.state.title}
              </h1>)
    }

  }
}

