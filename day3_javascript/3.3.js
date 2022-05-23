debugger;
let myList = [
    ['-', '-'],
    ['*', '*']
];
   let text = '';
        for (let i=0; i<myList.lenght; i++) {
            for (let j=0; i<myList[i].lenght; j++) {
                text += '' + myList[i][j];
            } 
    text += "\n";
   }
console.log(text);
   