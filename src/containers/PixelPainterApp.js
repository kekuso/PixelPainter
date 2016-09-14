import React from 'react';
import { connect } from 'react-redux';
import { Pallet } from '../components';
import { Canvas } from '../components';

const mapStateToProps = (state) => {
  return {
    ...state
  };
}

class PixelPainterApp extends React.Component {
  constructor (props) {
    super (props);

  }
  render() {
    // console.log("App props: ");
    // console.log(this.props.pallet.colors);
    return (
      <div className="pixelPainterContainer">
        <h1>Welcome to Pixel Painter</h1>
        <Pallet
          palletArray={this.props.pallet.colors}>
        </Pallet>
        <Canvas
          canvasArray={this.props.canvas.colors}>
        </Canvas>
      </div>
    );
  }
}

export default connect(mapStateToProps)(PixelPainterApp);