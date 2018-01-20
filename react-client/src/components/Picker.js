import React from 'react';
import ReactFilestack from 'filestack-react';

export default class Picker extends React.Component {
  constructor(props) {
    super(props);

    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(result) {
    var that = this;
    if (result.filesUploaded.length) {
      result.filesUploaded.forEach( (file) => {
        var url = file.url.slice(0, 33)+ 'resize=width:300/' + file.url.slice(33);
        that.props.addImage(url);
      });
    }
  }

  render() {
    return (
      <div>
        <ReactFilestack
          apikey={'A1ecQrf4iSc6VoVKkQ9HCz'}
          buttonText="+"
          buttonClass="btn"
          onSuccess={this.handleUpload}
        />                                
      </div>
    )
  }
}

