function backgroundOnload() {
	console.log("Onload");
	var vid = document.getElementById("video1");
    vid.src = "neutral.mp4";
    localStorage.setItem(1335, 0);
    backgroundStart();
}

function backgroundStart() {
console.log("background");
var v = document.getElementById("video1");
var c = document.getElementById("backgroundCanvas");
var ctx = c.getContext("2d");
var i;

v.addEventListener("play", function() {i = window.setInterval(function() {ctx.drawImage(v,5,5,1080,1920)},20);}, false);
}