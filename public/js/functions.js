function GoToChooseOponentsScreen(){
    window.location.href='escolheCombate';
}

function GoToGameScreen(){
    window.location.href='combate';
}

function BackToIndexScreen(){
    window.location.href='index';
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function inicia () {
    var fiveMinutes = 60 * 3,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
