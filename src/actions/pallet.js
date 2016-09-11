const store = require('../reducers');

export default {
  // colors: randomColors,
  selectColor: selectColor
}

export function selectColor(color) {
  return {
    type: "SELECT_COLOR",
    color: color
  };
}