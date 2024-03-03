document.addEventListener('DOMContentLoaded', function () {
    let api_key = "a0cf34b25a5b05b9f09e0a8dea719888";
    let wicon = document.getElementById('weatherIcon');
    let inputField = document.querySelector(".cityInput");
    let searchIcon = document.getElementById("searchIcon");

    const search = async () => {
        if (inputField.value === "") {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputField.value}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temperature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity + " %";
        wind[0].innerHTML = data.wind.speed + " km/h";
        temperature[0].innerHTML = data.main.temp + "°c";
        location[0].innerHTML = data.name;

        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
            wicon.src = 'clear.png';
        } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
            wicon.src = 'cloud.png';
        } else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
            wicon.src = 'drizzle.png';
        } else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
            wicon.src = 'drizzle.png';
        } else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
            wicon.src = 'rain.png';
        } else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
            wicon.src = 'rain.png';
        } else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
            wicon.src = 'snow.png';
        } else {
            wicon.src = 'clear.png';
        }
    };

    searchIcon.addEventListener("click", search);

    inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            search();
        }
    });
});
