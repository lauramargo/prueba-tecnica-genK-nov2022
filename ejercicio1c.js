'use strict';

function button10() {
    for (let i = 1; i <= 10; i++) {
        const button = document.createElement("button");
        button.innerText = i + ' botón';
        button.id = 'button' + i;
        document.body.appendChild(button);
    }
}
button10();
