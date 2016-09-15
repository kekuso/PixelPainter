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
        <table className="canvasTable">
          <tbody>
            {this.props.canvasArray.map(function (row, i) {
              console.log("row: " + row);
              return (
                <tr key={i}>
                  {row.map(function(col, j) {
                    return <td key={j}>
                      <Pixel
                        color={col}
                      />
                    </td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(() => ({}), {
  setColor
})(Canvas);