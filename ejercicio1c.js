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
/*for (i=1;i<=10;i++) { 
    document.write("<button class=btn" + i + ">boton de nivel " + i + "</button" + i + ">") 
}*/