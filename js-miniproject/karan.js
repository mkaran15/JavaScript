var timer;
var check = false;
var pauseButton = document.getElementById('pauseAndResumeButtonId');
var container = document.getElementById('count');
var time = {}

var counthour = 0;
var countminute = 0;
var countsecond = 0;
                
function handler() {


    var time1 = document.getElementById('hms').value;
    var pieces = time1.split(":");


    var hours = pieces[0];
    var minutes = pieces[1];
    var seconds = pieces[2];

    time.hours =  hours * 1 ;
    time.minutes = minutes * 1;
    time.seconds = seconds * 1;
    




    timer = setInterval(countdown, 1000);
}

function countdown() {
   

    if (time.seconds > 0) {
        time.seconds--;
    }else {
        if (time.minutes > 0) {
            time.minutes--;
            time.seconds = 60;
        }else {
            time.minutes = 60;
            time.seconds = 60;
            time.hours--;
            }
        }

    if (time.hours >= 0 ) {
        if(time.seconds<10){
            time.seconds="0"+time.seconds;
            
        }
        if(time.minutes<10 && countminute == 0){
            time.minutes="0"+time.minutes;
            countminute = 1;
        }
        if(time.hours<10 && counthour == 0){
            time.hours="0"+time.hours;
            counthour = 1
        }
        container.innerHTML =  time.hours + ':' + time.minutes + ':' + time.seconds ;
        }else {
            container.innerHTML = 'Time over';
            clearInterval(timer);
            }   

    }

function pause(){
    timeInPause = container.textContent;
    if(check === false){
        clearInterval(timer);
        check = true;
    }
}

function resume(){
    var timeInPause = container.textContent;
    if(check === true){
        var pieces2 = timeInPause.split(":");
        time.hours = pieces2[0] * 1;
        time.minutes = pieces2[1] * 1;
        time.seconds = pieces2[2] * 1;
        timer = setInterval(countdown, 1000);
        check = false;
    }
}