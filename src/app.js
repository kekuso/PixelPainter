import React from 'react';
import ReactDOM from 'react-dom';
// import store from './reducers';
const PixelPainter = React.createClass({
  render: function () {
    return (
      <div className="mainContainer">
        <h1> Pixel Painter </h1>
      </div>
    );
  }
})
ReactDOM.render(
  <PixelPainter url = "/" pollInterval = {2000}/>,
  document.getElementById('app')
);