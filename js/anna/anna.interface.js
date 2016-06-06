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
	//Booléen pour voir si la phase de bug est passée
	buggued = localStorage.getItem(1337);
	//Booléen pour voir si l'image est passée
	image = localStorage.getItem(1336);
	//Booléen pour voir l'état du background
    Background = localStorage.getItem(1335);
	$("#box1").addClass("blue");
	currentBox = 2;
	if (buggued == 1) {
		$("#box1").text("AIDE-MOI, JE T'EN SUPPLIE !");
	}
	if (image == 1) {
		$("#box1").text("Qu'est ce que tu as vu ?");
	}
	nnTimer = setInterval(nnLifePulse, 1000)
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
    console.log(Background);
	if (buggued == 1 && messages_sent == 2) {
		location.href='chat.html';
		//Booléen pour voir si la phase de bug est passée
		localStorage.setItem(1337, 0);
		//Booléen pour voir si l'image est passée
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
	//un mot cleft déclenche la fin du proto
	if (x.toLowerCase().indexOf("tchernobyle") != -1 && image == 1)
	{
		document.location.href="credit.html";
		//Booléen pour voir si l'image est passée
		localStorage.setItem(1336, 0);
	}
  
	else if (x != "") {
		setTimeout(function(){
			if (buggued == 1 && messages_sent == 0)
			{
				dialogue(false, "J'ai besoin d'aide !!");
				messages_sent++;
			}
			else if (buggued ==1 && messages_sent == 1) 
			{
				dialogue(false, "Il faut que tu décrypte cette image");
				$('<img id="BosqueRojo" src="img/BosqueRojo.png">').appendTo("#box4");
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
		if (currentBox < 5) {
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
			
			for (var i = 1; i < 5; i++) {
				$("#box" + i).removeClass("white");
				$("#box" + i).removeClass("blue");
				if (((i < 4) && $("#box" + (i + 1)).hasClass("white")) || ((i == 4) && fromHuman)) {
					$("#box" + i).addClass("white");
				}
				else {
					$("#box" + i).addClass("blue");
				}
				if (i == 4) {
					$("#box4").text(dialoguetext);
				}
				else
					$("#box" + i).text($("#box" + (i+1)).text());
			}
		}
        if (!fromHuman && buggued == 0){
            emot();
            console.log(emotion);
            
        }
	}
}

//Emotions de l'IA
function emot () {



    //neutral
    if (localStorage.getItem(1335) != 0 && emotion<=65 && emotion>=35) {

		$("head").append('<style type="text/css"></style>');
		var newStyleElement = $("head").children(':last');
		newStyleElement.html('.white{background:url(img/bulles/bulle-neutre-droite.png) no-repeat center center; background-size:100% 100%;}');
		$("head").append('<style type="text/css"></style>');
		var newStyleElement = $("head").children(':last');
		newStyleElement.html('.blue{background:url(img/bulles/bulle-neutre-gauche.png) no-repeat center center; background-size:100% 100%;}');

        var vid = document.getElementById("video1");
        vid.src = "video/neutral.mp4";
        //Booléen pour voir l'état du background
        localStorage.setItem(1335, 0);
    }

    //joy
    if (localStorage.getItem(1335) != 1 && emotion>65){

		$("head").append('<style type="text/css"></style>');
		var newStyleElement = $("head").children(':last');
		newStyleElement.html('.white{background:url(img/bulles/bulle-joie-droite.png) no-repeat center center; background-size:100% 100%;}');
		$("head").append('<style type="text/css"></style>');
		var newStyleElement = $("head").children(':last');
		newStyleElement.html('.blue{background:url(img/bulles/bulle-joie-gauche.png) no-repeat center center; background-size:100% 100%;}');

        var vid = document.getElementById("video1");
        vid.src = "video/joy.mp4";
        //Booléen pour voir l'état du background
        localStorage.setItem(1335, 1);
    }

    //wrath
    if (localStorage.getItem(1335) != 2 && emotion<35) {

		$("head").append('<style type="text/css"></style>');
		var newStyleElement = $("head").children(':last');
		newStyleElement.html('.white{background:url(img/bulles/bulle-colere-droite.png) no-repeat center center; background-size:100% 100%;}');
		$("head").append('<style type="text/css"></style>');
		var newStyleElement = $("head").children(':last');
		newStyleElement.html('.blue{background:url(img/bulles/bulle-colere-gauche.png) no-repeat center center; background-size:100% 100%;}');

        var vid = document.getElementById("video1");
        vid.src = "video/wrath.mp4";
        //Booléen pour voir l'état du background
        localStorage.setItem(1335, 2);
    }
}

