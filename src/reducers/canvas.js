const color2DArray = [];

for(let i = 0; i < 10; i++) {
  color2DArray[i] = [];
  for(let j = 0; j < 10; j++) {
    color2DArray[i].push('#ffffff');
  }
}

const initialState = {
  colors: color2DArray
}

const reducer = (state = initialState, action) => {
  console.log("Filter Reducer: " + action.type);
  console.log(action);
  switch(action.type) {
    // set a color on a pixel
    case "SET_COLOR":
      const newState = action.color;
      return newState;
    // clear the canvas of all colors
    case "CLEAR_CANVAS":
      const clearCanvas = action.color;
      return clearCanvas;
  }
  return state;
}

module.exports = reducer;