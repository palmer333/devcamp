function draw(n) {
    text = '';
    num = n*n;
        for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
        text += num;
        num--
    }
        text += '\n';
    }
        console.log(text);
}
draw(2);
draw(3);
draw(4);
