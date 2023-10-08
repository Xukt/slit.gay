function audio() {
    var audio = document.getElementById("audio");
    audio.volume = 0.2;
    audio.play();
}

document.addEventListener("DOMContentLoaded", function() {
    var overlayToggle = document.getElementById("overlay-toggle");
    overlayToggle.addEventListener("click", function() {
        audio();
    });
});

document.onkeydown = function(e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
};

window.oncontextmenu = function() {
    return false;
};

$(document).keydown(function(event) {
    if (event.keyCode == 123) {
        return false;
    } else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
        return false;
    }
});
