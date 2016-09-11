import React from 'react';
import Pixel from './Pixel';
import { connect } from 'react-redux';

class Pallet extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="palletContainer">
        <h3>Pallet</h3>

        <div className="palletTable">
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

export default connect(() => ({}))(Pallet);