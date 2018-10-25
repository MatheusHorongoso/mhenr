function changeText1() {
    document.getElementById('score-1').innerHTML = parseInt(document.getElementById('score-1').innerHTML) + 5;
}

function changeText2() {
    document.getElementById('score-2').innerHTML = parseInt(document.getElementById('score-2').innerHTML) + 5;
}

function changeText3() {
    document.getElementById('score-1').innerHTML = parseInt(document.getElementById('score-1').innerHTML) + 3;
}

function changeText4() {
    document.getElementById('score-2').innerHTML = parseInt(document.getElementById('score-2').innerHTML) + 3;
}

function countdown() {
	//$("dano-1").classList.add('disabled');
	var timeleft = 10;
	var downloadTimer = setInterval(function(){
	document.getElementById("progressBar").value = 10 - --timeleft;
	if(timeleft <= 0)
		clearInterval(downloadTimer);
		$("#teste123").html('Nocaute em '+ timeleft + '...');
	},1000);
	
	var html = '<center><h3 id="teste123">Nocaute em 10...</h3>\
		<progress value="0" max="10" id="progressBar" class="progress"></progress>\
		<br>\
        <a id="dogeButton" class="waves-effect waves-light btn" style="width: 50%; background: #ab1e2f" onclick="cancel();">Cancelar</a>\
    </center>';

    $("#countdown").html(html);
}

function cancel() {
	$("#countdown").html("");
}