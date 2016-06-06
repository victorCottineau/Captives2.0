var myCanvasContext;
            
function pandaImage () {

    var canvas=document.getElementById("myCanvas");
    myCanvasContext=canvas.getContext("2d");
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    document.getElementById("myCanvas").style.pointerEvents = "auto";
    //Booléen pour voir si la phase de bug est passée
    localStorage.setItem(1337, 1);
}

function click(event) {
    
    location.href='chat.html';
}

function animation () {

    var vid = document.getElementById("video1");
    vid.src = "video/ombre.mp4";
    //Booléen pour voir l'état du background
    localStorage.setItem(1335, 0);

}