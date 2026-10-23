const date = document.querySelector("#datepicker").value;

const API_KEY = import.meta.env.VITE_NASA_API_KEY;
fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`)