debugger;

function map(array1, callback) {
    let output = [];
    let result;
    for (let i=0; i<array1.length; i++) {
      result = callback(array1[i]);
      output.push( result );
    }
    return output;
  }
let arr = [1, 2, 3];
map(arr, (x) => x*2)
  