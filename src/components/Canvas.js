import React from 'react';
import Pixel from './Pixel';
import { connect } from 'react-redux';
import { setColor } from '../actions/canvas';

class Canvas extends React.Component {
  constructor (props) {
    super(props);
    this.setColor = this.setColor.bind(this);
  }
  setColor (x = 0, y = 0, color) {
    let newColor = 'black';
    this.props.setColor(0, 0, newColor);
  }

  render() {
    return (
      <div className="canvasContainer">
        <h3>Canvas</h3>

        <div className="canvasTable">
          <div className="row">
            <div className="col">
              <Pixel
                handleClick={() => this.setColor(0, 0, 'black')}
                color="black"
              >
              </Pixel>
            </div>
            <div className="col">
              <Pixel>
              </Pixel>
            </div>
            <div className="col">
              <Pixel>
              </Pixel>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Pixel>
              </Pixel>
            </div>
            <div className="col">
              <Pixel>
              </Pixel>
            </div>
            <div className="col">
              <Pixel>
              </Pixel>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Pixel>
              </Pixel>
            </div>
            <div className="col">
              <Pixel>
              </Pixel>
            </div>
            <div className="col">
              <Pixel>
              </Pixel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(() => ({}), {
  setColor
})(Canvas);