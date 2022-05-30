let secondsSpan = document.querySelector("#seconds");
let minutesSpan = document.querySelector("#minutes");
const timerButton = document.querySelector("#timer-button");
const hero = document.querySelector("#principal")
let secondsValue = 0;
let minuteValue = 0;
let currentInterval; 
let currentButton;


function startChronometer() {
    currentButton = event.target;
    currentButton.disabled = true;
    currentInterval = setInterval(()=> {
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
    if (currentButton){
        currentButton.disabled = false;
    }
    clearInterval(currentInterval);
}
function executeTimer(){
    hero.innerHTML = `
        <h1 class="hero--title">Timer</h1>
        <div class="hero-time">
            <p id="time"><span id="minutes">00</span>:<span id="seconds">00</span></p>
        </div>
        <div class="buttons--container">
            <form onsubmit="startTimer()">

                <input type="number" placeholder="Put the numbers" id="minutesInput" name="minutes">
                <input type="number" placeholder="Put the seconds" id="secondsInput" name="seconds">
                 <button class="button hero--button"  type="submit">Start</button>
            </form>
        </div>
    `;
    secondsSpan = document.querySelector("#seconds");
    minutesSpan = document.querySelector("#minutes");
}
function executePomodoro(){
    hero.innerHTML = `
    <h1 class="hero--title">Pomodoro</h1>
    <div class="hero-time">
        <p id="time"><span id="minutes">25</span>:<span id="seconds">00</span></p>
    </div>
    <div class="buttons--container">
        <button type="button" class="button hero--button" onclick="startPomodoro()">Start</button>
    </div>
`;
secondsSpan = document.querySelector("#seconds");
minutesSpan = document.querySelector("#minutes");
}
function startPomodoro(){
    secondsValue = 0;
    minutesValue = 25;
    currentInterval = setInterval(() => {
        secondsValue -= 1
        if (secondsValue === -1) {
            secondsValue = 59;
            minutesValue -= 1;
        }
        if (minutesValue === 0 && secondsValue === 0) {
            const container = document.querySelector(".hero-time");
            const title = document.createElement("h2");
            title.textContent = "El Pomodoro a terminado";
            container.appendChild(title);
            clearInterval(currentInterval);
        }
        minutesSpan.textContent = formatValue(minutesValue);
        secondsSpan.textContent = formatValue(secondsValue);
    }, 1000);
}
function resetChronometer(){
    minuteValue = 0
    secondsValue = 0
    secondsSpan.textContent = "00" 
    minutesSpan.textContent = "00"
}
function startTimer(){
    event.preventDefault()
    const minutes = parseInt(event.target.minutes.value);
    const seconds = parseInt(event.target.seconds.value);

    minutesSpan.textContent = minutes;
    secondsSpan.textContent = seconds;
    secondsValue = seconds;
    minutesValue = minutes;
    
    currentInterval = setInterval(() => {
        secondsValue -= 1
        if (secondsValue === -1) {
            secondsValue = 59;
            minutesValue -= 1;
        }
        if (minutesValue === 0 && secondsValue === 0) {
            const container = document.querySelector(".hero-time");
            const title = document.createElement("h2");
            title.textContent = "El timer a terminado";
            container.appendChild(title);
            clearInterval(currentInterval);
        }
        minutesSpan.textContent = formatValue(minutesValue);
        secondsSpan.textContent = formatValue(secondsValue);
    }, 1000);
}
function executeChronometer(){
    hero.innerHTML = `
    <h1 class="hero--title">Chronometer</h1>
    <div class="hero-time">
        <p id="time"><span id="minutes">00</span>:<span id="seconds">00</span></p>
    </div>
    <div class="buttons--container">
        <button class="button hero--button" type="button" onclick="startChronometer()">Start</button>
        <button class="button hero--button" type="button" onclick="stopChronometer()">Stop</button>
        <button class="button hero--button" onclick="resetChronometer()" type="button">Reset</button>
    </div>
    `
    secondsSpan = document.querySelector("#seconds");
    minutesSpan = document.querySelector("#minutes");
};
