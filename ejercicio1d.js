'use strict';

function button1000() {
    for (let i = 1; i <= 1000; i++) {
        const button = document.createElement("button");
        button.innerText = i + ' botón';
        button.id = 'button' + i;
        document.body.appendChild(button);
    }
}
button1000();