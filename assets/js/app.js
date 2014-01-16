
// ----------------------------------------------------------------------------------- //

// Project: HCC Trade site
// Version: Prototype - V1
// Author: Amy Young

// ------------------------------------------------------------------------------------ //

// NAVIGATION HEIGHT

// Detect window height and set navigation height

var nav = document.getElementById("nav");

function resize() {

if (typeof window.innerWidth != 'undefined') {
    viewportwidth = window.innerWidth,
    viewportheight = window.innerHeight
}

else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined
    viewportwidth = document.documentElement.clientWidth,' && document.documentElement.clientWidth != 0) {
    viewportheight = document.documentElement.clientHeight
}

else {
    viewportwidth = document.getElementsByTagName('body')[0].clientWidth,
    viewportheight = document.getElementsByTagName('body')[0].clientHeight
}
nav.style.height = viewportheight+"px";
}