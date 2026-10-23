const API_KEY = import.meta.env.VITE_NASA_API_KEY;
console.log(API_KEY);

document.querySelector("#app").innerHTML = "<p>Loading...</p>";

fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
.then(data => {
    console.log(data);
});