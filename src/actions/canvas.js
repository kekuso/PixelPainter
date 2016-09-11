const store = require('../reducers');

export default {
  setColor: setColor
}

export function setColor(x, y, color) {
  return {
    type: "SET_COLOR",
    x: x,
    y: y,
    color: color
  };
}