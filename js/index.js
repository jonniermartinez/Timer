const secondsSpan = document.querySelector("#seconds");
const minutesSpan = document.querySelector("#minutes");
let secondsValue = 0;
let minuteValue = 0;
let currentChronometer; 

function startChronometer() {
    currentChronometer = setInterval(()=> {
        secondsValue += 1
        if(secondsValue === 60){
            secondsValue = 0
            minuteValue += 1
            minutesSpan.textContent = formatValue(minuteValue)
        }
        secondsSpan.textContent = formatValue(secondsValue)
    }, 1000);
}
function formatValue(value){
    return ("0" + value).slice(-2);
}
function stopChronometer() {
    clearInterval(currentChronometer);
}
function resetChronometer(){
    minuteValue = 0
    secondsValue = 0
    secondsSpan.textContent = "00" 
    minutesSpan.textContent = "00"
}