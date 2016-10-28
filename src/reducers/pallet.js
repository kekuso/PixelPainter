const colorArray = [];

for(let i = 0; i < 25; i++) {
  colorArray.push(colorRandom());
}

const colorTable = [];
while(colorArray.length) {
  colorTable.push(colorArray.splice(0, 5));
}

const currColor = 'cyan';

const initialState = {
  colors: colorTable,
  selected: currColor
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    // pick a color
    case "SELECT_COLOR":
      const newState = state.concat(action.data);
      return newState;
  }
  return state;
}

function colorRandom() {
  let letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
module.exports = reducer;