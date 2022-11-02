'use strict';

function button1000() {
    for (let i = 1; i <= 1000; i++) {
        const button = document.createElement("button");
        button.innerText = i + ' botón';
        button.id = 'button' + i;
        document.body.appendChild(button);
    }
}


function changeButton1000() {
    for (let i = 1; i <= 1000; i++) {
        const buttonText = document.getElementById('button' + i);

        buttonText.onmouseenter = () => {
            buttonText.innerHTML = i + ' botóN';
        }

        buttonText.onmouseleave = () => {
            buttonText.innerHTML = i + ' botón';
        }
    }
}

Button1000();
changeButton1000();