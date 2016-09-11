import React from 'react';
import ReactDOM from 'react-dom';
import store from './reducers';
import { PixelPainterApp } from './containers';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider
    store={store}
  >
    <PixelPainterApp />
  </Provider>,
  document.getElementById('app')
);

export { default as PixelPainterApp } from './containers/PixelPainterApp';