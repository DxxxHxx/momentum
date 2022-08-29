
const API_KEY="338b73c4392c70339c04994835bd30ba";

function onGeoOk(position){
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    // console.log("you live in",lat,lng);
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response=>response.json()).then(data=>{
        const weather=document.querySelector("#weather span:first-child");
        const city=document.querySelector("#weather span:last-child");
        
        city.innerText=data.name;
        weather.innerText=`${data.weather[0].main}/ ${data.main.temp}°C,`;
    });
}
function ongeoError(){
    alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,ongeoError); //주석 풀기