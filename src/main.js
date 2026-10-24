/*const API_KEY = import.meta.env.VITE_NASA_API_KEY;
console.log(API_KEY);

document.querySelector("#app").innerHTML = "<p>Loading...</p>";

fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
.then(data => {
    console.log(data);
});*/

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