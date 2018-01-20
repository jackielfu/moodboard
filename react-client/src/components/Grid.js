import React from 'react';
import Draggable from 'react-draggable';


export default class Grid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {    
    var imgs = this.props.imageList.map( (img) => {
      return <Draggable><img draggable="false" src={img} alt='' /></Draggable>
    })

    if (!this.props.imageList.length) {
      return (
        <h1 id="placeholder">
          Start by adding an image!
        </h1>
      )
    } else {
      return (
        <div>
          {imgs}
        </div>
      )
    }

  }
}