const redux = require('redux');
const palletReducer = require('./pallet');
const canvasReducer = require('./canvas');

const rootReducer = redux.combineReducers({
  pallet: palletReducer,
  canvas: canvasReducer
});

// make store compatible with Google Chrome extension Redux DevTools
const finalCreateStore = redux.compose(
   (window.devToolsExtension) ? window.devToolsExtension : (x) => x
);

const store = finalCreateStore(
  rootReducer, {}
);

module.exports = store;