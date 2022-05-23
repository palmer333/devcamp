function draw(n) {
    text = '';
        for (let i = 1; i <= n; i++) {
            for (let j = n; j > i; j--) {
                text += "-";
            }
            for (let k = 0; k < i * 2 - 1; k++) {
                text += "*";
            }
            for (let m = n; m > i; m--) {
                text += "-";
            }
            text += "\n";
        }
        console.log(text)
}
draw(2);
draw(3);
draw(4);