const clock = document.getElementById("clock");
function updateTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}
updateTime();

function setupTimer() {
    setInterval(updateTime, 1000);
}

// Align the time update function to whole seconds
const milliseconds = Date.now();
const millisecondsTillNextSecond = 1000 - milliseconds % 1000;
setTimeout(setupTimer, millisecondsTillNextSecond);


const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;

fetch(`https://api.nasa.gov/insight_weather/?api_key=${NASA_API_KEY}&feedtype=json&ver=1.0`)
.then(response => response.json())
.then(data => {
    console.log(data);
    const latest_sol_key = data.sol_keys[6];
    console.log(latest_sol_key);
});