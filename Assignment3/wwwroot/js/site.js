// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.


//I copied the code that I tried when making a pong game
var canvas;
var canvasContext;
var ballX = 50;
var ballSpeedX = 5;

window.onload = function () {
    console.log("Hello World!");
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    var framesPerSecond = 30;
    setInterval(
        function () {
            moveEverything();
            drawEverything();
        }, 1000 / framesPerSecond);




}





function moveEverything() {
    ballX = ballX + ballSpeedX;
    if (ballX > canvas.width - 6) {
        ballSpeedX = -ballSpeedX;
    }
    if (ballX < 0)
        ballSpeedX = -ballSpeedX;
}

function drawEverything() {
    //background
    colorRect(0, 0, canvas.width, canvas.height, 'teal');

    //ball
    colorCircle(ballX, 150, 10, 'white');

}

function colorCircle(centerX, centerY, radius, drawColor) {
    //ball
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    canvasContext.fill();

}

function colorRect(leftX, topY, width, height, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);
}

