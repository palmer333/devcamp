function draw(n) {
    text = '';
        for (let i=0; i<n; i++) {
            for (let j=0; j<n; j++) {
                if (j <= i) {
                    text += '*';
                } else {
                    text += '-';
                }
            }
            text += '\n';
        }
        for (let i=0; i<n-1; i++) {
            for (let j=0; j<n; j++) {
                if (j < n-i-1) {
                    text += '*';
                } else {
                    text += '-';
            }
        }
        text += '\n';
    }
    console.log(text);
}
draw(2);
draw(3);
draw(4);