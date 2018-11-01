/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var mobilemenu = document.getElementsByTagName('img')[0];
var imgArray = ['./images/hamburger.png', './images/hamburgAnimation.gif', './images/hamburgclose.png', './images/hamburgReverseAnimation.gif'];

/*
function gif2menu() {
    if (mobilemenu.getAttribute('src') === imgArray[1]) {
        mobilemenu.setAttribute('src', imgArray[2]);
    } else {
        mobilemenu.setAttribute('src', imgArray[0]);
    }
}*/

function menu2gif() {
    console.log(mobilemenu.getAttribute('src'));

    if (mobilemenu.getAttribute('src').toString === 'images/hamburger.png') {
        mobilemenu.setAttribute('src', imgArray[1]);
    } else {
        mobilemenu.src = imgArray[3];
    }
    //setInterval(gif2menu, 20000);

}

mobilemenu.addEventListener('click', menu2gif, true);
