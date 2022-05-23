function draw(n) {
    text = '';
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < i; j++) {
                text += "-";
            }
            for (let k = 0; k < (n-i) * 2 - 1; k++) {
                text += "*";
            }
            for (let m = 0; m < i; m++) {
                text += "-";
            }
            text += "\n";
        }
        console.log(text)
}
draw(2);
draw(3);
draw(4);