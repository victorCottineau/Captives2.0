var myCanvasContext,cptFrame;
            
function chatStart () {

    var element = document.getElementById("writer");
    element.parentNode.removeChild(element);

    var canvas=document.getElementById("myCanvas");
    myCanvasContext=canvas.getContext("2d");
    cptFrame=0;
    drawFrame();
}
function drawFrame() {

    for (var i = 0;i < 100; i++){
        myCanvasContext.fillStyle="#7B8281";
        myCanvasContext.fillRect(Math.floor((Math.random() * 1080) + 1), Math.floor((Math.random() * 1920) + 1), Math.floor((Math.random() * 1) + 10), 10);
        myCanvasContext.fill();
    }

    for (var i = 0;i < 100; i++){
        myCanvasContext.fillStyle="#4C5151";
        myCanvasContext.fillRect(Math.floor((Math.random() * 1080) + 1), Math.floor((Math.random() * 1920) + 1), Math.floor((Math.random() * 1) + 10), 10);
        myCanvasContext.fill();
    }

for (var i = 0;i < 100; i++){
    myCanvasContext.fillStyle="#A9AFAE";
                myCanvasContext.fillRect(Math.floor((Math.random() * 1080) + 1), Math.floor((Math.random() * 1920) + 1), Math.floor((Math.random() * 1) + 10), 10);
                myCanvasContext.fill();
            }
            
            if (cptFrame == 250) {
                
                var c = document.getElementById("myCanvas");
                var ctx = c.getContext("2d");
                document.getElementById("myCanvas").style.pointerEvents = "auto";
                var img = document.getElementById("phoneCall");
                ctx.drawImage(img, 0, 0, 1080, 1920);
                c.addEventListener("click", click, false);
                localStorage.setItem(1337, 1);
                var audio = new Audio('sound/ringtone.mp3');
                audio.volume = 0.5;
                audio.loop = true;
                audio.play();
                console.log(buggued);
            }

            else {
            //on relance la boucle
            cptFrame++;
            setTimeout(drawFrame,1000/50);
            }
        }

        function click(event) {

            location.href='chatOmbre.html';
        }