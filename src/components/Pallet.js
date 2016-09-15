import React from 'react';
import Pixel from './Pixel';
import { connect } from 'react-redux';

class Pallet extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    console.log(this.props.palletArray);
    return (
      <div className="palletContainer">
        <h3>Pallet</h3>
        <table className="palletTable">
          <tbody>
            {this.props.palletArray.map(function (row, i) {
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

    // return (
    //   <div className="palletContainer">
    //     <h3>Pallet</h3>

    //     <div className="palletTable">
    //       <div className="row">
    //         <div className="col">
    //           <Pixel>
    //           </Pixel>
    //         </div>
    //         <div className="col">
    //           <Pixel>
    //           </Pixel>
    //         </div>
    //         <div className="col">
    //           <Pixel>
    //           </Pixel>
    //         </div>
    //       </div>
    //       <div className="row">
    //         <div className="col">
    //           <Pixel>
    //           </Pixel>
    //         </div>
    //         <div className="col">
    //           <Pixel>
    //           </Pixel>
    //         </div>
    //         <div className="col">
    //           <Pixel>
    //           </Pixel>
    //         </div>
    //       </div>
    //       <div className="row">
    //         <div className="col">
    //           <Pixel>
    //           </Pixel>
    //         </div>
    //         <div className="col">
    //           <Pixel>
    //           </Pixel>
    //         </div>
    //         <div className="col">
    //           <Pixel>
    //           </Pixel>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}

export default connect(() => ({}))(Pallet);