function search() {
    cityname=input.value
    if(cityname.length==0){
    result.innerHTML=`<h3>Place</h3>`
    }
    else{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=5b4bee0ba241d092159faf007e166080`).then(data=>data.json())
    .then(data=>display_data(data))
    }
function display_data(weather_details){
    place = weather_details.name;
    description = weather_details.weather[0].description
    country = weather_details.sys.country
    temp = weather_details.main.temp
    temp_min = weather_details.main.temp_min
    temp_max = weather_details.main.temp_max
    humidity = weather_details.main.humidity
    wind = weather_details.wind.speed
    icon = weather_details.weather[0].icon;
    feelsLike = weather_details.main.feels_like;
    temp = Math.round(temp - 273.15);
    temp_min = Math.round(temp_min - 273.15);
    temp_max = Math.round(temp_max - 273.15);
    result.innerHTML=`<div class="part1">
                <h1 class="temp"><i class="fa-solid fa-temperature-three-quarters"></i>${temp}<sup>°</sup>C</h1>
                <img src="http://openweathermap.org/img/wn/${icon}@4x.png" alt="showWeather" class="w-25">
                <h2 class="city" id="city">${place}</h2>
                <h2 class="country" id="city">${country}</h2><hr>
                <h3 class="date" id="date">${description}</h3>
                </div>
                <div class="weather-status">
                <h4 class="humidity" id="humidity">Humidity- <i class="fa-solid fa-droplet me-1"></i>${humidity}%</h4>
                <h4 class="weather" id="weather">Wind speed- <i class="fa-sharp fa-solid fa-wind"></i>&ensp;${wind}kmph</h4>
                <div class="temp1">
                    <h4 class="weather" id="weather">Min ${temp_min}<sup>°</sup>C</h4>
                    <h4 class="weather" id="weather">Max ${temp_max}<sup>°</sup>C</h4>
                </div>
                </div>`
}
}