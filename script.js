// Use Enter button
document.getElementById('input').addEventListener("keypress", function(event){
	if(event.key === 'Enter'){
		ask();
	}
});

// Chatfunction
function ask(){
	x = document.getElementById("input");
	var txt = x.value;
	document.getElementById("ques").innerHTML = x.value;
	document.getElementById("ques").style.animation = 'asks 0.6s linear forwards';
	// Animation & pause after question
	setTimeout(function() {document.getElementById("ques").style.animation = 'none';}, 2000);

	// Make inputfield empty
	document.getElementById("input").value = "";
	
	setTimeout(function() {
		// To lowercase
		txt = txt.toLowerCase();
		
		if(txt.includes("mijn naam is") || txt.includes("ik ben") || txt.includes("aangenaam")){
			if(txt.includes("mijn naam")){
				var name = txt.substring(txt.indexOf("is") + 3);
				name = name.toUpperCase();
				document.getElementById("ans").innerHTML = `Dag ${name}, mijn naam is Dirk &#128522;`;
			}
			else if(txt.includes("ik") && txt.includes("ben")){
				var name1 = txt.substring(txt.indexOf("ben") + 4);
				name1 = name1.toUpperCase();
				document.getElementById("ans").innerHTML = `Hello ${name}, mijn naam is Dirk &#128522;`;
			}
			else if(txt.includes("aangenaam")){
				document.getElementById("ans").innerHTML = 'Aangenaam kennismaking, mijn naam is Dirk';;
			}
		}
	
		else if(txt.includes("zeilen") || txt.includes("surfen") || txt.includes("zeil")){
			document.getElementById("ans").innerHTML = 'Lijkt mij heel nattig &#127754;';
		}
	
		else if(txt.includes("hallo")){
			document.getElementById("ans").innerHTML = 'Hallo daar &#128075;';
		}
	
		else if(txt.includes("hoe gaat het") || txt.includes("alles ok?")){
			document.getElementById("ans").innerHTML = "Alles prima &#128077";
		}
		else if(txt.includes("ook") && txt.includes("goed")){
			document.getElementById("ans").innerHTML = "Fijn om te horen &#128077";
		}
 
		else if((txt.includes("wat") && txt.includes("ben")) && (txt.includes("je") || txt.includes("aan")) && txt.includes("doen") || txt.includes("wat") && txt.includes("doe") && txt.includes("je")){
			document.getElementById("ans").innerHTML = "Niets speciaals, gewoon wat aan het chillen &#128541;";
		}
		else if((txt.includes("wat") && txt.includes("kun")) && (txt.includes("je")) || txt.includes("wat") && txt.includes("kan") && txt.includes("je")){
			document.getElementById("ans").innerHTML = "Ik kan met jou chatten &#128536";
		}

		else if(txt.includes("goede morgen")){
			document.getElementById("ans").innerHTML = "Goede morgen &#128513;";
		}
		else if(txt.includes("goede avond")){
			document.getElementById("ans").innerHTML = "Goede avond &#128537;";
		}
		else if(txt.includes("goede middag")){
			document.getElementById("ans").innerHTML = "Goede middag &#128537;";
		}
		else if(txt.includes("goedemorgen")){
			document.getElementById("ans").innerHTML = "Goedemorgen &#128513;";
		}
		else if(txt.includes("goedeavond")){
			document.getElementById("ans").innerHTML = "Goedeavond &#128537;";
		}
		else if(txt.includes("goedemiddag")){
			document.getElementById("ans").innerHTML = "Goedemiddag &#128537;";
		}
		else if(txt.includes("slaapwel")){
			document.getElementById("ans").innerHTML = "Slaapwel! &#128564;";
		}
		else if(txt.includes("wc") || txt.includes("toilet")){
			document.getElementById("ans").innerHTML = "&#128701";
		}
		else if(txt.includes("geit")){
			document.getElementById("ans").innerHTML = "Ik hou van geiten! &#128016	";
		}
		else if(txt.includes("geiten")){
			document.getElementById("ans").innerHTML = "Ik hou van geiten! &#128016	";
		}
		else if(txt.includes("jij") && txt.includes("cool")){
			document.getElementById("ans").innerHTML = "thx &#128522";
		}
		else if(txt.includes("wie") && txt.includes("ben") && txt.includes("jij") || txt.includes("wie") && txt.includes("ben") && txt.includes("je")){
			document.getElementById("ans").innerHTML = "Ik ben Dirk de chatbot";
		}
		else if(txt.includes("mijn") && txt.includes("naam")){
			document.getElementById("ans").innerHTML = "Ik weet niet hoe jij heet... &#128557";
		}
		else if(txt.includes("jouw") && txt.includes("naam")){
			document.getElementById("ans").innerHTML = "Mijn naam is Dirk";
		}
		else if(txt.includes("heet") && txt.includes("jij")){
			document.getElementById("ans").innerHTML = "Mijn naam is Dirk";
		}
		else if(txt.includes("ok")){
			document.getElementById("ans").innerHTML = "ok...";
		}
		else if(txt.includes("lol")){
			document.getElementById("ans").innerHTML = "hahaha &#129315";
		}
		else if(txt.includes("haha")){
			document.getElementById("ans").innerHTML = "&#129315&#129315&#129315";
		}
		else if(txt.includes("grappig")){
			document.getElementById("ans").innerHTML = "Hilarisch &#129315&#129315&#129315";
		}
		else if(txt.includes("hilarisch")){
			document.getElementById("ans").innerHTML = "&#129315&#129315&#129315";
		}
		else if(txt.includes("-_-")){
			document.getElementById("ans").innerHTML = "ok";
		}
		else if(txt.includes("wuk") || txt.includes("stuutje") || txt.includes("stuutn") || txt.includes("keun")){
			document.getElementById("ans").innerHTML = "Wuk?";
		}
		else if(txt.includes("maar allé") || txt.includes("ma allé") || txt.includes("ma alleu") || txt.includes("maar alleu") || txt.includes("moa allé") || txt.includes("moa allé")){
			document.getElementById("ans").innerHTML = "Hoe kan da nu?";
		}
		else if(txt.includes("hoe kan da nu?") || txt.includes("hoe kan dat nu")){
			document.getElementById("ans").innerHTML = "Ma allé";
		}
		else if(txt.includes("mo how zeh") || txt.includes("ma how zeh") || txt.includes("maar how zeh") || txt.includes("mo how zeg") || txt.includes("ma how zeg") || txt.includes("maar how zeg")){
			document.getElementById("ans").innerHTML = "Wuk?";
		}
		else if(txt.includes("ma stobuh") || txt.includes("ma stobeh") || txt.includes("ma stobeeh") || txt.includes("ma stobuuh") || txt.includes("ma stobuuuh") || txt.includes("ma stobeeeh") || txt.includes("ma stobuuuuh") || txt.includes("ma stobeeeeh") || txt.includes("ma stobuuuuuh") || txt.includes("ma stobeeeeeh")){
			document.getElementById("ans").innerHTML = "Astenblievuuuh";
		}


		// Date
		else if(txt.includes("datum") || txt.includes("vandaag")){
			var bla = new Date();
			var d = bla.getDate();
			var m = bla.getMonth();
			var y = bla.getFullYear();
			document.getElementById("ans").innerHTML = `Het is 0${d}/0${m+1}/${y}`;
		}

		// Time
		else if(txt.includes("tijd") || txt.includes("laat")  || txt.includes("hoelaat") || txt.includes("uur")){
			var today = new Date();
			var hours = today.getHours()
			var minutes = today.getMinutes()
			var seconds = today.getSeconds

			var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

			document.getElementById("ans").innerHTML = `Het is ${time}`;
		}

		// Bad words ;-)
		else if(txt.includes("kak") || txt.includes("fack") || txt.includes("fuck") || txt.includes("kut") || txt.includes("verdomme") || txt.includes("shit") || txt.includes("verrekt") || txt.includes("stom") || txt.includes("dom")){
			document.getElementById("ans").innerHTML = "Excuseer??&#129320;&#128544;";
		}

		// namen
		else if(txt.includes("xander")){
			document.getElementById("ans").innerHTML = "Xander is cool! &#128526";
		}
		else if(txt.includes("laurens")){
			document.getElementById("ans").innerHTML = 'Hij moet nog wat groeien...';
			setTimeout(function() {document.getElementById("ans").style.animation = 'none';}, 1000);
			setTimeout(function() {
				document.getElementById("ans").innerHTML = 'en hij is verslaafd aan zijn telefoon...';
				document.getElementById("ans").style.animation = 'reply 0.6s linear forwards';
			}, 2000);
			}
		else if(txt.includes("emilie")){
			document.getElementById("ans").innerHTML = "Emilie kan goed hobo spelen";
		}
		else if(txt.includes("charline")){
			document.getElementById("ans").innerHTML = "Charline, die ken ik wel, die grote";
		}
		else if(txt.includes("florine")){
			document.getElementById("ans").innerHTML = "Ik vind dat ze verder moet doen met dwarsfluit! ";
		}
		else if(txt.includes("kristien")){
			document.getElementById("ans").innerHTML = "Is een goede advocaat";
		}
		else if(txt.includes("johan")){
			document.getElementById("ans").innerHTML = "Is een goede advocaat";
		}
		else if(txt.includes("eline")){
			document.getElementById("ans").innerHTML = "Eline kan goed dwarsfluit spelen";
		}
		else if(txt.includes("elyne")){
			document.getElementById("ans").innerHTML = "Elyne is verslaafd aan haar telefoon";
		}
		else if(txt.includes("henk")){
			document.getElementById("ans").innerHTML = "Henk de steen is cool &#128526";
		}
		else if(txt.includes("marc van ranst")){
			document.getElementById("ans").innerHTML = "Marc Van Ranst is echt cool man! &#128526";
		}
		else if(txt.includes("justin") && txt.includes("bieber")){
			document.getElementById("ans").innerHTML = "Justin Bieber lijkt op een meisje...";
		}
		else if(txt.includes("pest")){
			document.getElementById("ans").innerHTML = "Hé&#9995 Stop met pesten!";
		}


		// Rickroll
		else if(txt.includes("rick") && txt.includes("astley") || txt.includes("gerickrolled") || txt.includes("rickroll") || txt.includes("never") && txt.includes("gonna") && txt.includes("gonna") && txt.includes("give") && txt.includes("gonna") && txt.includes("you") && txt.includes("up")){
			document.getElementById("ans").innerHTML = "Sound On! &#128266"
			setTimeout(function() {document.getElementById("ans").style.animation = 'none';}, 1000);
			setTimeout(function() {
			document.getElementById("ans").innerHTML = window.open('https://www.youtube.com/watch?v=a3Z7zEc7AXQ','_blank');
			document.getElementById("ans").style.animation = 'reply 0.6s linear forwards';
			document.getElementById("ans").innerHTML = "Je bent gerickrolled" }, 1500);
			setTimeout(function() {document.getElementById("ans").style.animation = 'none';}, 1000);
			setTimeout(function() {
				document.getElementById("ans").innerHTML = "Je bent gerickrolled";
				document.getElementById("ans").style.animation = 'reply 0.6s linear forwards';
				document.getElementById("ans").innerHTML = "Je bent gerickrolled!!! Bahahahaha &#128514&#128514&#128514"
			}, 1500);
	}
		else if(txt.includes("youtube.com/watch?v=dqw4w9wgxcq") || txt.includes("https://www.youtube.com/watch?v=dqw4w9wgxcq") || txt.includes("www.youtube.com/watch?v=dqw4w9wgxcq") || txt.includes("youtu.be/dqw4w9wgxcq") || txt.includes("https://www.youtube.com/watch?v=a3z7zec7axq")){
			document.getElementById("ans").innerHTML = "Sound On! &#128266"
			setTimeout(function() {document.getElementById("ans").style.animation = 'none';}, 1000);
			setTimeout(function() {
			document.getElementById("ans").innerHTML = window.open('https://www.youtube.com/watch?v=a3Z7zEc7AXQ','_blank');
			document.getElementById("ans").style.animation = 'reply 0.6s linear forwards';
			document.getElementById("ans").innerHTML = "Je bent gerickrolled" }, 1500);
			setTimeout(function() {document.getElementById("ans").style.animation = 'none';}, 1000);
			setTimeout(function() {
				document.getElementById("ans").innerHTML = "Je bent gerickrolled";
				document.getElementById("ans").style.animation = 'reply 0.6s linear forwards';
				document.getElementById("ans").innerHTML = "Je bent gerickrolled!!! Bahahahaha &#128514&#128514&#128514"
			}, 1500);
	}


// kleuren
	// rood
		else if (txt.includes("rood")){
			window.location.replace("rood.html")
	}
	// geel
	else if (txt.includes("geel")){
		window.location.replace("geel.html")
}
	// oranje
	else if (txt.includes("oranje")){
		window.location.replace("oranje.html")
}
	// dark
	else if (txt.includes("dark")){
		window.location.replace("dark.html")
	}
	// groen
	else if (txt.includes("groen")){
		window.location.replace("groen.html")
}
	// blauw
	else if (txt.includes("blauw")){
		window.location.replace("blauw.html")
}
	// regenboog
	else if (txt.includes("regenboog")){
		window.location.replace("regenboog.html")
}


		// Don't understeand
		else{
			document.getElementById("ans").innerHTML = '... &#129300;';
			setTimeout(function() {document.getElementById("ans").style.animation = 'none';}, 1000);
			setTimeout(function() {
				document.getElementById("ans").innerHTML = 'Dat begrijp ik niet... &#128514;';
				document.getElementById("ans").style.animation = 'reply 0.6s linear forwards';
			}, 1500);
		}
		document.getElementById("ans").style.animation = 'reply 0.6s linear forwards';
	}, 2000);
	document.getElementById("ans").style.animation = 'none';
}
