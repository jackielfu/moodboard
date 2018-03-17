import React from 'react';
import Draggable from 'react-draggable';


export default class Grid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {    
    let imgs = this.props.imageList.map( (img, i) => {
      return <Draggable key= {i} ><img draggable="false" src={img} alt=''/></Draggable>
    })

    return (
      <div>
        { !this.props.imageList.length ?
            <h1 id="placeholder">
              Start by adding an image!
            </h1> :
            <div>
              {imgs}
            </div>
        }
      </div>
    )
  }
}