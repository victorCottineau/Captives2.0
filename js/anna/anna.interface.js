// Algorithmic Neural Network Architecture
// Version 1.0
// (c) Jean-Claude Heudin 2015

// ===============================================================================
// LIFEPULSE
// ===============================================================================

var nnTimer = null;
var nnLifeCount = 0;
var messages_sent = 0;
var buggued = 0;
var currentBox = 2;
var image = 0;

window.onload = function() {
	nnStart();
}
function nnStart () {
	//Activation de la barre d'input
	$("#message").removeAttr("disabled");
	//"Send a message" est mis comme placeholder dans la barre d'input
	$("#message").attr("placeholder", "C'est à vous !");
	//Le curseur prend la barre d'input en focus pour taper directement
	$("#message").focus();
	buggued = localStorage.getItem(1337);
	image = localStorage.getItem(1336);
    Background = localStorage.getItem(1335);
	$("#box1").addClass("blue");
	currentBox = 2;
	if (buggued == 1) {
		$("#box1").text("AIDE-MOI, JE T'EN SUPPLIE !");
	}
	if (image == 1) {
		$("#box1").text("Qu'est ce qu'il vient de se passer ?");
	}
	nnTimer = setInterval(nnLifePulse, 1000)
	//console.log(buggued);
}
function nnStop () { clearInterval(nnTimer); }

var alone_speech = "";

function nnLifePulse () {
	nnLifeCount++;

	alone_speech = "";

	nnAlone.propagate();
	alone_speech = nAloneSelector.cval;

	if ((alone_speech != "") && (buggued != 1)) {
		dialogue(false, alone_speech);
		// text to speech
		//responsiveVoice.speak(alone_speech, "French Male");
	}
}

// ===============================================================================
// WEB INTERFACE
// ===============================================================================

var speech = "";
var tag = 0;

function sendMessage () {
	//On déclenche la fin de la phase ombre après un certain nombre de messages envoyés.
	//console.log(messages_sent);
	//console.log(image);
	//console.log(buggued);
	//console.log(messages_sent);
    console.log(Background);
	if (buggued == 1 && messages_sent == 2) {
		//pandaImage();
		localStorage.setItem(1337, 0);
		localStorage.setItem(1336, 1);
	}
	else if (messages_sent == 4 && image == 0) {
		chatStart();
	}
	else
	{
		tag = nnLifeCount;
		think();
	}
	return false;
}

function think () {
	//On affiche le message de l'utilisateur et on le supprime de la barre d'input.
	dialogue(true, $("#message").val());
	//On récupère la valeur du message dans la variable x
	var x = $("#message").val();
	$("#message").val("");
	x = x.trim();
	//console.log(image);
	//console.log(localStorage.getItem(1338));
	//un mot cleft déclenche la fin du proto
	if (x == "panda" && image == 1)
	{
		//console.log("yeah")
		document.location.href="credit.html";
		localStorage.setItem(1336, 0);
	}
    //un mot clef déclenche le bug
    /*else if (x == "banane")
    {
        chatStart();
        //document.location.href="bug.html";
    }*/
	else if (x != "") {
		setTimeout(function(){
			if (buggued == 1 && messages_sent == 0)
			{
				dialogue(false, "J'ai besoin d'aide !!");
				messages_sent++;
			}
			else if (buggued ==1 && messages_sent == 1) 
			{
				dialogue(false, "Aide moi à décrypter cette image");
				messages_sent++;
			}
			else
			{
				speech = x;
				// think
				nnInput.propagate();
				nnSynthia.propagate();
				nnOutput.propagate();
				// write answer
				var answer = nOutput.cval;
				dialogue(false, answer);
				console.log(answer);
				messages_sent++;
				// text to speech
				//responsiveVoice.speak(answer, "French Male");
			}
		}, 500);
	}
}

function dialogue(fromHuman, dialoguetext) {
	if (dialoguetext.trim() != "") {
		if (currentBox < 3) {
			if (fromHuman) {
				$("#box" + currentBox).addClass("white");
			}
			else {
				$("#box" + currentBox).addClass("blue");
			}
			$("#box" + currentBox).text(dialoguetext);
			$("#box" + currentBox).css("display", "block");
			currentBox++;
		}
		else {
			
			for (var i = 1; i < 3; i++) {
				$("#box" + i).removeClass("white");
				$("#box" + i).removeClass("blue");
				if (((i < 2) && $("#box" + (i + 1)).hasClass("white")) || ((i == 2) && fromHuman)) {
					$("#box" + i).addClass("white");
				}
				else {
					$("#box" + i).addClass("blue");
				}
				if (i == 2) {
					$("#box2").text(dialoguetext);
				}
				else
					$("#box" + i).text($("#box" + (i+1)).text());
			}
		}
        if (!fromHuman && buggued == 0){
            emot();
           // backgroundStart();
            console.log(emotion);
            
        }
	}
}

//Emotions de l'IA
function emot () {
    //neutral

    if (localStorage.getItem(1335) != 0 && emotion<=65 && emotion>=35) {
        //$("#wrapper").css("background-image","linear-gradient(#10597e, #5baab1)");
		$(".blue").css("background-color","rgba(223, 140, 88, 0.4)");
		$(".white").css("background-color","rgba(121, 46, 0, 0.4)");

        var vid = document.getElementById("video1");
        vid.src = "video/neutral.mp4";
        localStorage.setItem(1335, 0);
    }
    //joy
    if (localStorage.getItem(1335) != 1 && emotion>65){
        //$("#wrapper").css("background-image","linear-gradient(#08EF00, #97ED94)");
		$(".blue").css("background-color","rgba(126, 84, 16, 0.4)");
		$(".white").css("background-color","rgba(233, 156, 33, 0.4)");

        var vid = document.getElementById("video1");
        vid.src = "video/joy.mp4";
        localStorage.setItem(1335, 1);
    }
    //wrath
    if (localStorage.getItem(1335) != 2 && emotion<35) {
		$(".blue").css("background-color","rgba(96, 13, 21, 0.4)");
		$(".white").css("background-color","rgba(183, 89, 97, 0.4)");

        var vid = document.getElementById("video1");
        vid.src = "video/wraith.mp4";
        localStorage.setItem(1335, 2);
    }
}
console.log(emotion);