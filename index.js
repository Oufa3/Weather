var searchInput = document.getElementById("searchInput")
var weatherData;
searchInput.addEventListener("keyup", function searchInp() {
    console.log(searchInput.value);
    startApp(searchInput.value)
})

async function getData(key) {
    var response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${key}&days=3`)
    finalData = await response.json()
    return finalData
}

async function startApp(key) {
     weatherData = await getData(key)
    // console.log(weatherData);
    todayData()
    tommorwData()
    nextTomwData()
}
function todayData() {
    var date = new Date(weatherData.location.localtime)
    document.getElementById("day").innerHTML = date.toLocaleDateString("en-US",{weekday:"long"})
    document.getElementById("Month").innerHTML = date.toLocaleDateString("en-US",{month:"short"})

    document.getElementById("city").innerHTML =( weatherData.location.name)
    document.getElementById("degree").innerHTML =( weatherData.current.temp_c+"oC")
    document.getElementById("weatherCondition").innerHTML =( weatherData.current.condition.text)
    document.getElementById("todayImg").setAttribute("src","https:"+weatherData.current.condition.icon)
    document.getElementById("humidity").innerHTML =( weatherData.current.wind_mph+"%")
    document.getElementById("winds").innerHTML =( weatherData.current.wind_kph+"km/h")
    document.getElementById("weatherTrend").innerHTML =( weatherData.current.wind_dir)
}
function tommorwData(){
    let date = new Date(weatherData.forecast.forecastday[1].date)
     document.getElementById("tommorowday").innerHTML = date.toLocaleDateString("en-US",{weekday:"long"})

     document.querySelector(".degree .forecast-icon img").setAttribute("src","https:"+weatherData.forecast.forecastday[1].day.condition.icon)
     document.getElementById("maxTemperature").innerHTML = (weatherData.forecast.forecastday[1].day.maxtemp_c+"o")
     document.getElementById("minTemperature").innerHTML = (weatherData.forecast.forecastday[1].day.mintemp_c+"o")
     document.querySelector(".tomorrow .forecast-body .weatherCondition").innerHTML = (weatherData.forecast.forecastday[1].day.condition.text)
}
function nextTomwData(){
    let date = new Date(weatherData.forecast.forecastday[2].date)
     document.getElementById("tommorowday").innerHTML = date.toLocaleDateString("en-US",{weekday:"long"})
     
     document.getElementById("afterimage").setAttribute("src","https:"+weatherData.forecast.forecastday[2].day.condition.icon)
     document.getElementById("AftertomorrowmaxTemperature").innerHTML = (weatherData.forecast.forecastday[2].day.maxtemp_c+"o")
     document.getElementById("AftertomorrowminTemperature").innerHTML = (weatherData.forecast.forecastday[2].day.mintemp_c+"o")
     document.querySelector(".after-tomorrow .forecast-body .weatherCondition").innerHTML = (weatherData.forecast.forecastday[2].day.condition.text)
}







