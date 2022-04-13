function draw(n) {
    text = '';
        for (let i=0; i<n; i++) {
            for (let j=0; j<n; j++) {
                if (i===j) {
                    text += '-';
                } else {
                    text += '*';
                }
        }
        text += '\n';
    }
    console.log(text);
}
draw(2);
draw(3);
draw(4);

