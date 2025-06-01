const API_KEY = "d48bc856d494cb35736d6d6909e2a81c";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then(response => response.json().then(data => {
    const weather = document.querySelector("#weather .weather");
    const city = document.querySelector("#weather .city");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} /${data.main.temp}℃`;
  }));
}

function onGeoError(){
  console.log("위치 정보를 불러올 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);