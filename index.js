var update_interval = 30;

function draw() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let interval_id = window.setInterval(function update() {
        // Update canvas
    }, update_interval);

    window.onkeydown  = function(event) {
        let key = event.which;
    }
    window.onkeyup = function(event) {
        let key = event.which;
    }
}