var myCanvasContext;
            
function pandaImage () {

    var element = document.getElementById("chat");
    element.parentNode.removeChild(element);
    var element = document.getElementById("writer");
    element.parentNode.removeChild(element);

    var canvas=document.getElementById("myCanvas");
    myCanvasContext=canvas.getContext("2d");
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    document.getElementById("myCanvas").style.pointerEvents = "auto";
    //myCanvasContext.fillStyle="black";
    //myCanvasContext.fillRect(0,0,1080,1920);
    var img = document.getElementById("phoneCall");
    ctx.drawImage(img, 0, 600, 1100, 689);
    c.addEventListener("click", click, false);
    localStorage.setItem(1337, 1);
    //console.log(buggued);
}
function click(event) {
    location.href='chat.html';
}           