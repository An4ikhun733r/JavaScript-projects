const key = "cc33d720adf8432a99e191116241403";

const btn = document.getElementById('submitLocation');
const inputt = document.getElementById('city');

btn.addEventListener("click", () => {
    getWeather();
})

async function getWeather(){
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${inputt.value}`, {mode: 'cors'});
    const data = await response.json();
    alert(`Current temperature in ${inputt.value} is ${data.current.temp_c} celcius`);
}



    