setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()

//De code voor de uren en minuten digitaal begint hier
function showTime(){
    var date = new Date();
	var s = date.getSeconds();
    var h = date.getHours();
    var m = date.getMinutes();
    var d = date.getDay();
    var today = date.getDate();
    var month = date.getMonth();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months = ["January","February","March","April","May","June","july","August","September","October","November","December"];
    
    //
    h = h > 9 ? h : '0' + h;
    m = m > 9 ? m : '0' + m;
	s = s > 9 ? s : '0' + s;
    
    document.getElementById("dateToday").innerHTML = days[d];
    document.getElementById("dateMonth").innerHTML = today + " " + months[month];
    document.getElementById("timeHour").innerHTML = h;
    document.getElementById("timeMinute").innerHTML = m;
	document.getElementById("timeSeconds").innerHTML = s;
    
    //Dit is geen setInterval omdat de klok hier onder het anders niet meer doet...
    setTimeout(showTime, 1000);
    
}

showTime();


//hier begint de code voor dark-mode
function darkMode(){
    var date = new Date();
    var h = date.getHours();
    var d = document.getElementById('theme');
    
    if (h > 17 || h < 6){
        d.classList.add('dark');
    }else{
        d.classList.remove('dark');
    }
}

setInterval(darkMode, 1000)

darkMode();
