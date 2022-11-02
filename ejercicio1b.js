'use strict';

const button1 = document.createElement("button");
button1.innerText = '1 botón';
button1.id = 'button1';


document.body.appendChild(button1);

const buttonText = document.getElementById('button1');

buttonText.onmouseenter = () => {
    buttonText.innerHTML = '1 botóN';
}

buttonText.onmouseleave = () => {
    buttonText.innerHTML = '1 botón';
}