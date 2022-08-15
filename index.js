window.onload = function () {

	var seconds = 00;
	var tens = 00;
	var appendTens = document.getElementById("tens")
	var appendSeconds = document.getElementById("seconds")
	var buttonStart = document.getElementById('button-start');
	var buttonStop = document.getElementById('button-stop');
	var buttonReset = document.getElementById('button-reset');
	var Interval;

	buttonStart.onclick = function () {

		clearInterval(Interval);
		Interval = setInterval(startTimer, 10);
	}

	buttonStop.onclick = function () {
		clearInterval(Interval);
	}


	buttonReset.onclick = function () {
		clearInterval(Interval);
		tens = "00";
		seconds = "00";
		appendTens.innerHTML = tens;
		appendSeconds.innerHTML = seconds;
		document.getElementById('away').style.color = '#F94F6D';
		document.getElementById('home').style.color = '#F94F6D';
		document.getElementById('away').innerHTML = '0';
		document.getElementById('home').innerHTML = '0';
	}



	function startTimer() {
		tens++;

		if (tens <= 9) {
			appendTens.innerHTML = "0" + tens;
		}

		if (tens > 9) {
			appendTens.innerHTML = tens;

		}

		if (tens > 99) {
			console.log("seconds");
			seconds++;
			appendSeconds.innerHTML = "0" + seconds;
			tens = 0;
			appendTens.innerHTML = "0" + 0;
		}

		if (seconds > 9) {
			appendSeconds.innerHTML = seconds;
		}

	}


}

function addPoint(points, home) {
	document.getElementById(home).innerHTML = parseInt(document.getElementById(home).innerHTML) + parseInt(points);
	if (parseInt(document.getElementById('home').innerHTML) > parseInt(document.getElementById('away').innerHTML)) {
		document.getElementById('home').style.color = '#fd002e';
		document.getElementById('away').style.color = '#F94F6D';
	}
	else if (parseInt(document.getElementById('home').innerHTML) < parseInt(document.getElementById('away').innerHTML)) {
		document.getElementById('away').style.color = '#fd002e';
		document.getElementById('home').style.color = '#F94F6D';
	}
	else {
		document.getElementById('away').style.color = '#F94F6D';
		document.getElementById('home').style.color = '#F94F6D';
	}
}

