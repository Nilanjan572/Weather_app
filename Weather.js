async function getWeather()
{
    var cityname = document.getElementById('cityname').value;
    var response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=cbca2754af348b663635c032ee14f62b&units=metric`)
    var data = await response.json();
    document.getElementById('temperature').innerHTML = data.main.temp+"<sup>o</sup>C";

    var datetime = new Date().toLocaleString();
    document.getElementById('datetime').innerHTML = datetime;
}