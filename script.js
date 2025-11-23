const inputbox=document.querySelector('.input-box');
const search=document.getElementById('search');
const weatherimg=document.querySelector('.weather-img');
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.description');
const humidity=document.getElementById('humidity');
const wind=document.getElementById('wind');
const locnotfound=document.querySelector('.loc-not-found');
const weatherbody=document.querySelector('.weather-body');


async function checkweather(city){
    const api="2441af653e5fdc7454ae2a0ed20590b6";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;

    const data=await fetch(`${url}`).then(response=>response.json());
    if(data.cod==`404`){
        locnotfound.style.display="flex";
        weatherbody.style.display="none";

        console.log("error");
        return;
    }
    weatherbody.style.display="flex";
    locnotfound.style.display="none";
    temperature.innerHTML=`${Math.round(data.main.temp-273.15)}°C`;
    description.innerHTML=`${data.weather[0].description}`;
    humidity.innerHTML=`${data.main.humidity}%`;
    wind.innerHTML=`${data.wind.speed}Km/H`;

  
    

    switch(data.weather[0].main){
        case 'Clouds':
            weatherimg.src="/assets/cloud.png";
            break;
        case 'Clear':
            weatherimg.src="/assets/clear.png";
            break;
        case 'Rain':
            weatherimg.src="/assets/rain.png";
            break;
        case 'Mist':
            weatherimg.src="/assets/mist.png";
            break;
        case 'Snow':
            weatherimg.src="/assets/snow.png";
            break;

    }

}

search.addEventListener('click',()=>{
    checkweather(inputbox.value);
});