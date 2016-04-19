var myCanvasContext,cptFrame;
            
            function chatStart () {
                var canvas=document.getElementById("myCanvas");
                myCanvasContext=canvas.getContext("2d");
                cptFrame=0;
                drawFrame();
            }
            function drawFrame() {
                for (var i = 0;i < 5; i++){
                    myCanvasContext.fillStyle="#25C61F";
                    myCanvasContext.fillRect(Math.floor((Math.random() * 900) - 100), Math.floor((Math.random() * 1920) + 1), Math.floor((Math.random() * 400) + 200), 50);
                    myCanvasContext.fill();
                }
                
                 for (var i = 0;i < 5; i++){
                    myCanvasContext.fillStyle="#277125";
                    myCanvasContext.fillRect(Math.floor((Math.random() * 900) - 100), Math.floor((Math.random() * 1920) + 1), Math.floor((Math.random() * 400) + 200), 50);
                    myCanvasContext.fill();
                }
                
                for (var i = 0;i < 5; i++){
                    myCanvasContext.fillStyle="#214C20";
                    myCanvasContext.fillRect(Math.floor((Math.random() * 900) - 100), Math.floor((Math.random() * 1920) + 1), Math.floor((Math.random() * 400) + 200), 50);
                    myCanvasContext.fill();
                }
                if (cptFrame == 250) {
                    var c = document.getElementById("myCanvas");
                    var ctx = c.getContext("2d");
                    document.getElementById("myCanvas").style.pointerEvents = "auto";
                   // myCanvasContext.fillStyle="black";
                  //  myCanvasContext.fillRect(0,0,1080,1920);
                    var img = document.getElementById("phoneCall");
                    ctx.drawImage(img, 0, 0, 1080, 1920);
                    c.addEventListener("click", click, false);
                    localStorage.setItem(1337, 1);
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