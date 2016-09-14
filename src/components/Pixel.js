import React from 'react';

class Pixel extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    console.log("Pixel color: ");
    console.log(this.props);
    return (
      <div className="pixelContainer">
        <div
          className="pixel"
          onClick = {this.props.handleClick}
          style={{backgroundColor: this.props.color}}
        >
        </div>
      </div>
    );
  }
}

export default Pixel;