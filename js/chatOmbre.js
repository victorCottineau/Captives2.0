var myCanvasContext;
            
function pandaImage () {
    var canvas=document.getElementById("myCanvas");
    myCanvasContext=canvas.getContext("2d");
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    document.getElementById("myCanvas").style.pointerEvents = "auto";
    myCanvasContext.fillStyle="black";
    myCanvasContext.fillRect(0,0,1080,1920);
    var img = document.getElementById("phoneCall");
    ctx.drawImage(img, 250, 600, 620, 701);
    c.addEventListener("click", click, false);
    localStorage.setItem(1337, 1);
    //console.log(buggued);
}
function click(event) {
    location.href='chat.html';
}

function animation () {

    var vid = document.getElementById("video1");
    vid.src = "video/ombre.mp4";
    localStorage.setItem(1335, 0);

}