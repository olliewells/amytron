
// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// APP
// app.scss v1 | ~ github.com/amyamytron | ~ amytron.com | @amytron

// NAVIGATION HEIGHT

// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// TODO: Make this modular, use grunt.js

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