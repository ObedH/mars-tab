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
    const latest_sol_data = data[latest_sol_key];
    const at = latest_sol_data.AT;
    const hws = latest_sol_data.HWS;
    const pre = latest_sol_data.PRE;
    const wd = latest_sol_data.WD;
    const season = new String(latest_sol_data.Season).charAt(0).toUpperCase() + String(latest_sol_data.Season).slice(1);

    console.log(`Atmospheric temp:`, at);
    console.log(`Horizontal wind speed:`, hws);
    console.log(`Atmospheric pressure:`, pre);
    console.log(`Wind direction:`, wd);
    console.log(`Season:`, season);

    document.getElementById("mars-sol").textContent = `Sol ${latest_sol_key}`;
    document.getElementById("mars-season").textContent = `Season: ${season}`;
    document.getElementById("mars-at").textContent = `Atmospheric Temperature: ${at.av}`;
    document.getElementById("mars-hws").textContent = `Horizontal Wind Speed: ${hws.av}`;
    document.getElementById("mars-pre").textContent = `Atmospheric Pressure: ${pre.av}`;
});