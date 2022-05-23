function draw(n) {
    text = '';
    num = 1;
        for (let i=0; i<n; i++) {
            for (let j=0; j<n; j++) {
            text += num + (num*j);
        }
        text += '\n';
        num++
    }
    console.log(text);
}
draw(2);
draw(3);
draw(4);

