// CONST
var UPDATE_INTERVAL = 1000/60;

// GLOBALS
var key_pressed = {};
var canvas;
var context;
var i = 0;

function on_keydown(ev) {
    var key = ev.which;
    key_pressed[key] = true;
}

function on_keyup(ev) {
    var key = ev.which;
    key_pressed[key] = false;
}

function draw() {
    context.clearRect (0, 0, canvas.width, canvas.height);
    
    context.fillRect(i, i, 150, 75);
}

function on_update() {
    i += 1;
    if (i+150 > canvas.width || i+75 > canvas.height) {
        i = 0;
    }
    draw();
}

function on_resize() {
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
    context.fillStyle = "#FF0000";
    draw();
}

function main() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    var interval_id = window.setInterval(on_update, UPDATE_INTERVAL);
    context.fillStyle = "#FF0000";

    window.addEventListener('resize', on_resize);
    window.onkeydown = on_keydown;
    window.onkeyup = on_keyup;
}

document.addEventListener("DOMContentLoaded", main);