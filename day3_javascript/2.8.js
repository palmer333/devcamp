function draw(n) {
    text = '';
    num = 1;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                text += "-";
            }
            for (let k = 0; k < i + 1; k++) {
                text += num;
                num++;
            }
            text += "\n";
        }
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < i + 1; j++) {
                text += "-";
            }
            for (let k = 0; k < n - i - 1; k++) {
                text += num;
                num++;
            }
            text += "\n";
        }
    console.log(text);
}
draw(2);
draw(3);
draw(4);