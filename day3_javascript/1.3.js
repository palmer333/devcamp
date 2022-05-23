function printRow(numPerLine) {
    text = '';
    for (let j=0; j<numPerLine; j++) {
    text += 1 + j;
    }
    return text;
}
   
function draw(n) {
    text = '';
    for (let i=0; i<n; i++) {
    text += printRow(n);
    text += '\n';
    }
    console.log(text);
}
draw(2);
draw(3);
draw(4);
