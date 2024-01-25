let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById('display');
let timer = null;

function stopwatch(){
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    let hrs = hours < 10 ? "0" + hours : hours;
    let min = minutes < 10 ? "0" + minutes : minutes;
    let sec = seconds < 10 ? "0" + seconds : seconds; 

    displayTime.innerHTML = hrs +":" + min + ":" + sec;
}

function watchStart(){
    if (timer !== null){
        clearInterval(timer)
    }
    timer = setInterval(stopwatch, 1000)
}

function watchStop(){
    clearInterval(timer)
}

function watchReset(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0]
    displayTime.innerHTML = "00:00:00"
}