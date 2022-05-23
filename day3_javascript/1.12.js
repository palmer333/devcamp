function draw(n) {
    text = '';
    num = 1;
        for (let i=0; i<n; i++) {
            for (let j=0; j<n; j++) {
                if (j===n-num) {
                    text += '-';
                } else {
                    text += '*';
                }
        }
        text += '\n';
        num++;
    }
    console.log(text);
}
draw(2);
draw(3);
draw(4);
